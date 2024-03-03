import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

export function rerenderEntireTree(state, addPost, updateNewPostText) {
  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(
    <React.StrictMode>
      <App state={state} addPost={addPost} updateNewPostText={updateNewPostText}/>
    </React.StrictMode>
  );
}

