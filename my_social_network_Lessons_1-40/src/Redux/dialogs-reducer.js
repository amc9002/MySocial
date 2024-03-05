const ADD_MESSAGE = 'ADD_MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE_NEW_MESSAGE_TEXT';

function dialogsReducer(state, action) { // state = store.state.dialogsPage
    switch (action.type) {
        case ADD_MESSAGE: {
            let nextId = state.messagesData[state.messagesData.length - 1].id + 1;
            let newMessage = {
                id: nextId,
                message: state.newMessageText,
            }
            state.messagesData.push(newMessage);
            state.newMessageText = '';
            break;
        }
        case UPDATE_NEW_MESSAGE_TEXT: {
            state.newMessageText = action.newText;
            break;
        }
        default: { alert('No such an action type!'); }
    }

    return state;
}

export default dialogsReducer;