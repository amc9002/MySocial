const ADD_POST = 'ADD_POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT';

let initialState = {
    postsData: [
        { id: 1, post: "Hello!", likesCount: 10 },
        { id: 2, post: "Post 1", likesCount: 20 },
        { id: 3, post: "Post 2", likesCount: 30 },
        { id: 4, post: "Post 3", likesCount: 40 }
    ],
    newPostText: ''
}

function profileReducer(state = initialState, action) { // state = store.profilePage
    switch (action.type) {
        case ADD_POST: {
            let nextId = state.postsData[state.postsData.length - 1].id + 1;
            let newPost = {
                id: nextId,
                post: state.newPostText,
                likesCount: 0
            }
            return {
                ...state,
                postsData: [...state.postsData, newPost],
                newPostText: ''
            }
        }
        case UPDATE_NEW_POST_TEXT: {
            return {
                ...state,
                newPostText: action.newText
            };
        }
        default: return state;
    }
}

export default profileReducer;

export const addPostAC = () => ({ type: ADD_POST })
export const updateNewPostTextAC = (text) => ({ type: UPDATE_NEW_POST_TEXT, newText: text })