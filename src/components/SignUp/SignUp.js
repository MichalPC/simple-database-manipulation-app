import './SignUp.css';
import { Link, useHistory } from 'react-router-dom'
import React, { useState } from 'react';

function SignUp() {
    const [curUsername, setCurUsername] = useState('')
    const [curPassword, setCurPassword] = useState('')
    const history = useHistory();

    return (
        <div className="SignUp">
            <main className="SignUp-container">
                <form className="SignUp-form">
                    <input type="text" className="User-input" value={curUsername} onChange={setUsername}></input>
                    <input type="text" className="Password-input"  value={curPassword} onChange={setPassword}></input>
                    <button type='button'>Sign Up</button>
                </form>
            </main>
        </div>
    );
}

export default SignUp;