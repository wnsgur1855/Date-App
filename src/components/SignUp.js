import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Signup() {
  const [join, setJoin] = useState({
    nickname: '',
    password: '',
  });
  const onChangeLoingHandler = (e) => {
    const { name, value } = e.target;
    setJoin({
      ...join,
      [name]: value,
    });
  };
  const navigate = useNavigate();
  const signupHandler = () => {
    if (localStorage.getItem('join.nickname')) {
      alert('이미 가입된 vip닉네임입니다');
      return;
    }
    localStorage.setItem('join.nickname', join.nickname);
    localStorage.setItem('join.password', join.password);
    console.log(join.nickname);
    alert(`${join.nickname}VIP고객님 안녕하세요`);
    navigate('main');
  };
  return (
    <>
      <>이 사이트는 VIP회원들만 이용할 수 있습니다 회원가입시 로그인이 바로 유지됩니다.</>
      <div>
        닉네임
        <input name="nickname" onChange={onChangeLoingHandler} placeholder="닉네임" />
      </div>
      <div>
        password
        <input name="password" onChange={onChangeLoingHandler} placeholder="비밀번호" />
      </div>
      <button onClick={signupHandler}>회원가입</button>
    </>
  );
}
export default Signup;

//구조분해할당 이용해봅기
