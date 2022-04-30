import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import GetInTouch from './main/pages/getInTouch';
import Home from './main/pages/home';
import Me from './main/pages/me';
import Work from './main/pages/work';

function App() {
  return (
    <>
       <Routes>
        <Route path="/" element={<Home />} />
        <Route path="work" element={<Work />} />
        <Route path="me" element={<Me />} />
        <Route path="get-in-touch" element={<GetInTouch />} />
      </Routes>
      </>
  );
}

export default App;
