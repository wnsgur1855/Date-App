import React from 'react';
import AudioPlayer from './AudioPlayer';
import { HeaderContainer, Img } from '../styles/Header';

function Footer() {
  return (
    <HeaderContainer
      width="99%"
      height="165px"
      bg=" rgb(250, 250, 250);"
      jc="space-around"
      bottom="0"
    >
      <Img src="./imgs/Wheart.svg" />
      <Img src="./imgs/check.svg" />
      <Img src="./imgs/3bar.svg" />
      <Img src="./imgs/message.svg" />
    </HeaderContainer>
  );
}

export default Footer;
