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
      <Route path="/happyMomsDay/" element={<App />} />
      <Route path="/happyMomsDay/grand-mom" element={<Grandmom />} />
      <Route path="/happyMomsDay/mom" element={<Mom />} />
    </Routes>
  </BrowserRouter>
);
