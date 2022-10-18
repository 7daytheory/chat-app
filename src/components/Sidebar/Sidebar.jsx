import React from 'react';
import Navbar from '../Navbar/Navbar';
import Search from '../Search/Search';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <Navbar />
      <Search />
    </div>
  )
}

export default Sidebar;
