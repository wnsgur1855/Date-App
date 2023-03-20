import { Cookies } from 'react-cookie';

const cookies = new Cookies();

export const setCookie = (name, value, option) => {
  return cookies.set(name, value, { ...option });
};
//겟쿠키는 심플하다. 쿠키를 가져온다.
export const getCookie = (name) => {
  return cookies.get(name);
};
//리무브쿠키는 셋 쿠키에 저장한 모든 내용을 지워야 하ㅓㄴ다. key와 option을 꼭 받아야한다.
export const removeCookie = (name, option) => {
  return cookies.remove(name, { ...option });
};
