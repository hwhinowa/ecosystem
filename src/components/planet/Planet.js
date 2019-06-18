import React from 'react';
import PropTypes from 'prop-types';

import 'css/planet.css';

const Planet = ({info, onPlanetNumber}) => {
    return (
        <div
            className={`planet_wrap planet${info.id}`}
            onClick={()=>onPlanetNumber(info.id)}>
        </div>
    );
};

// class Planet extends Component{
//     constructor(props){
//         super(props);

//         this.state = {
//             info : this.props.info
//         }
//     }

//     honPlanetNumber = (number) => {
//         this.props.onPlanetNumber(number);
//     }

//     componentWillReceiveProps(nextProps){
//     }
    

//     render(){
//         console.log(this.state.info.id);
//         return(
//             <div
//                 className={`planet_wrap planet${this.state.info.id}`}
//                 onClick={()=>this.honPlanetNumber(this.state.info.id)}>
//             </div>
//         )
//     }
// }

Planet.propTypes = {
    info : PropTypes.object,
    onPlanetNumber : PropTypes.func
};

Planet.defaultProps = {
    info : {id:0, ground:0, ocean:0, plant:{amount:0, health:0}, animal:{amount:0, health:0}, native:{amount:0, health:0}, trash:{amount:0, poison:0}},
    onPlanetNumber : () => console.warn('onPlanetNumber not defined')
}

export default Planet;