import { doc, onSnapshot } from 'firebase/firestore';
import React, { useContext, useEffect, useState } from 'react'
import { db } from '../../firebase';
import { ChatContext } from '../context/ChatContext';
import Message from '../Message/Message';

const Messages = () => {

  const [messages, setMessages] = useState([]);
  const {data} = useContext(ChatContext);

  useEffect(() => {
    const unSub = onSnapshot(doc(db, "chats", data.chatId), (doc) => {
      doc.exists() && setMessages(doc.data().messages)
    })

    return() => {
      unSub()
    }
  }, [data.chatId])

  return (
    <div className="messages">
      {messages.map((m) => { 
        return (
        <Message message={m} key={m.id} />
      )})}
    </div>
  )
}

export default Messages