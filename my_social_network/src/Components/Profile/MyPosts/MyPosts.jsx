import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post'

function MyPosts(props) {
  let postsDataToJsx = props.postsData.map(p =>
    <Post key={p.id} text={p.text} likesCount={p.likesCount} />
  );

  let newPostElement = React.createRef();

  function addPost() {
    let text = newPostElement.current.value;
    newPostElement.current.value = '';
    alert(text);
  }

  return (
    <div>
      <div className={s.postsBlock}>
        <h3>My posts</h3>
      </div>
      <div>New post:</div>
      <div>
        <div>
          <textarea ref={newPostElement}></textarea>
        </div>
        <div>
          <button onClick={addPost}>Add post</button>
        </div>
      </div>
      <div className={s.posts}>
        {postsDataToJsx}
      </div>
    </div>
  );
}

export default MyPosts;