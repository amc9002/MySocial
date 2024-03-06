const SET_USERS = 'SET_USERS'
const ADD_USER = 'ADD_USER';
const UPDATE_NEW_USER_TEXT = 'UPDATE_NEW_USER_TEXT';
const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';

let initialState = {
    users: [
        {
            id: 1,
            userPic: 'https://karotkizmest.by/images/kalinouski.jpg',
            fullName: "Fullname 1",
            status: 'Status 1',
            location: {
                city: 'City 1',
                country: 'Country 1'
            },
            followed: false
        },
        {
            id: 2,
            userPic: 'https://karotkizmest.by/images/kalinouski.jpg',
            fullName: "Fullname 2",
            status: 'Status 2',
            location: {
                city: 'City 2',
                country: 'Country 2'
            },
            followed: true
        },
        {
            id: 3,
            userPic: 'https://karotkizmest.by/images/kalinouski.jpg',
            fullName: "Fullname 3",
            status: 'Status 3',
            location: {
                city: 'City 3',
                country: 'Country 3'
            },
            followed: true
        },
        {
            id: 4,
            userPic: 'https://karotkizmest.by/images/kalinouski.jpg',
            fullName: "Fullname 4",
            status: 'Status 4',
            location: {
                city: 'City 4',
                country: 'Country 4'
            },
            followed: true
        }
    ],
    newUserText: ''
}

function usersReducer(state = initialState, action) { // state = store.usersPage

    const followUnfollow = (userId, isFollowed) => {
        let stateCopy = {
            ...state,
            usersData: state.users.map(u => {
                if (u.id === userId)                
                    return { ...u, followed: isFollowed };
                return u;
            })
        };
        return stateCopy;
    }

    switch (action.type) {
        // case ADD_USER: {
        //     let nextId = state.usersData[state.usersData.length - 1].id + 1;
        //     let newUser = { id: nextId, }
        //     return {
        //         ...state, usersData: [...usersData, newUser]
        //     }
        // }
        // case UPDATE_NEW_USER_TEXT: {
        //     return {
        //         ...state,
        //         newUserText: action.newText
        //     };
        // }
        case SET_USERS:
            return { ...state, usersData: [...state.users, ...action.users] };
        case FOLLOW: {
            return followUnfollow(action.userId, true);
        }
        case UNFOLLOW: {
            return followUnfollow(action.userId, false);
        }
        default: return state;
    }
}

export default usersReducer;

export const setUsersAC = (users) => ({ type: SET_USERS, users })
export const followAC = (userId) => ({ type: FOLLOW, userId })
export const unfollowAC = (userId) => ({ type: UNFOLLOW, userId })

// export const addUserAC = () => ({ type: ADD_USER })
// export const updateNewUserTextAC = (text) => ({ type: UPDATE_NEW_USER_TEXT, newText: text })