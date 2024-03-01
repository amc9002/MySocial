import s from './MyPosts.module.css';
import Post from './Post/Post'

function MyPosts() {
let postsData = [
  {id: 1, text: "Hello!", likesCount: 10},
  {id: 2, text: "Post 1", likesCount: 20},
  {id: 3, text: "Post 2", likesCount: 30},
  {id: 4, text: "Post 3", likesCount: 40}
];
let postsDataToJsx = postsData.map(p => <Post key={p.id} text={p.text} likesCount={p.likesCount}/>);

  return (
    <div>
      <div className={s.postsBlock}>
        <h3>My posts</h3>
      </div>
      <div>New post:</div>
      <div>
        <div>
          <textarea></textarea>
        </div>
        <div>
          <button>Add post</button>
        </div>
      </div>
      <div className={s.posts}>
        {postsDataToJsx}
      </div>
    </div>
  );
}

export default MyPosts;