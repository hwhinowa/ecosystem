import { createStore } from 'redux';
import modules from './modules';

// 스토어 생성 함수
const configure = () => {
    // 크롬 확장프로그램 사용을 위한 설정
    const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    const store = createStore(modules, devTools);

    return store;
}

export default configure;