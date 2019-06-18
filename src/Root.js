import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import { HashRouter as Router } from 'react-router-dom';
// import { browserHistory } from 'react-router';


import App from 'components/App';

const Root = () => (
    <Router>
        <Provider store = {store}>
            <App/>
        </Provider>
    </Router>
);

export default Root;