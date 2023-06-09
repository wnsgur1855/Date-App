import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Home from '../pages/Home';
import Detail from '../pages/Detail';
import Main from '../pages/Main';
import Mypage from '../pages/Mypage';
import NotFound from '../pages/NotFound';
import MouseCursur from '../elements/MouseCursur';

const Router = () => {
  return (
    <BrowserRouter>
      <MouseCursur />
      <Header />
      <Routes>
        <Route path="/*" element={<NotFound />} />
        <Route path="my" element={<Mypage />} />
        <Route path="/" element={<Home />} />
        <Route path="main" element={<Main />} />
        <Route path="/:id" element={<Detail />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default Router;
