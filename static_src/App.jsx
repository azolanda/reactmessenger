import { AUTHORS } from '../utils/constants';
import { MessageField } from './components/MessageField.jsx';
import { Form } from './components/Form.jsx';
import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { addMessage } from './store/messages/actions';
import './index.css';

export const MessageButton = (props) => {
    const value = useSelector(state => state.messages);

    const params = useParams();
    const { chatId } = params;
    const history = useHistory();
    const dispatch = useDispatch();

    useEffect(() => {
        if (!value[chatId] || !value[chatId].length) {
            return;
        }

        const lastMessage = value[chatId][value[chatId].length - 1];

        if (lastMessage.author === 'human') {
            dispatch(addMessage({ author: AUTHORS.BOT, text: "Привет от бота:)", }, chatId));
        }
    }, [value[chatId]]);

    if (!value[chatId] || !value[chatId].length) {
        console.log(history);
        history.push("/");
        // history.replaceState({ ...history }, "Error", "/");
        history.go();
        return;
    }

    return (
        <>
            <div>
                <MessageField mess={value[chatId]} />
                <Form chatId={chatId} />
            </div>
        </>
    );
}