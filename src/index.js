import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles.scss';
import App from './App';
import { AuthContextProvider } from './components/context/AuthContext';
import { ChatContextProvider } from './components/context/ChatContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<AuthContextProvider>
    <ChatContextProvider>
        <App />
    </ChatContextProvider>
</AuthContextProvider>
);
