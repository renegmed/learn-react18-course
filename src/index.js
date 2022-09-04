import React from 'react';
import ReactDOM from 'react-dom/client';
import WeatherApp from './WeatherApp';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import './Navbar.module.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    // <React.StrictMode>
        <WeatherApp />
    // </React.StrictMode>
);


