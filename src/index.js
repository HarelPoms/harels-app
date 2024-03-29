import React from 'react';
import ReactDOM from 'react-dom/client';
import axios from "axios";
/* redux */
import { Provider } from "react-redux";
import store from "./store/bigPie";
/* end of redux*/
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import {BrowserRouter} from "react-router-dom"
//Explanation segment 
// import "./validation/validationExplanation.js"

axios.defaults.baseURL = "/api"

axios.interceptors.request.use((config)=>{
  const token = localStorage.getItem("token");
  if(token){
    config.headers["x-auth-token"] = token;
  }
  return config;
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
