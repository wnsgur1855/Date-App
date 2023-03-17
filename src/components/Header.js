import React from 'react';
import styled from 'styled-components';
import AudioPlayer from './AudioPlayer';

const HeaderBar = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100px;
  background-color: beige;
`;

function Header() {
  return (
    <>
      <HeaderBar>
        <AudioPlayer />
      </HeaderBar>
      ;
    </>
  );
}

export default Header;
