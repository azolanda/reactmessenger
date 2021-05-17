import React from 'react';
import '../index.css';
import { AUTHORS } from '../../utils/constants';

import { MessageComponent } from './MessageComponent.jsx';

export const MessageField = (props) => {
    return (
        <div className="messageField">
            {props.mess.map((message, i) => <div key={i} className={`messages ${message.author === AUTHORS.BOT ? "bot-message" : "human-message"}`}><MessageComponent author={message.author} text={message.text} /></div>)}
        </div>
    );
}

