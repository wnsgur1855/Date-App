import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { HeaderContainer, HeaderLeft, HeaderRight, Img, FriendBox, ImgBox } from '../styles/Header';
import Modal from './Modal';

function Headers() {
  const [information, setInformation] = useState(false);

  const navigate = useNavigate();
  const mainpagehandler = () => {
    navigate('my');
  };
  const informationHadler = () => {
    alert('d');
    setInformation(true);
  };
  return (
    localStorage.getItem('join.nickname') && (
      <HeaderContainer width="99%" height="70px" jc="space-between">
        <HeaderLeft fontSize="xx-large">
          오늘의 매칭
          <Img src="./imgs/information.svg" onClick={informationHadler} />
          {information ? <Modal /> : null}
        </HeaderLeft>
        <HeaderRight>
          <FriendBox>
            <ImgBox>
              <Img src="./imgs/plus.svg" />
            </ImgBox>
            <HeaderLeft fontSize="large">친구요청</HeaderLeft>
          </FriendBox>
          <div>
            <Img src="./imgs/user.svg" onClick={mainpagehandler} />
          </div>
        </HeaderRight>
      </HeaderContainer>
    )
  );
}

export default Headers;
