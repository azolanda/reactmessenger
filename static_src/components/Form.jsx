import React, { useEffect, useState } from 'react';
import { AUTHORS } from '../../utils/constants';
import { TextField, Button } from '@material-ui/core';
import '../index.css';


export const Form = ({ onAddMessage }) => {
    const [text, setText] = useState('');

    const handleChange = (e) => {
        setText(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        onAddMessage({ author: AUTHORS.HUMAN, text });
        setText('');
    }

    return (
        <form onSubmit={handleSubmit} className="form">
            <TextField
                id="outlined-basic"
                label="Введите сообщение"
                variant="outlined"
                value={text}
                onChange={handleChange}
                fullWidth
                margin="15px"
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