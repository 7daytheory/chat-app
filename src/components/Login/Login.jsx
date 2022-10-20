import React, { useState } from 'react';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../../firebase';
import { Link } from 'react-router-dom';

function Login() {
    const [error, setError] = useState(false); 
    const handleSubmit = async (e) => {   
        e.preventDefault();
        //Instead of useState you can get the values like this
        const email = e.target[0].value;
        const password = e.target[1].value;
        
        try {
        await signInWithEmailAndPassword(auth, email, password)
        } catch(err) {
        setError(true);
        console.log(err);
        }
    }

    return (
    <div className="formContainer">
        <div className="formWrapper">
            <h1 className="logo">Live-Chat App</h1>
            <span className="title">Login</span>
            <form onSubmit={handleSubmit}>
            <input type="email" name="email" placeholder="Email"/>
            <input type="password" name="password" placeholder="password"/>
            <button>Sign In</button>
            </form>
            {error && <span style={{fontSize: '12px', textAlign: 'center', color: 'red'}}>Something went wrong - Please try again.</span>}
            <p>Do not have an account? <Link to="/register">Register</Link></p>
        </div>
    </div>
    )
}

export default Login;