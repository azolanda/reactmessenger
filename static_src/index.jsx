import { script } from './script';
import { AUTHORS } from '../utils/constants';
import { MessageField } from './components/MessageField.jsx';
import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';

script();

let messages = [
   {
      author: AUTHORS.HUMAN,
      text: 'Привет',
   },
   {
      author: AUTHORS.BOT,
      text: 'Как дела?',
   }
];

const MessageButton = (props) => {
   const [value, setValue] = useState(props.messages);

   const updateMessages = () => {
      setValue([...value, { author: AUTHORS.HUMAN, text: "Нормально", }]);
   }

   useEffect(() => {
      if (value[value.length - 1].author === 'human') {
         setValue([...value, { author: AUTHORS.BOT, text: "Хорошо, что нормально. Рад за тебя:)", }]);
      }
   }, [value]);

   return (
      <div>
         <MessageField mess={value} />
         <button onClick={updateMessages}>Нормально</button>
      </div>
   );
}

ReactDOM.render(
   <MessageButton messages={messages} />,
   document.getElementById('root'),
);


