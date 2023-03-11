import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import { getItem } from '../api/axios';

function Detail() {
  const { id } = useParams();
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
