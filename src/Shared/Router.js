import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';
import SideVar from '../components/SideVar';
import Detail from '../pages/Detail';
import Home from '../pages/Home';
import Mypage from '../pages/Mypage';
import NotFound from '../pages/NotFound';
import styled from 'styled-components';

const Center = styled.div`
  height: 70vh;
  display: flex;
  flex-direction: row;
`;

const Router = () => {
  return (
    <BrowserRouter>
      <Header />
      <Center>
        <SideVar />
        <Routes>
          <Route path="/*" element={<NotFound />} />
          <Route path="my" element={<Mypage />} />
          <Route path="/" element={<Home />} />
          <Route path="/:id" element={<Detail />} />
        </Routes>
      </Center>
      <Footer />
    </BrowserRouter>
  );
};

export default Router;
