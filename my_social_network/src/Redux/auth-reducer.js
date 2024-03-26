import { authAPI } from "../API/api";

const SET_USER_DATA = 'SET_USER_DATA';
const LOGIN = 'LOGIN';

let initialState = {
    id: null,
    email: null,
    password: null,
    rememberMe: false,
    captcha: false,
    login: null,
    isAuth: false
};

function authReducer(state = initialState, action) {
    switch (action.type) {
        case SET_USER_DATA: {
            return {
                ...state,
                ...action.data,
                isAuth: true
            }
        }
        case LOGIN: {
            return {
                ...state,
                ...action.data
            }
        }
        default: return state;
    }
}

const setAuthUserData = (id, email, login) => ({type: SET_USER_DATA,  data: { id, email, login } });

const setLoginData = (email, password, rememberMe, captcha) => ({
    type: LOGIN, 
    data: { email, password, rememberMe, captcha }
});

export const setAuthData = () => (dispatch) => {
    authAPI.me()
        .then(data => {
            if (data.resultCode === 0) {
                const { id, login, email } = data.data;
                dispatch(setAuthUserData(id, email, login));
            }
        })
}

export const loginMe = (loginData) => (dispatch) => {
    authAPI.login(loginData)
        .then(data => {
            if (data.resultCode === 0) {
                const {email, password, rememberMe, captcha} = data.data;
                dispatch(setLoginData(email, password, rememberMe, captcha));
            }
        })
}

export default authReducer;