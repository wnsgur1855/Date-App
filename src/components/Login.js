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
      <button>로그인</button>
    </>
  );
}

export default Login;
