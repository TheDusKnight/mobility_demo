import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './components/App';
// import Page from './components/Page'
import * as serviceWorker from './serviceWorker';
import DemoLine from "./components/DemoLine";
import Album from "./components/Album";

ReactDOM.render(
  <React.StrictMode>
    <DemoLine />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
