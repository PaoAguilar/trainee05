import React, { useRef } from 'react';
import { authLogin } from '../config/actions';
import '../styles/login.scss';

function Login({ changePage }) {
  const usernameRef = useRef('');
  const passwordRef = useRef('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(e);
    const identifier = usernameRef.current.value;
    const password = passwordRef.current.value;
    authLogin(identifier, password).then((data) => {
      console.log(data);
      changePage('Home');
    });
  };

  return (
    <div className="login">
      <form action="" className="login__form" onSubmit={handleSubmit}>
        <input ref={usernameRef} type="text" placeholder="Username" />
        <input ref={passwordRef} type="password" placeholder="Password" />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;
