import React, { useState } from 'react';
import { useMutation, useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { getItem, putItem } from '../api/axios';
import { QueryClient } from 'react-query';

import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/free-mode';

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

  const { isLoading, isError, data } = useQuery(['posts', parseInt(id)], () => getItem(id));
  if (isLoading) {
    return <div>로딩중</div>;
  }
  if (isError) {
    return <div>에러남</div>;
  }

  const findItem = data.data.find((item) => item.id === parseInt(id));

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

  const Data = [
    { src: '/imgs/love.png' },
    { src: '/imgs/gong.png' },
    { src: '/imgs/whang.png' },
    { src: '/imgs/hh.png' },
  ];

  return (
    <>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        autoplay={{
          delay: 3000,
        }}
        loop={true}
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
      >
        {Data.map((item, idx) => {
          return (
            <SwiperSlide key={idx}>
              <img src={item.src} />
            </SwiperSlide>
          );
        })}
      </Swiper>
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
