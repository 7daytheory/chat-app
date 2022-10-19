import React from 'react';
import ContactMailOutlinedIcon from '@mui/icons-material/ContactMailOutlined';
import {createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from '../../firebase';

function Register() {
    const handleSubmit = (e) => {   
        e.preventDefault();
        
        const username = e.target[0].value;
        const email = e.target[1].value;
        const password = e.target[2].value;

        const file = e.target[3].files[0];

        console.log(username, email, password);

        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            
            console.log(user);
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            
            console.log(errorCode + " : " + errorMessage);
        });
    }

    return (
    <div className="formContainer">
        <div className="formWrapper">
            <h1 className="logo">Live-Chat App</h1>
            <span className="title">Register</span>
            <form onSubmit={handleSubmit}>
            <input type="text" name="username" placeholder="username"/>
            <input type="email" name="email" placeholder="Email"/>
            <input type="password" name="password" placeholder="password"/>
            <input type="file" id="file" style={{display: "none"}}/>
            <label htmlFor="file">
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