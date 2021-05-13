import React from 'react';

import { MessageComponent } from './MessageComponent.jsx';

export const MessageField = (props) => {
    return (
        <div className="messageField">
            {props.mess.map((message, i) => <div key={i} ><MessageComponent author={message.author} text={message.text} /></div>)}
        </div>
    );
}

