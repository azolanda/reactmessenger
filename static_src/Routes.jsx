import React from 'react';
import { BrowserRouter, Switch, Route, Link, Redirect } from 'react-router-dom';
import { Layout } from './components/Layout.jsx';
import { Header } from './components/Header.jsx';
import { ChatList } from './components/ChatList.jsx';

const Profile = () => {
    return (
        <div className="container">This is the profile page</div>
    );
}

export const Routes = () => {
    return (
        <BrowserRouter>
            <div className="container header">
                <Header />
            </div>

            <Switch>
                <Route path="/" exact>
                    <ChatList />
                </Route>
                <Route path="/chats/:chatId">
                    <Layout />
                </Route>
                <Route path="/profile">
                    <Profile />
                </Route>
                <Redirect to="/" />
            </Switch>
        </BrowserRouter>
    );
}