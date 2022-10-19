import React, {useState} from 'react';
import ContactMailOutlinedIcon from '@mui/icons-material/ContactMailOutlined';
import {createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth, storage, db} from '../../firebase';
import {ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { doc, setDoc } from "firebase/firestore"; 

function Register() {
    const [ error, setError ] = useState(false);
    const handleSubmit = async (e) => {   
        e.preventDefault();
        
        //Instead of useState you can get the values like this
        const username = e.target[0].value;
        const email = e.target[1].value;
        const password = e.target[2].value;
        const file = e.target[3].files[0];

        try{
        const res = await createUserWithEmailAndPassword(auth, email, password)

        const storageRef = ref(storage, username + "avatar");

        const uploadTask = uploadBytesResumable(storageRef, file);

uploadTask.on('state_changed', 
  (snapshot) => {
    setError(false);
  
  }, 
  (error) => {
    setError(true);
  }, 
  () => {
    getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
      await updateProfile(res.user, {
        username,
        photoURL: downloadURL
      })
      //Uploads user info to firebase db - different users
      await setDoc(doc(db, "users", res.user.uid), {
        uid: res.user.uid,
        username,
        email,
        photoURL: downloadURL
      });

      //Uploads chat info to firebase db - different chats
      await setDoc(doc('db', "userChats", res.user.uid), {
        //Upload user chats(empty for now)
      })
    })
    }
    ); 
} catch(err) {
    setError(true);
    }
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
            {error && <span style={{fontSize: '12px', textAlign: 'center', color: 'red'}}>Something went wrong - Please try again.</span>}
            </form>
            <p>Already have an account? Login</p>
        </div>
    </div>
    )
}

export default Register;