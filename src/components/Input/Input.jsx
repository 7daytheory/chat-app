import React, { useContext, useState } from 'react'
import AttachFileIcon from '@mui/icons-material/AttachFile';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import { ChatContext } from '../context/ChatContext';
import { AuthContext } from '../context/AuthContext';
import { arrayUnion, doc, serverTimestamp, Timestamp, updateDoc } from 'firebase/firestore';
import { v4 as uuid } from 'uuid';
import { db, storage } from '../../firebase';
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage';


const Input = () => {
  

  const [text, setText ] = useState("");
  const [img, setImg] = useState(null);

  const {currentUser} = useContext(AuthContext);
  const {data} = useContext(ChatContext);

  const handleSend = async () => {
      if(img) {

        const storageRef = ref(storage, uuid);
        const uploadTask = uploadBytesResumable(storageRef, img);

        uploadTask.on('state_changed', 
          (snapshot) => {
            //setError(false);
            //setSuccess(true);
          }, 
          (error) => {
            //setError(true);
            //setSuccess(false);
          }, 
          () => {
            getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
              await updateDoc(doc(db, "chats", data.chatId), {
                messages: arrayUnion({
                  id: uuid(),
                  text,
                  senderId: currentUser.uid,
                  date: Timestamp.now(), //Can't use serverTimestamp in arrayUnion
                  img: downloadURL
                }) 
              })
              
            })
            }); 

              } else {
            await updateDoc(doc(db, "chats", data.chatId), {
                messages: arrayUnion({
                  id: uuid(),
                  text,
                  senderId: currentUser.uid,
                  date: Timestamp.now(), //Can't use serverTimestamp in arrayUnion
                }) 
              })
          }

          await updateDoc(doc(db, "userChats", currentUser.uid), {
            [data.chatId + ".lastMessage"]: {
              text
            },
            [data.chatId+".date"]: serverTimestamp(),
          })

          await updateDoc(doc(db, "userChats", data.user.uid), {
            [data.chatId + ".lastMessage"]: {
              text
            },
            [data.chatId+".date"]: serverTimestamp(),
          })

          setText("");
          setImg(null);
        }

  return (
    <div className="input">
      <input type="text" placeholder="Say Something..." onChange={e => setText(e.target.value)} value={text}/>
      <div className="send">
        <AttachFileIcon className="input-icon" />
        <input type="file" style={{display: 'none'}} id="file" onChange={e => setImg(e.target.files[0])}/>
        <label htmlFor="file">
          <AddPhotoAlternateIcon className="input-icon" />
        </label>
        <button onClick={handleSend}>Send</button>
      </div>
    </div>
  )
}

export default Input;
