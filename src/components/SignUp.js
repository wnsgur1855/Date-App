import { useState } from 'react';

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

  const signupHandler = () => {
    localStorage.setItem('join.nickname', join.nickname);
    localStorage.setItem('join.password', join.password);
    console.log(join.nickname);
    alert('회원가입완료');
  };
  return localStorage.getItem(join.nickname) ? (
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
  ) : (
    <>안영</>
  );
}

export default Signup;
