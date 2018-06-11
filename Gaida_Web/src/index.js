import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import Login from './container/Login';
import App from './App';

const rootElement = document.getElementById('root');
ReactDOM.render(
    <BrowserRouter>
        <App/>
    </BrowserRouter>,
    // <Login />,
    document.getElementById('root')
)