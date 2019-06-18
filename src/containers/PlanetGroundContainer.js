import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as planetActions from 'store/modules/planet';

import 'css/PlanetGround.css';

class PlanetGroundContainer extends Component{
    constructor(props){
        super(props);
        // let get_data = this.props.data;

        this.state = {
            data : this.planet_status_set(this.props.data)
        };
    }

    planet_status_set = (ref) =>{
        let data = ref ? ref : this.state.data;
        let temp = this.set_status(data);
        data.animal.health = temp.animal;
        data.plant.health = temp.plant;
        data.native.health = temp.native;
        data.trash.poison = temp.trash;

        this.props.planet_data(data);
        return data;
    }
    componentWillReceiveProps(nextProps){
        let data = nextProps.data;
        let temp = this.set_status(nextProps.data);

        if(nextProps.data !== this.state.data){
            data.animal.health = temp.animal;
            data.plant.health = temp.plant;
            data.native.health = temp.native;
            data.trash.poison = temp.trash;

            this.props.planet_data(data);
            this.setState({
                data : data
            });
        }
    }

    componentWillMount() {
        const planetInfo = localStorage.planetInfo;
        const nextId = localStorage.nextId;
        if(this.state.data.id !== 0){
            localStorage.setItem('planetInfo', JSON.stringify(this.state.data));
        }else{
            this.setState({
                data : JSON.parse(planetInfo),
                nextId
            });
        }
    }

    componentDidUpdate(prevProps, prevState) {
        if(JSON.stringify(prevState.data) !== JSON.stringify(this.state.data)) {
            localStorage.planetInfo = JSON.stringify(this.state.data);
        }

        if(prevState.nextId !== this.state.nextId){
            localStorage.nextId = this.state.nextId;
        }
    }

    set_status = (data) =>{
        let result = {plant : 0, animal : 0, native : 0, trash : 0};

        if(data){
            let trash_rate = data.trash.amount / data.ground;
            if(trash_rate < 30){
                result.plant = 4;
                result.trash = 1;
            }else if(trash_rate < 50){
                result.plant = 3;
                result.trash = 2;
            }else if(trash_rate < 80){
                result.plant = 2;
                result.trash = 3;
            }else{
                result.plant = 1;
                result.trash = 4;
            }

            let flag_animal = 0;
            let plant_rate = data.plant.amount / data.ground;
            if(plant_rate < 50){
                flag_animal += 1;
            }else{
                flag_animal += 2;
            }
            let temp_animal = flag_animal + result.plant - 1;
            if(temp_animal > 4){
                result.animal = 4;
            }else{
                result.animal = temp_animal;
            }

            let flag_native = 0;
            let life_rate = (data.plant.amount + data.animal.amount * 2) / data.ground;
            if(life_rate < 200){
                flag_native += 1;
            }else{
                flag_native += 2;
            }
            if(result.animal + result.plant < 6){
                flag_native += 1;
            }else{
                flag_native += 2;
            }
            result.native = flag_native;
        }else{
            result = {plant : 3, animal : 3, native : 3, trash : 3};
        }

        return result;
    }

