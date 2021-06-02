import React from 'react'
import ReactDOM from 'react-dom'
import App from './router/index';

import "./assets/scss/index.scss";

const contain:HTMLElement = document.getElementById('app');

ReactDOM.render( <App /> , contain );