import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as planetActions from 'store/modules/planet';

import Planet from 'components/planet/Planet';

class PlanetContainer extends Component {
    constructor(props){
        super(props);

        this.state = {
            info : {
                ...this.props.info,
                ground : 0,
                ocean : 0
            }
        }
    }

    handle_number = (number) => {
        this.props.planet_num(number);
    }

    render() {
        const { handle_number } = this;

        return (
            <Planet
                info = {this.state.info}
                onPlanetNumber = {handle_number}
            />
        );
    }
}

// props 값으로 넣어줄 상태 정의
const mapStateToProps = (state) => ({
    number : state.planet.number
});

// props 값으로 넣어줄 액션 함수들 정의
const mapDispatchToProps = (dispatch) => ({
    planet_num : (number = 0) => {
        // const number = 0;
        dispatch(planetActions.planet_num(number));
    }
    // onPlanetNumber : () => {
    //     const number = 0;
    //     dispatch(planetActions.planet_num(number));
    // }
});

export default connect(mapStateToProps, mapDispatchToProps)(PlanetContainer);