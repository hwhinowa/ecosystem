// 액션 타입 정의
const PLANET_NUM = 'planet/PLANET_NUM';
const PLANET_DATA = 'planet/PLANET_DATA';
const DATA_DETAIL = 'planet/DATA_DETAIL';

// 액션 생성 함수 생성
export const planet_num = (number) => ({
    type : PLANET_NUM,
    number
});
export const planet_data = (data) => ({
    type : PLANET_DATA,
    data
});
export const data_detail = (data_detail) => ({
    type : DATA_DETAIL,
    data_detail
});

// 모듈의 초기 상태 정의
const initialState = {
    number : 0,
    data : {
        id : 0,
        native : {
            amount : 0,
            health : 0
        },
        animal : {
            amount : 0,
            health : 0
        },
        plant : {
            amount : 0,
            health : 0
        },
        trash : {
            amount : 0,
            poison : 0
        },
        ground : 0,
        ocean : 0
    }
};

// 리듀서 만들어서 반환
export default function reducer(state = initialState, action){
    switch(action.type){
        case PLANET_NUM :
            return {
                ...state,
                number : action.number
            };
        case PLANET_DATA : 
            return {
                ...state,
                data : action.data
            };
        case DATA_DETAIL :
            return {
                ...state,
                data_detail : action.data_detail
            };
        default :
            return state;
    }
}