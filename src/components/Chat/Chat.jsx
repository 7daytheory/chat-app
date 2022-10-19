import React from 'react'
import LinkedCameraOutlinedIcon from '@mui/icons-material/LinkedCameraOutlined';
import AddIcon from '@mui/icons-material/Add';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';


const Chat = () => {
  return (
    <div className="chat">
      <div className="chatInfo">
        <span>Stacey</span>
        <div className="chatIcons">
        <LinkedCameraOutlinedIcon class="icons" style={{color: "white"}}/>
        <AddIcon class="icons" style={{color: "white"}}/>
        <MoreHorizIcon class="icons" style={{color: "white"}}/>
        </div>
      </div>
    </div>
  )
}

export default Chat;
