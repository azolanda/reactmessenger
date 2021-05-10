import React from 'react';

import { MessageComponent } from './MessageComponent.jsx';

export const MessageField = (props) => {
    return props.mess.map(message => <MessageComponent author={message.author} text={message.text} />);
}

