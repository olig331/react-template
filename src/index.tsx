import React from 'react';
import ReactDOM from 'react-dom';
import App from './Components/App/App';
import '@fontsource/roboto/400.css';
import '@fontsource/lato/400.css';
import '@fontsource/lato/300.css';
import './MainStyles.scss';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
