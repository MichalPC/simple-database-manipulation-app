import './SignUp.css';
import '../../App.css'
import { Link, useHistory } from 'react-router-dom'
import React, { useState } from 'react';

function SignUp() {
    const [curUsername, setCurUsername] = useState('')
    const [curPassword, setCurPassword] = useState('')
    const history = useHistory();

    const signUp = () => {
        fetch('http://127.0.0.1:8000/signup', {
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
            if(result.signup){
            history.push('/')
            } else {
            console.log('Try again')
            }
        }
        })
    }

    return (
        <div className="SignUp">
            <main className="SignUp-container">
                <form className="SignUp-form">
                    <input type="text" className="User-input" value={curUsername} onChange={(e) => {setCurUsername(e.target.value)}}></input>
                    <input type="text" className="Password-input"  value={curPassword} onChange={(e) => {setCurPassword(e.target.value)}}></input>
                    <button type='button' onClick={signUp}>Sign Up</button>
                </form>
            </main>
        </div>
    );
}

export default SignUp;