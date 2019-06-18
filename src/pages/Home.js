import React, { Component } from 'react';
import { connect } from 'react-redux';

import Center from 'components/main/Center';
import Bottom from 'components/main/Bottom';
import Left from 'components/main/Left';
import Right from 'components/main/Right';
import PlanetContainer from 'containers/PlanetContainer';
import PlanetPopUp from 'containers/PlanetPopUp';

import 'css/reset.css';
import 'css/App.css';

class Home extends Component {
    constructor(props) {
        super(props);

        let planet_info = this.planet_set();

        this.state = {
            width : 1920,
            cursor_left : false,
            cursor_center : true,
            cursor_right : false,
            opacity : false,
            planet_info : planet_info
        };
    }

    // Width Modify
    updateWidth() {
        let update_width = window.innerWidth;
        this.setState({
            width : update_width
        });
    }
    componentDidMount() {
        this.updateWidth();
        window.addEventListener('resize', this.updateWidth.bind(this));
    }
    componentWillUnmount() {
        window.removeEventListener('resize', this.updateWidth.bind(this));
    }

    componentWillReceiveProps(nextProps){
        if(nextProps.number !== 0){
            this.setState({
                opacity : true
            });
        }else{
            this.setState({
                opacity : false
            });
        }
    }

    // Planet Info Set
    planet_set=()=>{
        let planet = [];
        let rate = [];

        for(let i = 0; i < 3; i++){
            let obj = {};
            obj.id = i + 1;
            obj.native = {amount : this.randomRange(80, 170) * 10};
            if(i === 2){
                if(rate[0] > 1 && rate[1] > 1){
                    obj.animal = {amount : this.randomRange(50, 90) * 10};
                }else{
                    obj.animal = {amount : this.randomRange(100, 300) * 10};
                }
            }else{
                obj.animal = {amount : this.randomRange(100, 300) * 10};
            }
            obj.native.health = 0;
            obj.animal.health = 0;
            obj.plant = {amount : this.randomRange(obj.native.amount - 300, obj.native.amount + 300), health : 0};

            let trash_temp = Math.floor((obj.plant.amount + obj.animal.amount) / 3);
            obj.trash = {amount: trash_temp, poison:0};

            planet.push(obj);
            rate.push(obj.animal.amoount / obj.native.amount);
        }

        return planet;
    }

    // Random Range
    randomRange=(n1, n2)=>{
        let result = Math.floor((Math.random() * (n2 - n1 + 1))+n1);
        return result;
    }


    // Rotate By Cursor
    rotate_by_cursor=(event)=>{
        // let width = this.state.width;
        // let x = event.clientX;

        // if(x < width * 0.3){
        //     this.setState({
        //         cursor_left : true,
        //         cursor_center : false,
        //         cursor_right : false
        //     });
        // }else if(x >= width * 0.3 && x < width * 0.7){
        //     this.setState({
        //         cursor_left : false,
        //         cursor_center : true,
        //         cursor_right : false
        //     });
        // }else if(x >= width * 0.7){
        //     this.setState({
        //         cursor_left : false,
        //         cursor_center : false,
        //         cursor_right : true
        //     });
        // }
    }

    set_planet_view=()=>{
        let info = this.state.planet_info;
        let result = [];
        for(let i = 0; i < info.length; i++){
            let planet = info[i];
            result.push(
                <PlanetContainer
                    key={`planet_${planet.id}`}
                    info = {this.state.planet_info[i]}
                />
            );
        }

        return result;
    }

    set_popup_view=()=>{
        let info = this.state.planet_info;
        let result = [];
        for(let i = 0; i < info.length; i++){
            let planet = info[i];
            result.push(
                <PlanetPopUp
                    key={`planet_popup_${planet.id}`}
                    info={info[i]}
                />
            );
        }

        return result;
    }

    render() {
        const style_bottom_box = {
            height: `${this.state.width / 1920 * 30}px`
        }
        return (
            <div className='App' onMouseOver={(event)=>this.rotate_by_cursor(event)}>
                {/* IE */}
                <div className="get_out">
                    <p>사이트를 표시할 수 없습니다. PC(브라우저 : Chrome, Firefox나 Opera)로 접속하세요</p>
                </div>
                {/* 행성 표시 */}
                {this.set_planet_view()}

                {/* 각 행성에 대한 팝업 표시 */}
                {this.set_popup_view()}

                <Center
                    width = {this.state.width}
                    cursor_center = {this.state.cursor_center}
                    cursor_left = {this.state.cursor_left}   
                    cursor_right = {this.state.cursor_right}
                    opacity = {this.state.opacity}
                />

                <Left
                    width = {this.state.width}
                    cursor_center = {this.state.cursor_center}
                    cursor_left = {this.state.cursor_left}   
                    cursor_right = {this.state.cursor_right}
                    opacity = {this.state.opacity}
                />

                <Right
                    width = {this.state.width}
                    cursor_center = {this.state.cursor_center}
                    cursor_left = {this.state.cursor_left}   
                    cursor_right = {this.state.cursor_right}
                    opacity = {this.state.opacity}
                />

                <Bottom
                    width = {this.state.width}
                    cursor_center = {this.state.cursor_center}
                    cursor_left = {this.state.cursor_left}   
                    cursor_right = {this.state.cursor_right}
                    opacity = {this.state.opacity}
                />

                <div className={`bottom_box left ${this.state.opacity && `opacity`}`} style={style_bottom_box}></div>
                <div className='bottom_box right' style={style_bottom_box}></div>
            </div>
        );
    }
}

//export default Home;
const mapStateToProps = (state) => ({
    number : state.planet.number
});

export default connect(mapStateToProps)(Home);
