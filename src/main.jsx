import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx';
import './styles/index.css';

// Root of the React application.  Wraps the App component in a Router and StrictMode.
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/*
      The BrowserRouter uses the basename defined by Vite (import.meta.env.BASE_URL).
      This allows routes to work correctly when deployed on a GitHub Pages subpath.
    */}
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
);