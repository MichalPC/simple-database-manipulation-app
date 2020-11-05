import './Login.css';
import { Link } from 'react-router-dom'
import React, { useState } from 'react';

function Login() {
  const [curUsername, setCurUsername] = useState('')
  
  return (
    <div className="Login">
      <main className="Login-container">
        <form className="Login-form">
          <input type="text"></input>
          <input className="Password-input"type="text"></input>
          <button type='submit'>Login</button>
        </form>
        <Link className='Login-button' to={'/home'} className="nav-link"> Login </Link>
      </main>
    </div>
  );
}

export default Login;
