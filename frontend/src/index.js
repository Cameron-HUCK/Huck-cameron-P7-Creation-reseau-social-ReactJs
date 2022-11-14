import React from 'react';
import ReactDOM from 'react-dom/client';
import './components/App/App.css';
import App from './components/App/index'
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<BrowserRouter>
	  <React.StrictMode>
	    <App />
	  </React.StrictMode>
	</BrowserRouter>
);

