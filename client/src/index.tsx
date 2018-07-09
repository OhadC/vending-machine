import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import App from './Containers/App/App';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import store from "./Store/Store";
import * as serverAPI from './ServerAPI/serverAPI';

serverAPI.init();

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root') as HTMLElement
);
registerServiceWorker();
