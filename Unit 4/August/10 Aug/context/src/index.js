import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { AppContextProvider } from './Context/AppContext';
import reportWebVitals from './reportWebVitals';
import { TodoAppContextProvider } from "./Context/TodoAppContext"
ReactDOM.render(
  <React.StrictMode>
    <AppContextProvider>
      <TodoAppContextProvider>
        <App />
      </TodoAppContextProvider>
    </AppContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
