import { useState } from 'react';

function Login() {
  const [login, setLoing] = useState({
    nickname: '',
    password: '',
  });
  console.log(login.nickname);
  const onChangeLoingHandler = (e) => {
    const { name, value } = e.target;
    setLoing({
      ...login,
      [name]: value,
    });
  };

  const longinHandler = () => {
    localStorage.getItem('login.nickname');
    localStorage.getItem('login.password');
    alert('환영합니다`${login.nickname}`님');
    console.log(login.nickname);
  };
  return (
    <>
      <>로그인</>
      <div>
        닉네임
        <input name="nickname" onChange={onChangeLoingHandler} placeholder="닉네임" />
      </div>
      <div>
        password
        <input name="password" onChange={onChangeLoingHandler} placeholder="비밀번호" />
      </div>
      <button onClick={longinHandler}>로그인</button>
    </>
  );
}

export default Login;
