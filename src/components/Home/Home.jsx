import React from 'react';
import { Chat } from '../Chat/Chat';
import { Sidebar } from '../Sidebar/Sidebar';

function Home() {
    return (
        <div className="home">
           <div className="container">
            <Sidebar />
            <Chat />
           </div>
        </div>
    )
}

export default Home;