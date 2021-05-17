import React from 'react';
import { MessageButton, messages } from '../index.jsx';
import { ChatList } from './ChatList.jsx';
import { Header } from './Header.jsx';

import '../index.css';

export const Layout = () => {
    return (
        <div className="container">
            <div className="header">
                <Header />
            </div>
            <div className="layout">
                <ChatList />
                <MessageButton messages={messages} />
            </div>

        </div>
    );
}