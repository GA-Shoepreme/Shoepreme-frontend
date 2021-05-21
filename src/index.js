import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {BrowserRouter as Router} from 'react-router-dom'
import reportWebVitals from './reportWebVitals';
import { ThemeProvider } from '@material-ui/styles';
import MuiTheme from './component/uiTheme/MuiTheme'

ReactDOM.render(
  <ThemeProvider theme={MuiTheme()}>
  <Router>
    <App />
  </Router>
  </ThemeProvider>
  ,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
