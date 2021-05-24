export const ADD_MESSAGE = 'CHATS::ADD_MESSAGE';

export const addMessage = (newMessage, chatId) => ({
    type: ADD_MESSAGE,
    newMessage,
    chatId,
});