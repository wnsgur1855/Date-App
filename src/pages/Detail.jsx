import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import { getItem } from '../api/axios';

function Detail() {
  const { id } = useParams();
  //useQuery 훅은 첫 번째 인자로 쿼리 식별자를 받는다. 이 쿼리 식별자는 캐시를 구분하기 위한 역할을 한다.(쿼리 키)
  //id를 쓴 것은 id값이 변경될 때마다 getItem함수를 호출하여 해당 `id`에 해당하는 데이터를 가져오게 된다.

  const { isLoading, isError, data } = useQuery(['posts', id], () => getItem(id));
  if (isLoading) {
    return <div>로딩중</div>;
  }
  if (isError) {
    return <div>에러남</div>;
  }

  console.log({ id });
  console.log(data);
  const findItem = data.data.find((item) => {
    console.log(data);
    return item.id === parseInt(id);
  });

  return (
    <>
      <div>{findItem.id}</div>
      <div>{findItem.title}</div>
      <div>{findItem.author}</div>
    </>
  );
}

export default Detail;