    point_set = () => {
        let data = this.state.data;
        let points_arr1, points_arr2, points_arr3, result = [];

        points_arr1 = [
            [266, 42], [387, 227], [349, 315], [118, 232], [400, 517], [229, 516], [554, 351], [226, 102], [410, 90], [269, 202], [486, 237], [412, 400]
        ];

        points_arr2 = [
            [213, 254], [502, 245], [62, 365], [95, 214], [509, 141], [545, 344], [60, 96], [310, 384], [407, 196], [158,264],  [265, 242], [562, 328]
        ];

        points_arr3 = [
            [319, 314], [200, 488], [270, 138], [273, 247], [307, 519], [104, 122], [485, 210], [438, 373], [515, 352], [375, 151], [405, 210], [257, 400]
        ];

        let p, a, t = 0;

        t = data.native.amount / data.ground.amount > 0.7 ? 3 : 2;
        let rate_ref = 12 - t;
        p = Math.floor(data.plant.amount / (data.animal.amount + data.plant.amount + data.native.amount) / rate_ref * 100);
        a = Math.floor(data.animal.amount / (data.animal.amount + data.plant.amount + data.native.amount) / rate_ref * 100);
        // h = rate_ref - p - a;
        let middle_arr;

        switch(data.id){
            case 1 :
                middle_arr = points_arr1;
                break;
            case 2 :
                middle_arr = points_arr2;
                break;
            case 3 :
                middle_arr = points_arr3;
                break;
            default :
                middle_arr = [];
                break;
        }

        let key_flag = 1;

        for(let i = 0; i < middle_arr.length; i++){
            if(middle_arr.length !== 0){
                if(t > 0){
                    points_push(middle_arr[i][0], middle_arr[i][1], 't');
                    t -= 1;
                }else if(a > 0){
                    points_push(middle_arr[i][0], middle_arr[i][1], 'a');
                    a -= 1;
                }else if(p > 0){
                    points_push(middle_arr[i][0], middle_arr[i][1], 'p');
                    p -= 1;
                }else{
                    points_push(middle_arr[i][0], middle_arr[i][1], 'h');
                }
            }
        }

        function points_push(x_data, y_data, type_data){
            switch(type_data){
                case 'p':
                    result.push(
                        <svg
                            viewBox='0 0 600 600'
                            key={`planet`+data.id+`_`+key_flag+`_p`} className={`plant_status_`+data.plant.health}>
                            <path d={`M`+x_data+` `+y_data+` q -13 3, -10 -4 q 0 -10, 8 -7 q 1 -8, 10 -5 q 8 2, 3 10 q 8 2, 3 10 q -5 8, -11 -2 l -3 -2`} fill='#008000' className='plant_leaf'/>
                            <line x1={x_data+1} y1={y_data+1} x2={x_data-3} y2={y_data+14} stroke='#66350d' strokeWidth='3' className='plant_trunk'/>
                        </svg>
                    );
                    break;
                case 'a':
                    result.push(
                        <svg
                            viewBox='0 0 600 600'
                            key={`planet`+data.id+`_`+key_flag+`_a`}  className={`animal_status_`+data.animal.health}>
                            <path d={`M`+x_data+` `+y_data+` q 7 -7, 15 0 v 14 q -8 8, -15 1 v -15`} fill='#222' stroke='#ddd' className='animal_body'/>
                            <circle cx={x_data+7} cy={y_data+4} r='5' stroke='#333' fill='#eee' className='animal_eye' />
                            <circle cx={x_data+7} cy={y_data+4} r='2' fill='black' className='animal_pupil'/>
                            <line x1={x_data} y1={y_data+11} x2={x_data-3} y2={y_data+12} stroke='#ddd' />
                            <line x1={x_data+15} y1={y_data+12} x2={x_data+18} y2={y_data+12} stroke='#ddd' />
                            <line x1={x_data+1} y1={y_data+16} x2={x_data-2} y2={y_data+17} stroke='#ddd' />
                            <line x1={x_data+14} y1={y_data+15} x2={x_data+17} y2={y_data+17} stroke='#ddd' />
                            <line x1={x_data+8} y1={y_data+19} x2={x_data+2} y2={y_data+21} stroke='#ddd' />
                            <line x1={x_data+11} y1={y_data+19} x2={x_data+13} y2={y_data+20} stroke='#ddd' />
                            <line x1={x_data+7} y1={y_data+19} x2={x_data+7} y2={y_data+23} stroke='#ddd' />
                        </svg>
                    );
                    break;
                case 'h':
                    result.push(
                        <svg
                            viewBox='0 0 600 600'
                            key={`planet`+data.id+`_`+key_flag+`_h`} className={`native_status_`+data.native.health}>
                            <path d={`M`+x_data+` `+y_data+` q 14 -20, 27 0 q 8 4, 0 8 q 0 4, -5 6 q 1 5, -8 8 q -11 -4, -9 -9 q -6 -2, -6 -5 q -8 -4, 0 -8`} fill='brown' className='native_hair'/>
                            <path d={`M`+(x_data+18)+` `+(y_data+18)+`h -11 q -2 -2, 1 -6 v -2 q -6 -1, -7 -6 q 5 -6, 11 0 h 3 q 5 -6, 10 0 q 0 6, -6 6 v 2 q 2 4, -1 6`} fill='white' stroke='white' className='native_face'/>
                            <circle cx={x_data+7} cy={y_data+5} r='3' fill='black' className='native_eye'/>
                            <circle cx={x_data+20} cy={y_data+5} r='3' fill='black' className='native_eye'/>
                            <circle cx={x_data+12} cy={y_data+10} r='1' fill='black' />
                            <circle cx={x_data+15} cy={y_data+10} r='1' fill='black' />
                        </svg>
                    );
                    break;
                case 't':
                    result.push(
                        <svg
                            viewBox='0 0 600 600'
                            key={`planet`+data.id+`_`+key_flag+`_t`} className={`trash_status_`+data.trash.health}>
                            <path d={`M`+x_data+` `+y_data+` q -4 0, -6 4 l 4 -1 l 3 4 q 2 -5, -1 -7 q 2 -8, 17 -17 q -3 -3, -3 -5 l 11 -1 q -4 6, -4 9 q -4 -1, -4 -3 q -14 10, -17 17`} fill='darkgray' className='trash_body' />
                            <path d={`M`+(x_data+6)+` `+(y_data)+` q -1 -3, -4 -3 q -2 -3, -5 -3`} stroke='darkgray' className='trash_thron1' />
                            <path d={`M`+(x_data+10)+` `+(y_data-4)+` q -1 -4, -5 -3 q -2 -4, -5 -3`} stroke='darkgray' className='trash_thron2' />
                            <path d={`M`+(x_data+12)+` `+(y_data-6)+` q 0 -3, -3 -4 q -2 -5, -5 -5`} stroke='darkgray' className='trash_thron1' />
                            <path d={`M`+(x_data+18)+` `+(y_data-8)+` q -1 -4, -5 -5 q -1 -6, -5 -6`} stroke='darkgray' className='trash_thron2' />
                        </svg>
                    );
                    break;
                default :
                    break;
            }
            key_flag += 1;
        };

        return result;
    }

