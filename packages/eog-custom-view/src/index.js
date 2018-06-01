import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import store from "eog-data-layer/src/store";
import AppConnect from './AppConnect';

ReactDOM.render(<Provider store = {store}><AppConnect />
    </Provider>, document.getElementById('app'));

module.hot.accept();