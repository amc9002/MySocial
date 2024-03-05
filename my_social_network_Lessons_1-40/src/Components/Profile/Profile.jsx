import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPosts from './MyPosts/MyPosts';

function Profile(props) {
  return (
    <div>
      <ProfileInfo name='My name' descr='My description' />
      <MyPosts profilePage={props.profilePage} dispatch={props.dispatch} />
    </div>
  );
}

export default Profile;