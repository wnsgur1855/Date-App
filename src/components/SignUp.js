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
  return (
    <>
      <>이 사이트는 VIP회원들만 이용할 수 있습니다</>
      <div>
        닉네임
        <input name="nickname" onChange={onChangeLoingHandler} placeholder="닉네임" />
      </div>
      <div>
        password
        <input name="password" onChange={onChangeLoingHandler} placeholder="비밀번호" />
      </div>
      <button>회원가입</button>
    </>
  );
}

export default Signup;
