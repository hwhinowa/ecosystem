import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as planetActions from 'store/modules/planet';

import 'css/DataSummary.css';

class DataSummary extends Component{
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
        if(nextProps.data){
            this.setState({
                data : nextProps.data
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

    set_text = () => {
        let data = this.state.data;
        let text = '';
        switch(data.planet_name){
            case 'X':
                text = 'Planet X 행성은 자연을 느끼기에 좋은 곳입니다. 이 곳은 ';
                break;
            case 'Y':
                text = '지구와 가장 닮아있는 Planet Y는 ';
                break;
            case 'Z':
                text = '바다가 전체 면적의 80% 이상을 차지하는 Planet Z는 ';
                break;
            default:
                text = '정체를 알 수 없는 이 행성은';
        }
        if(data.native.health < 3){
            if((data.animal.health + data.plant.health) < 4 ){
                text += '가축들이 병들었고 작물은 메말라 원주민들이 영양실조로 고통받고 있습니다. ';
            }else{
                text += '평범한 삶을 살고있는 원주민들의 모습을 볼 수 있습니다. ';
            }
        }else{
            if((data.animal.health + data.plant.health) < 4 ){
                text += '평범한 삶을 살고있는 원주민들의 모습을 볼 수 있습니다. ';
            }else{
                text += '건강한 동물과 영양분 가득한 식물이 풍족해 원주민들의 삶의 질이 높습니다. ';
            }
        }

        if(data.native.amount / data.ground < 50){
            text += '이 곳의 인구밀도는 1헥타르당 '+(data.native.amount / data.ground)+'만명으로 육지 면적에 비해 인구수가 상당히 낮은 편입니다.';
        }else if(data.native.amount / data.ground > 100){
            text += '이 곳의 인구밀도는 1헥타르당 '+(data.native.amount / data.ground)+'만명으로 육지 면적에 비해 인구수가 상당히 높은 편입니다.';
        }else{
            text += '이 곳의 인구밀도는 1헥타르당 '+(data.native.amount / data.ground)+'만명으로 적정 수준을 유지하고 있습니다.';
        }

        if((data.animal.amount + data.plant.amount) < data.native.amount){
            text += '하지만 그에 비해 동식물 수가 충분하지 못하기 때문에 곳곳에 빈민가가 형성되었습니다. ';
        }

        if(data.trash.poison < 3){
            text += '체계적인 쓰레기 처리시설과 원주민들의 높은 시민의식으로 쓰레기 배출량이 적정량으로 유지되고 있습니다. 우리가 할 일은 지금의 아름다운 모습을 간직하는 것입니다.';
        }else{
            text += '무분별한 쓰레기 투기와 분리수거가 제대로 이뤄지지않아 독성이 강한 쓰레기들이 행성을 병들게 하고 있습니다. 우리가 할 수 있는 일은 무엇일까요?';
        }



        return text;
    }


    render(){
        let starting_text = this.set_text();

        return(
            <div className='summaryContainer'>
                {starting_text}
                {/* {data.native.health < 3 ?
                '가축들이 병들었고 작물은 메말라 원주민들이 영양실조로 고통받고 있습니다. '
                :
                '건강한 동물과 식물이 풍족해 원주민들의 삶의 질이 높습니다. '
                }
                {data.trash.health < 3 ?
                '원주민들의 쓰레기 무단투기로 인해 각종 대기오염과 수질오염이 심각합니다. '
                :
                '체계적인 쓰레기 소각 시스템이 갖춰져있고, 원주민들의 환경보호 의식이 투철해 지상낙원이 따로 없습니다. '
                } */}
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

export default connect(mapStateToProps, mapDispatchToProps)(DataSummary);