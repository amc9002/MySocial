import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPosts from './MyPosts/MyPosts';
import s from './Profile.module.css'

function Profile(props) {
  return (
    <div>
      <ProfileInfo name='My name' descr='My description'/>
      <MyPosts />
    </div>
  );
}

export default Profile;