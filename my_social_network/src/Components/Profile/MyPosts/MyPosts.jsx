import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post'

function MyPosts(props) {
  let postsDataToJsx = props.profilePage.postsData.map(p =>
    <Post key={p.id} post={p.post} likesCount={p.likesCount} />
  );

  let newPostElement = React.createRef();

  function addPost() {
    props.addPost();
  }

  function onPostChange() {
    let text = newPostElement.current.value;
    props.updateNewPostText(text);
  }

  return (
    <div>
      <div className={s.postsBlock}><h3>My posts</h3></div>
      <div>New post:</div>
      <div>
        <div>
          <textarea ref={newPostElement} onChange={onPostChange} value={props.profilePage.newPostText} />
        </div>
        <div><button onClick={addPost}>Add post</button></div>
      </div>
      <div className={s.posts}>{postsDataToJsx}</div>
    </div>
  );
}

export default MyPosts;