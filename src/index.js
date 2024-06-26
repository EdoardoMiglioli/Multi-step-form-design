import React from 'react';
import ReactDOM from 'react-dom/client';
import index from "./styles/index.css";
import sidebar from "./styles/sidebar.css";
import step from "./styles/step.css";
import buttons from "./styles/buttons.css";
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
