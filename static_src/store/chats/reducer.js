import {ADD_CHAT} from './actions';

export const initialState = {
    chatList: [
        {
            name: "Chat1",
            id: "chat1",
        },
        {
            name: "Chat2",
            id: "chat2",
        },
    ]
};

export const chatsReducer = (state = initialState, action) =>{
    switch(action.type){
        case ADD_CHAT:{
            return {
                ...state,
                chatList: [...state.chatList, action.newChat],
            };
        }
        default: return state;
    }
};