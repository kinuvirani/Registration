import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/app/App';
import {BrowserRouter} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import {Provider} from 'react-redux';
import store from './store.js';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<BrowserRouter>
<Provider store={store}>
<App />
</Provider></BrowserRouter>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
