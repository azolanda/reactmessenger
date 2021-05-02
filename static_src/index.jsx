import { script } from './script';
import React, { useState } from 'react';
import ReactDOM from 'react-dom';

script();

let messages = ['Привет', 'Как дела?'];

const MessageComponent = (props) => {
   return (
      <div>
         {props.text}
      </div>
   );
}

const MessageField = (props) => {
   return props.mess.map(message => <MessageComponent text={message} />);
};

const MessageButton = (props) => {
   let [value, setValue] = useState(props.messages);

   const updateMessages = () => {
      let temp = [];
      temp.push("Нормально");
      setValue(value.concat(temp));
   }
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


