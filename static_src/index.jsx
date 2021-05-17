import { script } from './script';
import { AUTHORS } from '../utils/constants';
import { MessageField } from './components/MessageField.jsx';
import { Form } from './components/Form.jsx';
import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Layout } from './components/Layout.jsx';

script();

export const messages = [
   {
      author: AUTHORS.HUMAN,
      text: 'Привет',
   },
   {
      author: AUTHORS.BOT,
      text: 'Как дела?',
   }
];

export const MessageButton = (props) => {
   const [value, setValue] = useState(props.messages);

   const updateMessages = (newMessage) => {
      setValue([...value, newMessage]);
   }

   useEffect(() => {
      if (!value.length) {
         return;
      }

      if (value[value.length - 1].author === 'human') {
         setValue([...value, { author: AUTHORS.BOT, text: "Хорошо, что нормально. Рад за тебя:)", }]);
      }
   }, [value]);

   return (
      <>
         <div  >
            <MessageField mess={value} />
            <Form onAddMessage={updateMessages} />
         </div>
      </>
   );
}

ReactDOM.render(
   <Layout />,
   document.getElementById('root'),
);


