import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import { authLogin } from '../config/actions';

import '../styles/login.scss';

function Login({ changePage }) {
  const usernameRef = useRef('');
  const passwordRef = useRef('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const identifier = usernameRef.current.value;
    const password = passwordRef.current.value;
    authLogin(identifier, password).then(() => {
      // console.log(data);
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

Login.propTypes = {
  changePage: PropTypes.func.isRequired,
};

export default Login;
