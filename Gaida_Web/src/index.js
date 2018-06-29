import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducer from './reducer/combine';
import { ReduxThunk } from 'redux-thunk';

let store = createStore(reducer);

const rootElement = document.getElementById('root');

ReactDOM.render(
    <BrowserRouter>
        <Provider store = { store }>
            <App/>
        </Provider>
    </BrowserRouter>,
    rootElement
)
