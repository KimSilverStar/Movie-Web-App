import React from 'react';
import ReactDOM from 'react-dom';
import App from "./App";

// Component: App
// JSX: JS와 HTML을 함께 사용하는 일종의 React 특화 개념 
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);