const SET_USERS = 'SET_USERS'
const ADD_USER = 'ADD_USER';
const UPDATE_NEW_USER_TEXT = 'UPDATE_NEW_USER_TEXT';
const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_TOTAL_COUNT = 'SET_TOTAL_COUNT'
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING"

let initialState = {
    users: [ ],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    newUserText: '',
    isFetching: false
}

function usersReducer(state = initialState, action) { // state = store.usersPage

    const followUnfollow = (userId, isFollowed) => {
        let stateCopy = {
            ...state,
            users: state.users.map(u => {
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
            return { ...state, users: action.users };
        case FOLLOW: {
            return followUnfollow(action.userId, true);
        }
        case UNFOLLOW: {
            return followUnfollow(action.userId, false);
        }
        case SET_CURRENT_PAGE: {
            return {...state, currentPage: action.currentPage};
        }
        case SET_TOTAL_COUNT: {
            return {...state, totalUsersCount: action.totalUsersCount}
        }
        case TOGGLE_IS_FETCHING: {
            return {...state, isFetching: action.isFetching}
        }
        default: return state;
    }
}

export default usersReducer;

export const setUsers = (users) => ({ type: SET_USERS, users })
export const follow = (userId) => ({ type: FOLLOW, userId })
export const unfollow = (userId) => ({ type: UNFOLLOW, userId })
export const setCurrentPage = (currentPage) => ({ type: SET_CURRENT_PAGE, currentPage})
export const setTotalUsersCount = (totalUsersCount) => ({ type: SET_TOTAL_COUNT, totalUsersCount })
export const toggleIsFetching = (isFetching) => ({ type: TOGGLE_IS_FETCHING, isFetching })


// export const addUserAC = () => ({ type: ADD_USER })
// export const updateNewUserTextAC = (text) => ({ type: UPDATE_NEW_USER_TEXT, newText: text })