import { addPost, state, updateNewPostText } from './Redux/State';
import './index.css';
import { rerenderEntireTree } from './render';

rerenderEntireTree(state, addPost, updateNewPostText);

