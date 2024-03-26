import { profileAPI, usersAPI } from "../API/api";

const ADD_POST = 'ADD_POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_USER_STATUS = 'SET_USER_STATUS'

let initialState = {
    profileData: null,
    status: '',
    postsData: [
        { id: 1, post: "Hello!", likesCount: 10 },
        { id: 2, post: "Post 1", likesCount: 20 },
        { id: 3, post: "Post 2", likesCount: 30 },
        { id: 4, post: "Post 3", likesCount: 40 }
    ],
}

function profileReducer(state = initialState, action) { // state = store.profilePage
    switch (action.type) {
        case ADD_POST: {
            let nextId = state.postsData[state.postsData.length - 1].id + 1;
            let newPost = {
                id: nextId,
                post: action.newPostText,
                likesCount: 0
            }
            return {
                ...state,
                postsData: [...state.postsData, newPost],
            }
        }
        case SET_USER_PROFILE: {
            return {
                ...state,
                profileData: action.profile
            };
        }
        case SET_USER_STATUS: {
            return {
                ...state,
                status: action.status
            };
        }
        default: return state;
    }
}

export const addPost = (newPostText) => ({ type: ADD_POST, newPostText })
const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile })
const setUserStatus = (status) => ({ type: SET_USER_STATUS, status })

export const getProfile = (userId) => (dispatch) => { 
    usersAPI.getProfile(userId)
        .then(data => { dispatch(setUserProfile(data)) });
}

export const getUserStatus = (userId) => (dispatch) => { 
    profileAPI.getStatus(userId)
        .then(data => { dispatch(setUserStatus(data)) });
}

export const updateUserStatus = (newStatus) => (dispatch) => { 
    profileAPI.updateStatus(newStatus)
        .then(response => {
            if(response.statusCode === 0) {
                dispatch(setUserStatus(newStatus))
            }
         });
}

export default profileReducer;
