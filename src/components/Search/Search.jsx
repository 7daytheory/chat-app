import React from 'react'

const Search = () => {
  return (
    <div className="search">
      <div className="searchForm">
        <input type="text" placeholder="Search for user"/>
      </div>

      <div className="userChat">
        <img src="https://images.pexels.com/photos/13866617/pexels-photo-13866617.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="avatar"/>
        <div className="userChatInfo">
          <span>Stacey</span>
          <p>Message from Stacey</p>
        </div>
      </div>
    </div>
  )
}

export default Search;
