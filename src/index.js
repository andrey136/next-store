import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Provider from "react-redux/lib/alternate-renderers";
import configureStore from "./redux/store/store";

// ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
//   document.getElementById('root')
// );

ReactDOM.render(
  <React.StrictMode>
    <Provider store={configureStore()}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

