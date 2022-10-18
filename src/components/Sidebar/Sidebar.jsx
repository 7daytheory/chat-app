import React from 'react';
import Chats from '../Chats/Chats';
import Navbar from '../Navbar/Navbar';
import Search from '../Search/Search';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <Navbar />
      <Search />
      <Chats />
    </div>
  )
}

export default Sidebar;
