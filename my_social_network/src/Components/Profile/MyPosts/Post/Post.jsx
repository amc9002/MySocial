import s from './Post.module.css';

const Post = () => {
  return (
    <div className={s.item}>
      <img src='https://sm.ign.com/ign_nordic/cover/a/avatar-gen/avatar-generations_prsz.jpg' alt='ava'></img>
      Post
      <div>Like</div>
    </div>
  );
}

export default Post;