import React from 'react';
import ContactMailOutlinedIcon from '@mui/icons-material/ContactMailOutlined';

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
            <input type="file" id="file" style={{display: "none"}}/>
            <label for="file">
                <ContactMailOutlinedIcon style={{cursor: "pointer"}}/>
                <span>Add an avatar</span>
            </label>
            <button>Sign up</button>
            </form>
            <p>Already have an account? Login</p>
        </div>
    </div>
    )
}

export default Register;