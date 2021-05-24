import React from 'react';
import '../index.css';

export const MessageComponent = (props) => {
   return (
      <div >
         <div>
            <b>{props.author}: </b>{props.text}
         </div>
      </div>

   );
}