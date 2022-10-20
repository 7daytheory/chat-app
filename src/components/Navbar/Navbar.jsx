import React, { useContext } from 'react'
import { signOut } from 'firebase/auth'
import { auth } from '../../firebase'
import { AuthContext } from '../context/AuthContext';

const Navbar = () => {

  const currentUser = useContext(AuthContext);

  return (
    <div className="navbar">
      <span className="logo">Live-Chat</span>
      <div className="user">
        <img src={currentUser.photo} alt="Avatar"/>
        <span>{currentUser.username}</span>
        <button onClick={() => signOut(auth)}>Logout</button>
      </div>
    </div>
  )
}

export default Navbar