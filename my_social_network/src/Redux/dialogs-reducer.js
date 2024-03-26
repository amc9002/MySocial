const ADD_MESSAGE = 'ADD_MESSAGE';

let initialState = {
    dialogsData: [
        {
            id: 1,
            name: 'Andris',
            ava: "https://mir-s3-cdn-cf.behance.net/project_modules/disp/ea7a3c32163929.567197ac70bda.png",
            isActive: false,
        },
        {
            id: 2,
            name: 'Mscislau',
            ava: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHCZuslFbn42wwA9qw6ywBERhtpr_yOFy3Cw&usqp=CAU",
            isActive: true,
        },
        {
            id: 3,
            name: 'Anela',
            ava: "https://alitech.com.ng/wp-content/uploads/2020/06/IMG_20200603_114713-e1592183490881.jpg",
            isActive: false,
        },
        {
            id: 4,
            name: 'Kandrat',
            ava: "https://i.kinja-img.com/gawker-media/image/upload/t_original/ijsi5fzb1nbkbhxa2gc1.png",
            isActive: false,
        },
        {
            id: 5,
            name: 'Jakub',
            ava: "https://im.indiatimes.in/content/2022/Feb/AMP-44_61fb8b8840826.jpg?w=820&h=540&cc=1",
            isActive: false,
        }
    ],
    messagesData: [
        { id: 1, message: 'message 1' },
        { id: 2, message: "message 2" },
        { id: 3, message: 'message 3' }
    ],
}

function dialogsReducer(state = initialState, action) { // state = store.dialogsPage    
    switch (action.type) {
        case ADD_MESSAGE: {
            let nextId = state.messagesData[state.messagesData.length - 1].id + 1;
            let newMessage = {
                id: nextId,
                message: action.newMessage,
            }
            return {
                ...state, 
                messagesData: [...state.messagesData, newMessage],
            }
        }
        default: return state;
    }
}

export default dialogsReducer;

export const addMessage = (newMessage) => ({ type: ADD_MESSAGE, newMessage });