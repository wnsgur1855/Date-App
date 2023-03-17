import React, { useEffect, useState } from 'react';
import { QueryClient, useMutation, useQuery } from 'react-query';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { getItem, postItem, delItem } from '../api/axios';
import Slider from 'react-slick';

function Home() {
  const queryClient = new QueryClient();
  //초기값으로 ""를 넣지 않는 경우 에러
  const [push, setPush] = useState({
    title: '',
    author: '',
  });
  const navigate = useNavigate();

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setPush({
      ...push,
      [name]: value,
    });
  };
  //get -> useQuery를 사용해
  const { isLoading, isError, data } = useQuery('posts', getItem, { cacheTime: 0 });

  //post
  const postMutate = useMutation(postItem, {
    onSuccess: (data) => {
      console.log('데이터 추가');
      queryClient.invalidateQueries('posts');
    },
  });
  const postButtonHandler = () => {
    try {
      const { title, author } = push;
      const obj = {
        title,
        author,
      };
      postMutate.mutateAsync(obj);
      window.location.reload();
      //payload나오는 거 확인했으니 post요청으로 보내기
      console.log(obj);
    } catch (error) {
      console.log(error);
    }
  };
  //delete "쿼리키"
  const deleteMutate = useMutation(delItem, {
    onSuccess: (data) => {
      console.log('데이터 삭제');
      queryClient.invalidateQueries('posts');
    },
  });
  const DelButtonHandler = (id) => {
    try {
      const response = deleteMutate.mutateAsync(id);
      //payload찍어보려면  const response = deleteMutate.mutateAsync(id) 보내기 전 주석으로 ㄱ
      console.log(id);
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };

  if (isLoading) {
    return <p>로딩중입니다</p>;
  }
  if (isError) {
    return <p>오류발생</p>;
  }

  return (
    <ContainerBox>
      <input type="text" name="title" onChange={onChangeHandler} />
      <input type="text" name="author" onChange={onChangeHandler} />
      <button onClick={postButtonHandler}>추가버튼</button>
      <link rel="icon" type="image/png" href="imgs/love.png" />
      <MapContainer>
        {data.data.map((item) => {
          return (
            <MapBox key={item.id}>
              <MapDiv>{item.id}</MapDiv>
              <MapDiv>{item.title}</MapDiv>
              <MapDiv>{item.author}</MapDiv>
              <button onClick={() => DelButtonHandler(item.id)}>삭제</button>
              <button onClick={() => navigate(`/${item.id}`)}>이동</button>
            </MapBox>
          );
        })}
      </MapContainer>
    </ContainerBox>
  );
}

const ContainerBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 80vh;
  padding: 10px;
  gap: 10px;
`;

const MapContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

const MapBox = styled.div`
  width: 200px;
  height: 100px;
  border: 2px solid #23169c;
  border-radius: 5px;
  background-color: aqua;
`;

const MapDiv = styled.div`
  width: 100px;
  height: 20px;
  border: 2px solid black;
`;

// map함수 전부 key를
export default Home;
