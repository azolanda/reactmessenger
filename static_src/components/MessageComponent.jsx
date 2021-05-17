import React from 'react';

import { AUTHORS } from '../../utils/constants';
import '../index.css';

export const MessageComponent = (props) => {
   return (
      <div>

         <div className={`messages ${props.author === AUTHORS.BOT ? "bot-message" : "human-message"}`}>
            <b>{props.author}: </b>{props.text}
         </div>
      </div>

   );
}