import { combineReducers } from 'redux';
import planet from './planet';

// 여러개의 리듀서를 하나의 리듀서(루트 리듀서)로 합쳐줌 
export default combineReducers({
    planet
    // 리듀서가 늘어나면 여기에 추가
});