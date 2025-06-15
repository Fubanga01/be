import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';  // Crie este arquivo de estilo caso não exista
import App from './App';  // Criar o componente App.js
import reportWebVitals from './reportWebVitals'; // Crie esse arquivo ou ignore

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
