import React from 'react';

function Login() {
    return (
    <div className="formContainer">
        <div className="formWrapper">
            <h1 className="logo">Live-Chat App</h1>
            <span className="title">Login</span>
            <form>
            <input type="email" name="email" placeholder="Email"/>
            <input type="password" name="password" placeholder="password"/>
            <button>Sign In</button>
            </form>
            <p>Do not have an account? Register</p>
        </div>
    </div>
    )
}

export default Login;