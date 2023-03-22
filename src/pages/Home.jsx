import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Modal from '../components/Modal';

import AudioPlayer from '../components/AudioPlayer';

import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { SwiperImgBox, SwiperImg } from './Detail';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/free-mode';

export const HomeContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 98vh;
`;

export const SS = styled.button`
  display: grid;
  width: 80px;
  height: 80px;
  background-color: red;
  grid-template-columns: repeat(4, 180px);
  gap: 16px 83px;
  overflow: hidden;
  margin-top: 28px;
  padding: 30px 40px;
  line-height: 20px;
  transition: transform 0.2s ease-in-out;
  white-space: nowrap;
  -webkit-transition: width 2s, height 2s, background-color 2s, -webkit-transform 2s;
  transition: width 2s, height 2s, background-color 2s, transform 2s;
  cursor: pointer;
  &:hover {
    background-color: #ffcccc;
    width: 200px;
    height: 200px;
    -webkit-transform: rotate(180deg);
    transform: rotate(360deg);
    transition-duration: 0.1s;
    transition-timing-function: steps(4, end);
    transition-delay: 1s;
    transition-property: opacity, left, top, height;
    transition-duration: 3s, 5s, 3s, 5s;
  }
`;

const Sw = styled.div`
  position: relative;
  transition-property: background-color, color;
  transition-duration: 1s;
  transition-timing-function: ease-out;
  text-align: left;
  background-color: grey;
  left: 5px;
  top: 5px;
  height: 26px;
  color: white;
  border-color: black;
  font-family: sans-serif;
  font-size: 20px;
  text-decoration: none;
  box-shadow: 2px 2px 1px black;
  padding: 2px 4px;
  border: solid 1px black;
  & :hover {
    position: relative;
    transition-property: background-color, color;
    transition-duration: 1s;
    transition-timing-function: ease-out;
    background-color: white;
    color: black;
    box-shadow: 2px 2px 1px black;
  }
`;

function Home() {
  const [loginModal, setLoginModal] = useState(false);

  const longinHandler = () => {
    setLoginModal(true);
  };
  const Data = [
    { src: '/imgs/love.png' },
    { src: '/imgs/gong.png' },
    { src: '/imgs/whang.png' },
    { src: '/imgs/hh.png' },
  ];
  return (
    <>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
        slidesPerView={1}
        autoplay={{
          delay: 5000,
        }}
        loop={true}
        pagination={{ clickable: true }}
      >
        {Data.map((item, idx) => {
          return (
            <SwiperSlide key={idx}>
              <SwiperImgBox>
                <SwiperImg src={item.src} />
              </SwiperImgBox>
            </SwiperSlide>
          );
        })}
      </Swiper>
      <HomeContainer>
        <SS onClick={longinHandler}>입장하로 GO</SS>
        {loginModal ? <Modal /> : null}
        Home
        <Sw>하이하이</Sw>
      </HomeContainer>
    </>
  );
}

export default Home;
