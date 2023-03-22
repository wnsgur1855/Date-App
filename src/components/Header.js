import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { HeaderContainer, HeaderLeft, HeaderRight, Img, FriendBox, ImgBox } from '../styles/Header';
import { ModalContainer, ModalStyle1, ModalStyle2, ModalButton } from './Modal';
import { ModalWrapper, ModalContents } from '../pages/Mypage';
import useModal from '../pages/Mypage';
import Swal from 'sweetalert2';

function Headers() {
  //   모달 props사용해보기
  const { visible, openModal, closeModal } = useModal(false);
  const navigate = useNavigate();
  const Swals = () => {
    Swal.fire({
      title: '여러분께 설명드립니다',
      html: '🍀 이 사이트는 한 달간 자기개발의 목표를 이룬 VIP회원들끼리 만남을 성사시켜드리는 사이트입니당 <br><br> 🍀 가입vip회원들은 모두 자리에서 일어나서 합창하시겠어요 <br><br> 🍀 우리는 모두 한 달동안 최선을 다할것을 다짐한다.! <br><br> 🍀 한 달후에 우리는 모두 운명처럼 만날것을 상상한다!',
      confirmButtonText: '숙지하였습니다',
    });
  };

  return (
    localStorage.getItem('join.nickname') && (
      <HeaderContainer
        top="0"
        width="99%"
        height="70px"
        jc="space-between"
        bg=" rgb(250, 250, 250);"
      >
        <HeaderLeft fontSize="xx-large">오늘의 매칭</HeaderLeft>

        <Img src="./imgs/information.svg" onClick={Swals} />

        <HeaderRight>
          <FriendBox>
            <ImgBox>
              <Img src="./imgs/plus.svg" />
            </ImgBox>
            <HeaderLeft fontSize="large">친구요청</HeaderLeft>
          </FriendBox>
          <Img src="./imgs/user.svg" onClick={() => navigate('my')} />
        </HeaderRight>
      </HeaderContainer>
    )
  );
}

export default Headers;
