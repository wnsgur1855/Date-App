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
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  border: 1px solid;
  background-color: red;
  transition: background-color 0.5s ease;
  top: ${(props) => props.top};
  border: 1px solid;
  & :hover {
    background-color: blue;
  }
`;

export const ModalStyle1 = styled.div`
  padding: 20px;
  border-bottom: 1px solid #ddd;
  font: 300 24px Lato;
  position: relative;
`;
export const ModalStyle2 = styled.div`
  padding: 20px;
  font: 300 16px Lato;
`;
export const ModalButton = styled.button`
  background: linear-gradient(to right, rgb(220, 227, 91), rgb(69, 182, 73));
  padding: 10px 25px;
  display: inline-block;
  border-radius: 25px;
  margin: 20px 0;
  color: #fff;
  position: relative;
  transition: all 0.4s ease;
  cursor: pointer;
  &:hover {
    box-shadow: 0 3px 15px rgba(0, 0, 0, 0.2);
  }
`;

function Modal() {
  const [join, setJoin] = useState({
    nickname: '',
    password: '',
  });
  return !localStorage.getItem('join.nickname') ? (
    <ModalContainer width="450px" height="500px">
      <Signup />
    </ModalContainer>
  ) : null;
}

export default Modal;
