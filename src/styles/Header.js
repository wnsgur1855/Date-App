import styled from 'styled-components';

export const HeaderContainer = styled.div`
  display: flex;
  position: fixed;
  bottom: ${(props) => props.bottom};
  justify-content: ${(props) => props.jc};
  align-items: center;
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  background-color: ${(props) => props.bg};
  box-shadow: rgba(0, 0, 0, 0.07) 0px 3px 4px 0px;
`;

export const HeaderLeft = styled.h1`
  display: flex;
  justify-content: space-between;
  width: 1000px;
  font-family: 'KyoboHandwriting2021sjy';
  font-weight: 1000;
  font-size: ${(props) => props.fontSize};
`;

export const HeaderRight = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 400px;
`;

export const FriendBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  width: 160px;
  height: 50px;
  border-radius: 30px;
  background-color: rgb(242, 242, 242);
`;
export const ImgBox = styled.div`
  display: flex;
  align-items: center;
  width: 40px;
  height: 40px;
  border-radius: 60px;
  background-color: #f8a0cf;
`;

export const Img = styled.img`
  width: 100px;
  height: 40px;
  cursor: pointer;
`;
