import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import App from './App';
import Header from './Component/Header';
import Grandmom from './Component/Routes/GrandMaPage';
import Mom from './Component/Routes/MomPage';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Header></Header>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/grand-mom" element={<Grandmom />} />
      <Route path="/mom" element={<Mom />} />
    </Routes>
  </BrowserRouter>
);
