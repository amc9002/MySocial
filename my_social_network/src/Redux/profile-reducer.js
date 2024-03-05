const ADD_POST = 'ADD_POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT';

function profileReducer(state, action) { // state = store.state.profilePage
    switch (action.type) {
        case ADD_POST: {
            let nextId = state.postsData[state.postsData.length - 1].id + 1;
            let newPost = {
                id: nextId,
                post: state.newPostText,
                likesCount: 0
            }
            state.postsData.push(newPost);
            state.newPostText = '';
            break;
        }
        case UPDATE_NEW_POST_TEXT: {
            state.newPostText = action.newText;
            break;
        }
        default: {}
    }

    return state;
}

export default profileReducer;

export const addPostAC = () => ({ type: ADD_POST })
export const updateNewPostTextAC = (text) => ({ type: UPDATE_NEW_POST_TEXT, newText: text })