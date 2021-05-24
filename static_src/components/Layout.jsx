import React from 'react';
import { MessageButton, messages } from '../App.jsx';
import { ChatList } from './ChatList.jsx';

import '../index.css';

export const Layout = () => {
    return (
        <div className="container layout">
            <ChatList />
            <MessageButton />
        </div>
    );
}