import React from 'react'
import { signOut } from 'firebase/auth'
import { auth } from '../../firebase'

const Navbar = () => {
  return (
    <div className="navbar">
      <span className="logo">Live-Chat</span>
      <div className="user">
        <img src="https://images.pexels.com/photos/10612297/pexels-photo-10612297.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Avatar"/>
        <span>John Doe</span>
        <button onClick={() => signOut(auth)}>Logout</button>
      </div>
    </div>
  )
}

export default Navbar