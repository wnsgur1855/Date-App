import React from 'react';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { HomeContainer } from './Home';
import { SS } from './Home';
import styled, { keyframes } from 'styled-components';
import Swal from 'sweetalert2';
import AudioPlayer from '../components/AudioPlayer';

function useModal(initialState = false) {
  const [visible, setVisible] = useState(initialState);

  const openModal = () => {
    setVisible(true);
  };

  const closeModal = () => {
    setVisible(false);
  };

  return { visible, openModal, closeModal };
}

// 모달 컴포넌트 스타일드 컴포넌트로 정의
export const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.3);
  display: ${({ visible }) => (visible ? 'flex' : 'none')};
  justify-content: center;
  align-items: center;
  z-index: 999;
`;

export const ModalContents = styled.div`
  background-color: #fff;
  border-radius: 4px;
  padding: 20px;
  animation: ${({ visible }) => (visible ? fadeIn : fadeOut)} 2s;
`;

// 애니메이션 키프레임 정의
export const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(500px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const fadeOut = keyframes`
  from {
    opacity: 1;
    transform: translateY(1);
  }

  to {
    opacity: 0;
    transform: translateY(-500px);
  }
`;

const DDiv = styled.div`
  animation-duration: 3s;
  animation: ${({ slide }) => slide && slidein};
`;
const slidein = keyframes`
from {
    margin-left: 100%;
    width: 300%
  }

  to {
    margin-left: 0%;
    width: 100%;
  }
`;

function Mypage() {
  const [join, setJoin] = useState({
    nickname: '',
    password: '',
  });

  const [slide, setSlide] = useState(true);
  useEffect(() => {
    setSlide(true);
  }, []);

  const { visible, openModal, closeModal } = useModal(false);
  const navigate = useNavigate();

  const logoutHandler = () => {
    localStorage.removeItem('join.nickname');
    localStorage.removeItem('join.password');
    Swal.fire({
      title: `${join.nickname}님 잘가요😭`,
      icon: 'warning',
      confirmButtonText: '확인',
    }).then(() => navigate('/')); // 확인 버튼을 누르면 '/' 경로로 이동합니다.
  };

  return (
    <HomeContainer>
      <DDiv slide={slide}>안녕하세요 나는 박준혁입니다 지금부터 마술쇼 시작합니다</DDiv>
      <div>
        <button onClick={openModal}>모달 열기</button>
        <ModalWrapper visible={visible}>
          <ModalContents visible={visible}>
            <h2>모달 제목</h2>
            <p>모달 내용</p>
            <button onClick={closeModal}>닫기</button>
          </ModalContents>
        </ModalWrapper>
      </div>
      <SS onClick={logoutHandler}>로그아웃</SS>
    </HomeContainer>
  );
}

export default Mypage;

//헤더에있으면 뭐가 됐든 작동이 안 된다? -->이유 z-index

//로컬스토리지 key값 잘 확인하자

// slidein은 keyframes를 선언한 변수이기 때문에 DDiv에서 animation에 slidein을 전달할 때 props로 전달하는 것이 아니라,
//     keyframes의 이름 그대로 전달해야 합니다.
//     또한, DDiv의 slide 속성에 true를 전달하는 것이 아니라,
//         slide 상태값을 전달해주어야 합니다.

//이쁜 alert창 만들기
