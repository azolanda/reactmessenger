import { script } from './script';
import React, { useState } from 'react';
import ReactDOM from 'react-dom';

script();

let messages = ['Привет', 'Как дела?'];

const MessageComponent = (props) => <div>{props.text}</div>;

const MessageField = (props) => {
   return props.messages.map(message => <MessageComponent text={message} />);
};

ReactDOM.render(
   <MessageField messages={messages} />,
   document.getElementById('root'),
);


