import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import Layout from '../components/Layout/Layout';
import Home from '../pages/Home';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
