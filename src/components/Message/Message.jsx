import React from 'react'

const Message = () => {
  return (
    <div className="message owner">
      <div className="messageInfo">
      <img src="https://images.pexels.com/photos/13866617/pexels-photo-13866617.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="avatar" />
      <span>just now</span>
      </div>
      <div className="messageContent">
      <p>Hello</p>
      <img src="https://images.pexels.com/photos/13866617/pexels-photo-13866617.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="Send Error" />
      </div>
    </div>
  )
}

export default Message;
