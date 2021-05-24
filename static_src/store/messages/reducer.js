import {ADD_MESSAGE} from './actions';
import { AUTHORS } from '../../../utils/constants';

export const initialState = {
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
};

export const messagesReducer = (state = initialState, action) =>{
    switch(action.type){
        case ADD_MESSAGE:{
            console.log(action);
            return {
                ...state,
               [action.chatId]: [...state[action.chatId], action.newMessage],
            };
        }
        default: return state;
    }
};