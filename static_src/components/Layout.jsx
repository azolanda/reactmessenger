import React from 'react';
import { MessageButton, messages } from '../index.jsx';
import { ChatList } from './ChatList.jsx';
import { Header } from './Header.jsx';

import '../index.css';

export const Layout = () => {
    return (
        <div className="container">
            <div class="header">
                <Header />
            </div>
            <div class="layout">
                <ChatList />
                <MessageButton messages={messages} />
            </div>

        </div>
    );
}