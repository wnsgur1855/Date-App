import { useState } from 'react';
import styled from 'styled-components';
import Login from '../components/Login';
import Signup from '../components/SignUp';
import { getCookie } from '../utils/cookie';

export const ModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 450px;
  height: 500px;
  border: 1px solid;
`;

function Modal() {
  return (
    <ModalContainer>
      {getCookie('token') ? <Login /> : <Signup />}
      <button>ㅇㅇ</button>
    </ModalContainer>
  );
}
export default Modal;
