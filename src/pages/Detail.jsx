import React, { useState } from 'react';
import { useMutation, useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { getItem, putItem } from '../api/axios';
import { QueryClient } from 'react-query';
//이미지 미리보기 라이브러리
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/free-mode';
//오디오 라이브러리
import { useRecoilValue, useRecoilState } from 'recoil';
import H5AudioPlayer from 'react-h5-audio-player';
import { useRef, useEffect } from 'react';
import { audioState, playState, muteState, volumeState } from '../elements/audio';
function Detail() {
  //id로 찾는 상세페이지
  const { id } = useParams();
  //put state관리
  const [put, setPut] = useState({
    title: '',
    author: '',
  });
  //모달관리 state
  const [modal, setModal] = useState(false);

  const audio = useRecoilValue(audioState);
  const myRef = (useRef < H5AudioPlayer) | (null > null);
  const [play, setPlay] = useRecoilState(playState);
  const volume = useRecoilValue(volumeState);
  const mute = useRecoilValue(muteState);

  const start = () => {
    if (myRef.current?.audio.current) myRef.current.audio.current.volume = volume / 100;
    setPlay(true);
  };

  const stop = () => {
    setPlay(false);
  };

  const onMusicEnd = () => {
    setPlay(false);
  };

  useEffect(() => {
    if (!myRef.current?.audio.current) return;
    if (play) {
      myRef.current.audio.current.play();
      myRef.current.audio.current.volume = mute ? 0 : volume / 100;
    } else myRef.current.audio.current.pause();
  }, [play, audio, volume, mute]);

  //전체 input핸들러
  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setPut({
      ...put,
      [name]: value,
    });
  };
  //쿼리 get요청을위한 생성
  const queryClient = new QueryClient();
  //put 요청
  const putMutate = useMutation(putItem, {
    onSuccess: (data) => {
      queryClient.invalidateQueries('posts');
      console.log(putItem);
    },
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
  //get요청 3개변수
  const { isLoading, isError, data } = useQuery(['posts', parseInt(id)], () => getItem(id));
  if (isLoading) {
    return <div>로딩중</div>;
  }
  if (isError) {
    return <div>에러남</div>;
  }
  //상세페이지 id찾기
  const findItem = data.data.find((item) => item.id === parseInt(id));

  //모달 헨들러
  const modalHandler = (e) => {
    setModal(true);
    e.target.remove();
  };
  //이미지 전부 배열로 관리
  const Data = [
    { src: '/love.png' },
    { src: '/gong.png' },
    { src: '/whang.png' },
    { src: '/hh.png' },
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
      <audio
        className="music-status"
        src={audio}
        ref={myRef}
        onEnded={onMusicEnd}
        layout="horizontal-reverse"
        hasDefaultKeyBindings={false}
      />

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
