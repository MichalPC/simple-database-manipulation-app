import './Login.css';
import { Link } from 'react-router-dom'
import React, { useState } from 'react';

function Login() {
  const [curUsername, setCurUsername] = useState('')
  const [curPassword, setCurPassword] = useState('')

  const setUsername= (e) => {
    setCurUsername(e.target.value)
  }

  const setPassword= (e) => {
    setCurPassword(e.target.value)
  }

  return (
    <div className="Login">
      <main className="Login-container">
        <form className="Login-form">
          <input type="text" value={curUsername} onChange={setUsername}></input>
          <input className="Password-input"type="text" value={curPassword} onChange={setPassword}></input>
          <button type='submit'>Login</button>
        </form>
        <Link className='Login-button' to={'/home'} className="nav-link"> Login </Link>
      </main>
    </div>
  );
}

export default Login;
