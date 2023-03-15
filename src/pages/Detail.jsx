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
  const [modal, setModal] = useState(false);

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
      console.log(putItem);
    },
  });
  //useQuery 훅은 첫 번째 인자로 쿼리 식별자를 받는다. 이 쿼리 식별자는 캐시를 구분하기 위한 역할을 한다.(쿼리 키)
  //id를 쓴 것은 id값이 변경될 때마다 getItem함수를 호출하여 해당 `id`에 해당하는 데이터를 가져오게 된다.

  const { isLoading, isError, data } = useQuery(['posts', parseInt(id)], () => getItem(id));
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

  const handler = (e) => {
    try {
      putMutate.mutateAsync({ id, put });
      e.target.remove();
      window.location.reload();

      console.log(id);
      console.log(put);
    } catch (error) {
      console.log('수정이 안 되네?');
    }
  };

  const modalHandler = (e) => {
    setModal(true);
    e.target.remove();
  };

  return (
    <>
      <DetailContainer>
        <DivText>
          아이디
          <Text>{findItem.id}</Text>
          댓글수정
          <Text>{findItem.title}</Text>
          댓글작가
          <Text>{findItem.author}</Text>
          <button onClick={modalHandler}>댓글 수정</button>
          {modal ? (
            <Top>
              <Input name="title" onChange={onChangeHandler} placeholder="title" />
              <Input name="author" onChange={onChangeHandler} placeholder="author" />
              <Button onClick={handler}>딸깍</Button>
            </Top>
          ) : null}
        </DivText>
      </DetailContainer>
    </>
  );
}

const Top = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 10px;
  width: 500px;
  height: 500px;
  background-color: #1a5097;
`;

const Input = styled.input`
  width: 200px;
  height: 50px;
  outline: none;
`;

const Button = styled.button`
  width: 200px;
  height: 50px;
`;

const DetailContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const DivText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  column-gap: 10px;
`;

const Text = styled.div`
  width: 500px;
  height: 100px;
  border-style: dotted;
`;

export default Detail;
