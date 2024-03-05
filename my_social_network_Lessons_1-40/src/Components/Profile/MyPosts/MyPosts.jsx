import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post'
import { addPostAC, updateNewPostTextAC } from '../../../Redux/store';

function MyPosts(props) {
  let postsDataToJsx = props.profilePage.postsData.map(p =>
    <Post key={p.id} post={p.post} likesCount={p.likesCount} />
  );

  const addPost = () => { props.dispatch( addPostAC() ); }
    
  const onPostChange = (e) => {
    let text = e.target.value;
    props.dispatch( updateNewPostTextAC(text) );
  }

  return (
    <div>
      <div className={s.postsBlock}><h3>My posts</h3></div>
      <div>New post:</div>
      <div>
        <div>
          <textarea placeholder='Enter post here' 
            onChange={onPostChange} value={props.profilePage.newPostText} />
        </div>
        <div><button onClick={addPost}>Add post</button></div>
      </div>
      <div className={s.posts}>{postsDataToJsx}</div>
    </div>
  );
}

export default MyPosts;