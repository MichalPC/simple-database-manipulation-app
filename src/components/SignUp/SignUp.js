import './SignUp.css';
import '../../App.css'
import { useHistory } from 'react-router-dom'
import React, { useState, useRef } from 'react';

function SignUp() {
    const [curUsername, setCurUsername] = useState('')
    const [curPassword, setCurPassword] = useState('')
    const errorLabel = useRef()
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
            history.push('/login')
            } else {
            console.log('Try again')
            }
        }
        })
    }

    return (
        <div className="SignUp">
            <main className="Form-container">
                <form className="Form">
                    <h1>Sign Up</h1>
                    <label className="Form-label">Username:</label>
                    <input type="text" className="User-input" value={curUsername} onChange={(e) => {setCurUsername(e.target.value)}}></input>
                    <label className="Form-label">Password:</label>
                    <input type="text" className="Password-input"  value={curPassword} onChange={(e) => {setCurPassword(e.target.value)}}></input>
                    <label className="Error-label"></label>
                    <button ref={errorLabel} type='button' onClick={signUp}>Sign Up</button>
                </form>
            </main>
        </div>
    );
}

export default SignUp;