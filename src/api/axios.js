import axios from 'axios';
import React from 'react';

//get요청
export const getItem = async () => {
  const response = await axios.get('http://localhost:4001/posts');
  console.log('서버와 연결 성공get성공');
  return response;
};
//post요청
export const postItem = async (payload) => {
  const response = await axios.post('http://localhost:4001/posts', payload);
  console.log(payload);
  return response;
};
//delete요청
export const delItem = async (payload) => {
  //여기까지payload전달완료
  console.log(payload);
  const response = await axios.delete(`http://localhost:4001/posts/${payload}`);
  console.log(payload);
  return response;
};

//쿼리 순서 콘솔찍어가며 파악
//refetch
//useEffect
//리덕스 새로고침되면 다 사라지는 거 알아보기
