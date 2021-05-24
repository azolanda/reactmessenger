import React, { useRef, useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { TextField, Button } from '@material-ui/core';
import '../index.css';
import { addChat } from '../store/chats/actions';

const AddChatForm = ({ onAddChat }) => {
    const [text, setText] = useState('');
    const dispatch = useDispatch();
    const input = useRef();

    const handleChange = (e) => {
        setText(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(addChat({ name: text, id: Date.now() }));

        setText('');
    }

    useEffect(() => {
        input.current.focus();
    }, []);

    return (
        <form onSubmit={handleSubmit} className="form">
            <TextField
                id="outlined-basic"
                label="Введите название чата"
                variant="outlined"
                value={text}
                onChange={handleChange}
                inputRef={input}
            />
            <Button
                variant="contained"
                color="primary"
                type="submit">
                Создать чат
            </Button>
        </form >
    );
};

export const ChatList = (props) => {
    const chats = useSelector(state => state.chats.chatList);
    const dispatch = useDispatch();

    return (
        <div className="container chats">
            <ul>
                {chats.map(chat => (
                    <li key={chat.id}>
                        <Link to={`/chats/${chat.id}`}>{chat.name}</Link>
                    </li>
                ))}
            </ul>
            <AddChatForm />
        </div>
    );
}