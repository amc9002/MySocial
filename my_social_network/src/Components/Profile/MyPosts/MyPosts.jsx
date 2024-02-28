import s from './MyPosts.module.css';
import Post from './Post/Post'

const MyPosts = () => {
  return (  
      <div>
        <div className={s.posts}>My posts</div>        
        <div>New post:</div>
        <div>
          <textarea></textarea>
          <button>Add post</button>
        </div>
        <div>
          <Post />
          <Post />
          <Post />
          <Post />
        </div>
      </div>
  );
}

export default MyPosts;