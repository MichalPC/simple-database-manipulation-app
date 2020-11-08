import './Login.css';
import '../../App.css'
import { Link, useHistory } from 'react-router-dom'
import React, { useState } from 'react';

function Login() {
  const [curUsername, setCurUsername] = useState('')
  const [curPassword, setCurPassword] = useState('')
  const history = useHistory();

  const setUsername= (e) => {
    setCurUsername(e.target.value)
  }

  const setPassword= (e) => {
    setCurPassword(e.target.value)
  }

  const checkLogin = () => {
    fetch('http://127.0.0.1:8000/login', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username: curUsername,
        password: curPassword,
      })
    })
    .then(result => result.json())
    .then(result => {
      if (result.err){
        console.log(result.err)
      }else {
        if(result.login){
          console.log('Successful Login!')
        } else {
          console.log('Try again')
        }
      }
    })
  }

  return (
    <div className="Login">
      <main className="Login-container">
        <form className="Login-form">
          <input type="text" className="User-input" value={curUsername} onChange={setUsername}></input>
          <input type="password" className="Password-input"  value={curPassword} onChange={setPassword}></input>
          <button type='button' onClick={checkLogin} >Login</button>
        </form>
      </main>
    </div>
  );
}

export default Login;
