import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as planetActions from 'store/modules/planet';

import 'css/DataView.css';

class DataView extends Component{
    constructor(props){
        super(props);
        // let get_data = this.props.data;

        this.state = {
            data : this.copyObject(this.planet_status_set(this.props.data))
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
        let data = this.state.data;
        let temp = this.set_status(nextProps.data);
        data.animal.health = temp.animal;
        data.plant.health = temp.plant;
        data.native.health = temp.native;
        data.trash.poison = temp.trash;

        this.props.planet_data(data);
        // this.setState({
        //     data : data
        // });
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

    copyObject = (obj) => {
        let copy = Array.isArray(obj) ? [] : {};

        if (typeof obj === 'object' && obj !== null) {
            for (let attr in obj) {
                if (obj.hasOwnProperty(attr)) {
                    copy[attr] = this.copyObject(obj[attr]);
                }
            }
        } else {
            copy = obj;
        }
        return copy;
    }

    compareObject = (a, b) => {
        let type = typeof a, i, j;
        if (type === "object") {
            if (a === null) return a === b;
            else if (Array.isArray(a)) {
                if (!Array.isArray(b) || a.length !== b.length) return false;
                for (i = 0, j = a.length; i < j; i++) {
                    if (!this.compareObject(a[i], b[i])) return false;
                }
                return true;
            } else { //일반 오브젝트인 경우

                j = 0;
                for (i in b) {
                    if (b.hasOwnProperty(i)) j++;
                }

                for (i in a) {
                    if (a.hasOwnProperty(i)) {
                        if (!this.compareObject(a[i], b[i])) return false;
                        j--;
                    }
                }

                return !j;
            }
        }
        return a === b;
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
            if((data.plant.amount + data.animal.amount) < data.native.amount * 2){
                result.native -= 1;
            }
        }else{
            result = {plant : 3, animal : 3, native : 3, trash : 3};
        }

        return result;
    }

    planetDataSet=(data, target, action)=>{
        let temp = data;
        switch(action){
            case 'add':
                temp[target].amount += 300;
                break;
            case 'remove':
                if(temp[target].amount > 300){
                    temp[target].amount -= 300;
                }
                break;
            default:
                console.log(action);
                break;
        }
        this.props.planet_data(this.copyObject(this.planet_status_set(temp)));
        this.setState({
            data : this.planet_status_set(this.copyObject(temp))
        });
        
    }

    render(){
        let data = this.state.data;
        let x_data1 = 45;
        let y_data1 = 25;
        let x_data2 = 50;
        let y_data2 = 35;
        let x_data3 = 42;
        let y_data3 = 29;
        let x_data4 = 45;
        let y_data4 = 42;

        return(
            <div className='dataContainer'>
                <div className='dataBack'>
                    <svg viewBox='0 0 200 70'>
                        <path d='M 10 18 L 17 10 H 98 V 54 L 92 61 H 10 Z' stroke='gray'/>
                        <polyline points='82 11, 97 11, 97 25' stroke='#fff' strokeWidth='3' />
                        <polyline points='26 60, 11 60, 11 47' stroke='#fff' strokeWidth='3' />
                        <line x1='98' y1='54' x2='190' y2='54' stroke='gray' />
                        <line x1='98' y1='54' x2='148' y2='54' stroke='#ddd' strokeWidth='3' />

                        <path d={`M`+x_data1+` `+y_data1+` q 7 -7, 15 0 v 14 q -8 8, -15 1 v -15`} fill='#222' stroke='#ddd' className='animal_body'/>
                        <circle cx={x_data1+7} cy={y_data1+4} r='5' stroke='#333' fill='#eee' className='animal_eye' />
                        <circle cx={x_data1+7} cy={y_data1+4} r='2' fill='black' className='animal_pupil'/>
                        <line x1={x_data1} y1={y_data1+11} x2={x_data1-3} y2={y_data1+12} stroke='#ddd' />
                        <line x1={x_data1+15} y1={y_data1+12} x2={x_data1+18} y2={y_data1+12} stroke='#ddd' />
                        <line x1={x_data1+1} y1={y_data1+16} x2={x_data1-2} y2={y_data1+17} stroke='#ddd' />
                        <line x1={x_data1+14} y1={y_data1+15} x2={x_data1+17} y2={y_data1+17} stroke='#ddd' />
                        <line x1={x_data1+8} y1={y_data1+19} x2={x_data1+2} y2={y_data1+21} stroke='#ddd' />
                        <line x1={x_data1+11} y1={y_data1+19} x2={x_data1+13} y2={y_data1+20} stroke='#ddd' />
                        <line x1={x_data1+7} y1={y_data1+19} x2={x_data1+7} y2={y_data1+23} stroke='#ddd' />
                    </svg>
                    <ul>
                        <li><p>Type : animal</p></li>
                        <li><p>Amount : {data.animal.amount / 100}m</p></li>
                        <li>
                            <p>Health</p>
                            <div className={`health data_status_`+data.animal.health}><span></span></div>
                        </li>
                    </ul>
                    <div>
                        <button className='btn_reproduce' onClick={()=>this.planetDataSet(data, 'animal', 'add')}>REPRODUCE</button>
                        <button className='btn_die' onClick={()=>this.planetDataSet(data, 'animal', 'remove')}>DIE</button>
                        <svg viewBox='0 0 200 30'>
                            <path d='M10 17 l 10 -13 h 72 v 13 z' stroke='gray' strokeWidth='1'/>
                            <path d='M107 17 l 10 -13 h 72 v 13 z' stroke='gray' strokeWidth='1'/>
                        </svg>
                    </div>
                </div>
                <div className='dataBack'>
                    <svg viewBox='0 0 200 70'>
                        <path d='M 10 18 L 17 10 H 98 V 54 L 92 61 H 10 Z' stroke='gray'/>
                        <polyline points='82 11, 97 11, 97 25' stroke='#fff' strokeWidth='3' />
                        <polyline points='26 60, 11 60, 11 47' stroke='#fff' strokeWidth='3' />
                        <line x1='98' y1='54' x2='190' y2='54' stroke='gray' />
                        <line x1='98' y1='54' x2='148' y2='54' stroke='#ddd' strokeWidth='3' />

                        <path d={`M`+x_data2+` `+y_data2+` q -13 3, -10 -4 q 0 -10, 8 -7 q 1 -8, 10 -5 q 8 2, 3 10 q 8 2, 3 10 q -5 8, -11 -2 l -3 -2`} fill='#008000' className='plant_leaf'/>
                        <line x1={x_data2+1} y1={y_data2+1} x2={x_data2-3} y2={y_data2+14} stroke='#66350d' strokeWidth='3' className='plant_trunk'/>
                    </svg>
                    <ul>
                        <li><p>Type : plant</p></li>
                        <li><p>Amount : {data.plant.amount / 100}m</p></li>
                        <li>
                            <p>Health</p>
                            <div className={`health data_status_`+data.plant.health}><span></span></div>
                        </li>
                    </ul>
                    <div>
                        <button className='btn_reproduce' onClick={()=>this.planetDataSet(data, 'plant', 'add')}>REPRODUCE</button>
                        <button className='btn_die' onClick={()=>this.planetDataSet(data, 'plant', 'remove')}>DIE</button>
                        <svg viewBox='0 0 200 30'>
                            <path d='M10 17 l 10 -13 h 72 v 13 z' stroke='gray' strokeWidth='1'/>
                            <path d='M107 17 l 10 -13 h 72 v 13 z' stroke='gray' strokeWidth='1'/>
                        </svg>
                    </div>
                </div>
                <div className='dataBack'>
                    <svg viewBox='0 0 200 70'>
                        <path d='M 10 18 L 17 10 H 98 V 54 L 92 61 H 10 Z' stroke='gray'/>
                        <polyline points='82 11, 97 11, 97 25' stroke='#fff' strokeWidth='3' />
                        <polyline points='26 60, 11 60, 11 47' stroke='#fff' strokeWidth='3' />
                        <line x1='98' y1='54' x2='190' y2='54' stroke='gray' />
                        <line x1='98' y1='54' x2='148' y2='54' stroke='#ddd' strokeWidth='3' />

                        <path d={`M`+x_data3+` `+y_data3+` q 14 -20, 27 0 q 8 4, 0 8 q 0 4, -5 6 q 1 5, -8 8 q -11 -4, -9 -9 q -6 -2, -6 -5 q -8 -4, 0 -8`} fill='brown' className='native_hair'/>
                        <path d={`M`+(x_data3+18)+` `+(y_data3+18)+`h -11 q -2 -2, 1 -6 v -2 q -6 -1, -7 -6 q 5 -6, 11 0 h 3 q 5 -6, 10 0 q 0 6, -6 6 v 2 q 2 4, -1 6`} fill='white' stroke='white' className='native_face'/>
                        <circle cx={x_data3+7} cy={y_data3+5} r='3' fill='black' className='native_eye'/>
                        <circle cx={x_data3+20} cy={y_data3+5} r='3' fill='black' className='native_eye'/>
                        <circle cx={x_data3+12} cy={y_data3+10} r='1' fill='black' />
                        <circle cx={x_data3+15} cy={y_data3+10} r='1' fill='black' />
                    </svg>
                    <ul>
                        <li><p>Type : native</p></li>
                        <li><p>Amount : {data.native.amount / 100}m</p></li>
                        <li>
                            <p>Health</p>
                            <div className={`health data_status_`+data.native.health}><span></span></div>
                        </li>
                    </ul>
                    <div>
                        <button className='btn_reproduce' onClick={()=>this.planetDataSet(data, 'native', 'add')}>REPRODUCE</button>
                        <button className='btn_die' onClick={()=>this.planetDataSet(data, 'native', 'remove')}>DIE</button>
                        <svg viewBox='0 0 200 30'>
                            <path d='M10 17 l 10 -13 h 72 v 13 z' stroke='gray' strokeWidth='1'/>
                            <path d='M107 17 l 10 -13 h 72 v 13 z' stroke='gray' strokeWidth='1'/>
                        </svg>
                    </div>
                </div>
                <div className='dataBack'>
                    <svg viewBox='0 0 200 70'>
                        <path d='M 10 18 L 17 10 H 98 V 54 L 92 61 H 10 Z' stroke='gray'/>
                        <polyline points='82 11, 97 11, 97 25' stroke='#fff' strokeWidth='3' />
                        <polyline points='26 60, 11 60, 11 47' stroke='#fff' strokeWidth='3' />
                        <line x1='98' y1='54' x2='190' y2='54' stroke='gray' />
                        <line x1='98' y1='54' x2='148' y2='54' stroke='#ddd' strokeWidth='3' />

                        <path d={`M`+x_data4+` `+y_data4+` q -4 0, -6 4 l 4 -1 l 3 4 q 2 -5, -1 -7 q 2 -8, 17 -17 q -3 -3, -3 -5 l 11 -1 q -4 6, -4 9 q -4 -1, -4 -3 q -14 10, -17 17`} fill='darkgray' className='trash_body' />
                        <path d={`M`+(x_data4+6)+` `+(y_data4)+` q -1 -3, -4 -3 q -2 -3, -5 -3`} stroke='darkgray' className='trash_thron1' />
                        <path d={`M`+(x_data4+10)+` `+(y_data4-4)+` q -1 -4, -5 -3 q -2 -4, -5 -3`} stroke='darkgray' className='trash_thron2' />
                        <path d={`M`+(x_data4+12)+` `+(y_data4-6)+` q 0 -3, -3 -4 q -2 -5, -5 -5`} stroke='darkgray' className='trash_thron1' />
                        <path d={`M`+(x_data4+18)+` `+(y_data4-8)+` q -1 -4, -5 -5 q -1 -6, -5 -6`} stroke='darkgray' className='trash_thron2' />
                    </svg>
                    <ul>
                        <li><p>Type : trash</p></li>
                        <li><p>Amount : {data.trash.amount}kt</p></li>
                        <li>
                            <p>poison</p>
                            <div className={`poison data_status_`+data.trash.poison}><span></span></div>
                        </li>
                    </ul>
                    <div className='view_btn_area'>
                        <button className='btn_reproduce' onClick={()=>this.planetDataSet(data, 'trash', 'add')}>WASTE</button>
                        <button className='btn_die' onClick={()=>this.planetDataSet(data, 'trash', 'remove')}>RECYCLE</button>
                        <svg viewBox='0 0 200 30'>
                            <path d='M10 17 l 10 -13 h 72 v 13 z' stroke='gray' strokeWidth='1'/>
                            <path d='M107 17 l 10 -13 h 72 v 13 z' stroke='gray' strokeWidth='1'/>
                        </svg>
                    </div>
                </div>
            </div>
        )
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

export default connect(mapStateToProps, mapDispatchToProps)(DataView);