import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import AppConnect from './AppConnect';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from "react-redux";
import store from "data-layer/src/store";

console.log('store',store);

ReactDOM.render(<Provider store = {store}><AppConnect />
    </Provider>, document.getElementById('root'));
registerServiceWorker();
