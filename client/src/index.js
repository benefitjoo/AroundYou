import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

const rootElement = document.getElementById('wrap');
ReactDOM.render(<App footerTitle="© 2016 shakedownflight" />, rootElement); // in ../public/index.html, find Id 'wrap' and render first arg at App(App.js)
