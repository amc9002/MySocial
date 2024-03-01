import s from './Post.module.css';

function Post(props) {
  return (
    <div className={s.item}>
      <img src='https://sm.ign.com/ign_nordic/cover/a/avatar-gen/avatar-generations_prsz.jpg' alt='ava'></img>
      {props.text}
      <div>
        <span>Like</span> {props.likesCount}
      </div>
    </div>
  );
}

export default Post;