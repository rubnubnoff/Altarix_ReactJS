import { ADD_MESSAGES, WRITE_MESSAGE } from '../constants/message-types';

export const addMessages = (messages) => ({
    type: ADD_MESSAGES,
    payload: messages
});

export const writeMessage = (message) => ({
    type: WRITE_MESSAGE,
    payload: message
});

