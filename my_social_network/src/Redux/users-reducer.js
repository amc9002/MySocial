import { usersAPI } from "../API/api";

const SET_USERS = 'SET_USERS'
const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_TOTAL_COUNT = 'SET_TOTAL_COUNT'
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING"
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS'

let initialState = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    newUserText: '',
    isFetching: false,
    followingInProgress: []
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

        case SET_USERS:
            return { ...state, users: action.users };
        case FOLLOW: {
            return followUnfollow(action.userId, true);
        }
        case UNFOLLOW: {
            return followUnfollow(action.userId, false);
        }
        case SET_CURRENT_PAGE: {
            return { ...state, currentPage: action.currentPage };
        }
        case SET_TOTAL_COUNT: {
            return { ...state, totalUsersCount: action.totalUsersCount }
        }
        case TOGGLE_IS_FETCHING: {
            return { ...state, isFetching: action.isFetching }
        }
        case TOGGLE_IS_FOLLOWING_PROGRESS: {
            return {
                ...state,
                followingInProgress: action.isInProgress
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id != action.userId),
            }
        }
        default: return state;
    }
}

const setUsers = (users) => ({ type: SET_USERS, users })
const followSuccess = (userId) => ({ type: FOLLOW, userId })
const unfollowSuccess = (userId) => ({ type: UNFOLLOW, userId })
const setCurrentPage = (currentPage) => ({ type: SET_CURRENT_PAGE, currentPage })
const setTotalUsersCount = (totalUsersCount) => ({ type: SET_TOTAL_COUNT, totalUsersCount })
const toggleIsFetching = (isFetching) => ({ type: TOGGLE_IS_FETCHING, isFetching })
const toggleFollowingProgress = (isInProgress, userId) => ({ type: TOGGLE_IS_FOLLOWING_PROGRESS, isInProgress, userId })


// Thunk creators
export const getUsers = (currentPage, pageSize) => {
    return (dispatch) => {
        dispatch(toggleIsFetching(true));
        usersAPI.getUsers(currentPage, pageSize)
            .then(data => {
                dispatch(toggleIsFetching(false));
                dispatch(setCurrentPage(currentPage));
                dispatch(setUsers(data.items));
                dispatch(setTotalUsersCount(data.totalCount));
            });
    }
}

export const unfollow = (userId) => {
    return (dispatch) => {
        dispatch(toggleFollowingProgress(true, userId));
        usersAPI.unfollow(userId)
            .then(resultCode => {
                if (resultCode === 0) dispatch(unfollowSuccess(userId));
                dispatch(toggleFollowingProgress(false, userId));
            });
    }
}

export const follow = (userId) => {
    return (dispatch) => {
        dispatch(toggleFollowingProgress(true, userId));
        usersAPI.follow(userId)
            .then(resultCode => {
                if (resultCode === 0) dispatch(followSuccess(userId));
                dispatch(toggleFollowingProgress(false, userId));
            });
    }
}

export default usersReducer;
