import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import * as planetActions from 'store/modules/planet';

import 'css/planet.css';

class PlanetPopUp extends Component {
    constructor(props){
        super(props);

        let data = this.props.info;

        this.state = {
            info : this.set_environment(data)
        }
    }

    componentWillReceiveProps(nextProps){
        let number = nextProps.number;
        let popupAll = document.querySelectorAll('.planet_popup_wrap');
        
        for(let i = 0; i < popupAll.length; i++){
            let item = popupAll[i];
            let popup = document.querySelector('.planet_popup'+number);
            if(item === popup){
                item.style.display = 'block';
            }else{
                item.style.display = 'none';
            }
        }
    }

    closePopup=(num)=>{
        let self = this;
        let popup = document.querySelector('.planet_popup'+num);
        popup.classList.add('hide');
        setTimeout(function(){
            popup.style.display = 'none';
            popup.classList.remove('hide');
            self.props.planet_num(0);
        }, 200);
    }

    planetDataSet=(data)=>{
        this.props.planet_data(data);
    }

    set_environment=(data)=>{
        let items = data;

        switch(items.id){
            case 1:
                items.planet_name = 'X';
                items.ground = 30;
                items.ocean = 65;
                break;
            case 2:
                items.planet_name = 'Y';
                items.ground = 25;
                items.ocean = 70;
                break;
            case 3:
                items.planet_name = 'Z';
                items.ground = 10;
                items.ocean = 50;
                break;
            default:
                items.planet_name = '';
                items.ground = 0;
                items.ocean = 0;
                break;
        }
        
        return items;
    }

    render() {
        let info = this.state.info;

        return (
            <div className={`planet_popup_wrap planet_popup${info.id} ${this.props.currentPlanet === info.id && `active`}`}>
                <div className='popup_box'>
                    <div className='popup_left'>
                        <div></div>
                        <div></div>
                    </div>
                    <div className='popup_center'>
                        <div></div>
                        <div>
                            <div></div>
                            <div>
                                <p className='planet_name'>Planet {info.planet_name}</p>
                                <button onClick={()=>this.closePopup(info.id)}>X</button>
                                <p>ground : {info.ground}h</p>
                                <p>ocean : {info.ocean}h</p>
                                <p>plant : {info.plant.amount / 100}m</p>
                                <p>animal : {info.animal.amount / 100}m</p>
                                <p>native : {info.native.amount / 100}m</p>
                                <Link to={`/detail/`+info.id} onClick={()=>this.planetDataSet(info)}>Go!</Link>
                            </div>
                        </div>
                        <div></div>
                    </div>
                    <div className='popup_right'>
                        <div></div>
                        <div></div>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    number : state.planet.number
});

const mapDispatchToProps = (dispatch) => ({
    planet_num : (number = 0) => {
        dispatch(planetActions.planet_num(number));
    },
    planet_data : (data = {})=> {
        dispatch(planetActions.planet_data(data));
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(PlanetPopUp);