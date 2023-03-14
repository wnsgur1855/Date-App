import React, { useState } from 'react';
import { useMutation, useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { getItem, putItem } from '../api/axios';
import { QueryClient } from 'react-query';

function Detail() {
  const { id } = useParams();
  const [put, setPut] = useState({
    title: '',
    author: '',
  });

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setPut({
      ...put,
      [name]: value,
    });
  };

  const queryClient = new QueryClient();

  const putMutate = useMutation(putItem, {
    onSuccess: (data) => {
      queryClient.invalidateQueries('posts');
    },
  });
  //useQuery 훅은 첫 번째 인자로 쿼리 식별자를 받는다. 이 쿼리 식별자는 캐시를 구분하기 위한 역할을 한다.(쿼리 키)
  //id를 쓴 것은 id값이 변경될 때마다 getItem함수를 호출하여 해당 `id`에 해당하는 데이터를 가져오게 된다.

  const { isLoading, isError, data } = useQuery(['posts', id], () => getItem(id));
  if (isLoading) {
    return <div>로딩중</div>;
  }
  if (isError) {
    return <div>에러남</div>;
  }

  //   console.log({ id });
  //   console.log(data);
  const findItem = data.data.find((item) => {
    // console.log(data);
    return item.id === parseInt(id);
  });

  const handler = () => {
    try {
      const { title, author } = put;
      const obj = {
        title,
        author,
      };
      console.log(obj);
      putMutate.mutateAsync(obj);

      //   window.location.reload();
      console.log('수정완료');
    } catch (error) {
      console.log('수정이 안 되네?');
    }
  };

  return (
    <DetailContainer>
      <input name="title" onChange={onChangeHandler} />
      <input name="author" onChange={onChangeHandler} />
      <button onClick={handler}>딸깍</button>
      <div>{findItem.id}</div>
      <div>{findItem.title}</div>
      <div>{findItem.author}</div>
    </DetailContainer>
  );
}

const DetailContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 300px;
  background-color: red;
`;

export default Detail;
