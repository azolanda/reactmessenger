import { AUTHORS } from '../utils/constants';
import { MessageField } from './components/MessageField.jsx';
import { Form } from './components/Form.jsx';
import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import './index.css';

export const messages = {
    chat1: [
        {
            author: AUTHORS.HUMAN,
            text: 'Привет',
        },
        {
            author: AUTHORS.BOT,
            text: 'Как дела?',
        }
    ],
    chat2: [
        {
            author: AUTHORS.BOT,
            text: 'Hi, friend!',
        },
        {
            author: AUTHORS.BOT,
            text: 'Как дела?',
        }
    ]
}

export const MessageButton = (props) => {
    const [value, setValue] = useState(props.messages);

    const params = useParams();
    const { chatId } = params;
    const history = useHistory();

    const updateMessages = (newMessage) => {
        setValue({
            ...value,
            [chatId]: [...value[chatId], newMessage],
        });
    }

    useEffect(() => {
        if (!value[chatId] || !value[chatId].length) {
            return;
        }

        const lastMessage = value[chatId][value[chatId].length - 1];

        if (lastMessage.author === 'human') {
            setValue({ ...value, [chatId]: [...value[chatId], { author: AUTHORS.BOT, text: "Хорошо, что нормально. Рад за тебя:)", }] });
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
                <Form onAddMessage={updateMessages} />
            </div>
        </>
    );
}