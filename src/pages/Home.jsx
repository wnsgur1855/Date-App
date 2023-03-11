import React, { useEffect, useState } from 'react';
import { QueryClient, useMutation, useQuery } from 'react-query';
import styled from 'styled-components';
import { getItem, postItem, delItem } from '../api/axios';

const ContainerBox = styled.div`
  display: flex;
  flex-direction: column;

  padding: 10px;
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
  border: 2px solid black;
`;

function Home() {
  const queryClient = new QueryClient();
  const [del, setDel] = useState(false);
  //초기값으로 ""를 넣지 않는 경우 에러
  const [push, setPush] = useState({
    title: '',
    author: '',
  });

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setPush({
      ...push,
      [name]: value,
    });
  };

  console.log(push.title);
  console.log(push.author);
  const postButtonHandler = () => {
    try {
      const { title, author } = push;
      const obj = {
        title,
        author,
      };
      postMutate.mutateAsync(obj);
      //payload나오는 거 확인했으니 post요청으로 보내기
      console.log(obj);
    } catch (error) {
      console.log(error);
    }
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
    <>
      <input type="text" name="title" onChange={onChangeHandler} />
      <input type="text" name="author" onChange={onChangeHandler} />
      <button onClick={postButtonHandler}>추가버튼</button>
      <MapContainer>
        {data.data.map((item) => {
          return (
            <MapBox key={item.id}>
              <div>{item.id}</div>
              <div>{item.title}</div>
              <div>{item.author}</div>
              <button onClick={() => DelButtonHandler(item.id)}>삭제</button>
            </MapBox>
          );
        })}
      </MapContainer>
      <div>여기는get목록들</div>
    </>
  );
}

// map함수 전부 key를
export default Home;
