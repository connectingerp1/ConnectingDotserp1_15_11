import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router } from 'react-router-dom';
import { CityProvider } from './CityContext';

const rootElement = document.getElementById('root');

// Use only createRoot for client-only rendering
const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <Router>
      <CityProvider>
        <App />
      </CityProvider>
    </Router>
  </React.StrictMode>
);

reportWebVitals();
