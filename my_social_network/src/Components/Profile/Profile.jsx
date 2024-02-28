import MyPosts from './MyPosts/MyPosts';
import s from './Profile.module.css'

const Profile = () => {
    return (
      <div className={s.content}>
      <div>
        <img src="https://i.pinimg.com/564x/1c/56/74/1c5674df8896d8c173d8aaf59f5aeecb.jpg" className={s.coverPic} alt="Cover picture" />
      </div>
      <div>ava + descr</div>
      <MyPosts />
    </div>
    );
}

export default Profile;