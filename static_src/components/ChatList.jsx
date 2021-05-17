import React from 'react';
import { Link } from 'react-router-dom';
import '../index.css';

const chats = [
    {
        name: "Chat1",
        id: "chat1",
    },
    {
        name: "Chat2",
        id: "chat2",
    }
]

export const ChatList = () => {
    return (
        <div className="container chats">
            <ul>
                {chats.map(chat => (
                    <li key={chat.id}>
                        <Link to={`/chats/${chat.id}`}>{chat.name}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}