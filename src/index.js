import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Details from './pages/Details';
import './global.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <React.StrictMode>
  <Routes>
    <Route path='/' element={<Home />} />
    <Route path='/details/:id' element={<Details />} />
  </Routes>
  </React.StrictMode>
  </BrowserRouter>
);

