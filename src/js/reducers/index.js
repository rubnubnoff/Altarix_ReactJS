import { ADD_MESSAGES, WRITE_MESSAGE } from '../constants/message-types';

const initialState = {
    messages: [],
    newMessage: ''
}

export const rootReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_MESSAGES:
            return Object.assign({}, state, { messages: [...action.payload] });
        case WRITE_MESSAGE:
            return Object.assign({}, state, {newMessage: action.payload});
        default:
            return state;
    }
}

