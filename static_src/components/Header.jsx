import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import '../index.css';
import { Link } from 'react-router-dom';

export const Header = () => {
    const name = useSelector(state => state.profile.name);
    return (
        <>
            <div>Messenger</div>
            <div>Hello, {name}!</div>
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