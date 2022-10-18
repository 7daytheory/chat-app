import React from 'react';

function Register() {
    return (
    <div className="formContainer">
        <div className="formWrapper">
            <h1 className="logo">Live-Chat App</h1>
            <span className="title">Register</span>
            <form>
            <input type="text" name="username" placeholder="username"/>
            <input type="email" name="email" placeholder="Email"/>
            <input type="password" name="password" placeholder="password"/>
            <input type="file" />
            <button>Sign up</button>
            </form>
            <p>Already have an account? Login</p>
        </div>
    </div>
    )
}

export default Register;