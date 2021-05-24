import React, { useEffect, useState, useRef } from 'react';
import { useDispatch } from 'react-redux';

import { AUTHORS } from '../../utils/constants';
import { TextField, Button } from '@material-ui/core';
import { addMessage } from '../store/messages/actions';
import '../index.css';

export const Form = ({ chatId }) => {
    const [text, setText] = useState('');
    const input = useRef();
    const dispatch = useDispatch();

    const handleChange = (e) => {
        setText(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        dispatch(addMessage({ author: AUTHORS.HUMAN, text }, chatId));
        setText('');
    }

    useEffect(() => {
        input.current.focus();
    }, []);

    return (
        <form onSubmit={handleSubmit} className="form">
            <TextField
                id="outlined-basic"
                label="Введите сообщение"
                variant="outlined"
                value={text}
                onChange={handleChange}
                fullWidth
                inputRef={input}
            />
            <Button
                variant="contained"
                color="primary"
                type="submit">
                Отправить сообщение
            </Button>
        </form >
    );
}