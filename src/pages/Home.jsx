import React from 'react';
import styled from 'styled-components';

const HomeContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 98vh;
  border: 1px solid;
`;

const SS = styled.button`
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
    transition-duration: 0.5s;
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
  return (
    <>
      <HomeContainer>
        <SS>안녕</SS>
        Home
        <Sw>하이하이</Sw>
      </HomeContainer>
    </>
  );
}

export default Home;
