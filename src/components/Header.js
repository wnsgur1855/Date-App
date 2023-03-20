import React from 'react';
import { useNavigate } from 'react-router-dom';
import { HeaderContainer, HeaderLeft, HeaderRight, Img, FriendBox, ImgBox } from '../styles/Header';

function Headers() {
  const navigate = useNavigate();
  const handler = () => {
    navigate('my');
  };
  return (
    <HeaderContainer width="99%" height="70px" jc="space-between">
      <HeaderLeft fontSize="xx-large">
        오늘의 매칭
        <Img src="./imgs/information.svg" />
      </HeaderLeft>
      <HeaderRight>
        <FriendBox>
          <ImgBox>
            <Img src="./imgs/plus.svg" />
          </ImgBox>
          <HeaderLeft fontSize="large">친구요청</HeaderLeft>
        </FriendBox>
        <div>
          <Img src="./imgs/user.svg" onClick={handler} />
        </div>
      </HeaderRight>
    </HeaderContainer>
  );
}

export default Headers;
