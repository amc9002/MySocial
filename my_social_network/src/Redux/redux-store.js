import { applyMiddleware, legacy_createStore as createStore } from 'redux';
import {combineReducers} from "redux"
import sidebarReducer from "./sidebar-reducer";
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import usersReducer from './users-reducer';
import authReducer from './auth-reducer';
import {thunk as thunkMiddleware} from 'redux-thunk'

let reducers = combineReducers({
    auth: authReducer,
    sidebar: sidebarReducer,
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage: usersReducer
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.store = store;

export default store;