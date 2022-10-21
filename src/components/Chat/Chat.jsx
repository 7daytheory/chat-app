import React, { useContext } from 'react'
import LinkedCameraOutlinedIcon from '@mui/icons-material/LinkedCameraOutlined';
import AddIcon from '@mui/icons-material/Add';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import Messages from '../Messages/Messages';
import Input from '../Input/Input';
import { ChatContext } from '../context/ChatContext';


const Chat = () => {

  const {data} = useContext(ChatContext);

  return (
    <div className="chat">
      <div className="chatInfo">
        <span>{data.user.displayName}</span>
        <div className="chatIcons">
        <LinkedCameraOutlinedIcon className="icons"/>
        <AddIcon className="icons"/>
        <MoreHorizIcon className="icons"/>
        </div>
      </div>
      <Messages />
      <Input />
    </div>
  )
}

export default Chat;
