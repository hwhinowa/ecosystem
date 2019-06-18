import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import * as planetActions from 'store/modules/planet';

import PlanetGroundContainer from 'containers/PlanetGroundContainer';
import DataView from 'containers/DataView';
import DataSummary from '../containers/DataSummary';
import 'css/planetDetail.css';

class PlanetDetail extends Component{
    constructor(props){
        super(props);

        let name = '';
        switch(this.props.match.params.number){
            case('1') :
                name = 'X';
                break;
            case('2') :
                name = 'Y';
                break;
            case('3') :
                name = 'Z';
                break;
            default :
                name = '';
                return;
        }

        this.state = {
            planetName : 'Planet ' + name,
            planetInfo : this.copyObject(this.props.data)
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

    componentWillMount() {
        const planetInfo = localStorage.planetInfo;
        const nextId = localStorage.nextId;
        if(this.state.planetInfo.id !== 0){
            localStorage.setItem('planetInfo', JSON.stringify(this.state.planetInfo));
        }else{
            this.setState({
                planetInfo : JSON.parse(planetInfo),
                nextId
            }, function(){this.props.planet_data(JSON.parse(planetInfo));});
        }
    }

    componentWillReceiveProps(PrevState, nextProps){
        let self = this;
        if(!this.compareObject(PrevState.planetInfo, nextProps.data)){
            self.setState({
                planetInfo : {...nextProps.data}
            });
        }
        // if(this.props.data !== nextProps.data){
        //     self.setState({
        //         planetInfo : {...nextProps.data}
        //     });
        // }
    }

    // static getDerivedStateFromProps(nextProps, prevState) {
    //     if(nextProps.data !== prevState.planetInfo){
    //         return {planetInfo : nextProps.data};
    //     }
    //     // return null;    // null을 return하면 따로 업데이트할 것은 없다는 의미
    // }

    componentDidUpdate(prevProps, prevState) {
        if(JSON.stringify(prevState.planetInfo) !== JSON.stringify(this.state.planetInfo)) {
            localStorage.planetInfo = JSON.stringify(this.state.planetInfo);
        }

        if(prevState.nextId !== this.state.nextId){
            localStorage.nextId = this.state.nextId;
        }
    }

    render(){
        return(
            <div>
                <div>
                    <Link to='/' className='goHome'>
                    <div>Home</div>
                    </Link>
                    <h1>{this.state.planetName} Ecosystem</h1>

                    <PlanetGroundContainer
                        data = {this.props.data}
                    />

                    <DataView
                        data = {this.props.data}
                    />

                    <DataSummary
                        data = {this.props.data}
                    />
                </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(PlanetDetail);