    render(){
        let data = this.state.data;
        
        return(
            <div className={`groundContainer ground`+(data.id+1)}>
                <div className='dataPoints'>
                    {this.point_set()}
                </div>
                <svg viewBox='0 0 600 600'>
                    {(data.id === 1) &&
                        <path id='test' d='M102 227 V 217 C 95 211, 45 198, 102 191 Q 108 177, 102 165 Q 96 153, 102 144 Q 115 125, 125 104 Q 152 93, 153 65 T 176 41 Q 179 40, 180 35 Q 189 24, 201 32 L 214 32 L 228 17 H 253 Q 256 20, 260 16 Q 263 13, 266 16 Q 268 18, 273 15 Q 278 6, 283 14 Q 284 20, 289 16 Q 292 15, 290 22 Q 288 25, 291 29 Q 295 33, 297 37 Q 289 49, 304 52 Q 316 51, 327 62 L 349 69 V 60 Q 363 40, 377 58 H 386 Q 405 68, 426 60 Q 441 66, 444 60 Q 445 56, 447 60 Q 458 76, 446 95 L 454 125 Q 467 132, 466 148 Q 462 159, 472 163 Q 483 170, 486 185 Q 499 189, 505 203 H 509 Q 523 217, 542 208 Q 559 201, 514 287 Q 474 337, 490 367 Q 509 409, 474 430 Q 447 450, 457 462 Q 465 482, 450 485 Q 439 494, 443 508 Q 414 562, 378 564 Q 350 588, 332 552 Q 336 540, 316 510 Q 279 428, 296 400 Q 308 371, 292 346 Q 264 306, 282 286 L 275 277 Q 259 281, 242 265 Q 234 267, 228 264 Q 200 275, 193 272 Q 186 268, 179 271 Q 144 279, 132 261 Q 121 258, 121 249 Q 120 237, 102 227' stroke='#fff' />
                    }

                    {(data.id === 2) &&
                        <path d='M306 315 Q 303 319, 298 318 Q 267 313, 252 336 Q 210 353, 204 344 Q 197 334, 180 340 Q 163 345, 162 339 Q 160 331, 150 341 Q 129 328, 94 363 L 54 396 Q 59 379, 46 389 L 37 372 L 80 349 L 80 316 Q 92 304, 84 300 Q 75 297, 75 292 Q 72 284, 59 287 L 18 271 L 7 235 Q 31 222, 29 213 L 38 208 L 56 219 L 72 217 Q 104 226, 120 207 Q 136 205, 170 178 L 204 190 L 249 183 L 261 198 Q 291 197, 318 188 L 324 194 L 332 194 L 354 183 Q 373 189, 379 182 L 383 178 Q 386 180, 390 177 Q 429 147, 443 158 Q 565 238, 559 244 Q 577 309, 582 365 Q 581 379, 592 385 Q 596 388, 584 386 Q 584 405, 571 402 Q 561 398, 557 406 Q 552 417, 543 412 Q 542 415, 538 414 Q 539 417, 543 417 Q 546 415, 546 419 L 547 426 Q 541 431, 538 429 Q 531 426, 528 430 Q 525 435, 508 420 Q 485 402, 460 416 Q 405 431, 383 398 Q 359 387, 356 367 Q 298 325, 306 315' stroke='#fff'/>
                    }

                    {(data.id === 3) &&
                        <path d='M244 559 L 233 547 Q 215 553, 213 544 Q 209 537, 194 540 Q 143 506, 151 492 Q 165 474, 158 471 Q 155 459, 170 456 Q 178 430, 206 413 Q 189 390, 204 371 Q 223 347, 217 327 Q 214 301, 225 296 Q 236 291, 227 283 Q 218 277, 236 256 Q 265 237, 231 224 Q 214 196, 218 168 Q 236 145, 214 147 Q 200 149, 199 124 Q 203 100, 182 81 Q 153 71, 177 50 Q 192 24, 215 35 Q 242 35, 246 70 L 256 78 Q 274 68, 277 87 Q 301 118, 357 100 L 426 158 L 407 183 L 441 225 Q 439 260, 416 241 Q 407 267, 375 259 Q 362 257, 366 275 Q 371 288, 367 309 Q 399 339, 381 351 Q 361 355, 359 377 Q 375 383, 366 390 Q 361 396, 373 407 L 370 411 Q 402 432, 381 438 Q 375 448, 381 463 Q 491 495, 378 538 Q 390 554, 384 562 L 376 558 Q 357 572,  356 564 Q 332 571, 283 557 Q 265 562, 261 549 Z' stroke='#fff' />
                    }
                </svg>
            </div>
        );
    }

}

const mapStateToProps = (state) => ({
    data : state.planet.data
});

const mapDispatchToProps = (dispatch) => ({
    planet_num : (number = 0) => {
        dispatch(planetActions.planet_num(number));
    },
    planet_data : (data = {})=> {
        dispatch(planetActions.planet_data(data));
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(PlanetGroundContainer);