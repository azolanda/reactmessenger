import React from 'react';
import '../index.css';
import { Link } from 'react-router-dom';

export const Header = () => {
    return (
        <>
            <div>Messenger</div>
            <ul className="list_header">
                <li>
                    <Link to="/profile">Profile</Link>
                </li>
                <li>
                    <Link to="/">Home</Link>
                </li>
            </ul>
        </>
    );
}