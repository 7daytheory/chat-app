import React, { useContext, useState } from 'react'
import { collection, query, where, getDoc, setDoc, doc, updateDoc, serverTimestamp, getDocs } from "firebase/firestore";
import { db } from '../../firebase';
import { AuthContext } from '../context/AuthContext';

const Search = () => {

  const [username, setUsername] = useState("");
  const [user, setUser] = useState(null);
  const [err, setErr] = useState(false);

  //get current user
  const {currentUser} = useContext(AuthContext);
  
  const handleSearch = async () => {
    const q = query(
      collection(db, "users"), 
    where("displayName", "==", username
    ));

    try{
    const querySnapshot = await getDocs(q);
  querySnapshot.forEach((doc) => {
   setUser(doc.data())
  });
  } catch(err) {
    setErr(true);
  }
}

  const handleKey = (e) => {
    e.code === "Enter" && handleSearch(); //If user clicks Enter it will trigger search
  }

  const handleSetup = async () => {
    //check if a chat exists, if not create new chat
    const combineId = currentUser.uid > user.uid 
    ? currentUser.uid + user.id 
    : user.uid + currentUser.uid;

    try {
    const res = await getDoc(doc(db, "chats", combineId))

    //exists() is a firebase method
    if(!res.exists()) {
    //create a chat in chats collections
    await setDoc(doc(db, "chats", combineId), { messages: []}); //create doc with empty array for messages


    // Update user chats
    await updateDoc(doc(db, "userChats", currentUser.uid),{
      [combineId+".userInfo"]: {
        uid: user.uid,
        displayName: user.displayName,
        photoURL: user.photoURL
      },
      [combineId+".date"] : serverTimestamp()
    });

         // Update user chats
         await updateDoc(doc(db, "userChats", user.uid),{
          [combineId+".userInfo"]: {
            uid: currentUser.uid,
            displayName: currentUser.displayName,
            photoURL: currentUser.photoURL
          },
          [combineId + ".date"] : serverTimestamp()
        });
    }
    } catch(err) {
      console.log(err)
    }

    setUser(null);
    setUsername("");
  }

  return (
    <div className="search">
      <div className="searchForm">
        <input type="text" 
        placeholder="Search for user" 
        onKeyDown={handleKey} 
        onChange={e=>setUsername(e.target.value)}
        value={username}
        />
      </div>
      {err && <span style={{color: '#fff', fontSize:'12px'}}>User not found</span>}
      {user && <div className="userChat" onClick={handleSetup}>
        <img src={user.photoURL} alt={user.displayName}/>
        <div className="userChatInfo">
          <span>{user.displayName}</span>
        </div>
      </div>}
    </div>
  )
}

export default Search;
