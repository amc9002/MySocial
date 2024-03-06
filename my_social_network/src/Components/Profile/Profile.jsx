import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPostsContainer from './MyPosts/MyPostsContainer';

function Profile() {
  return (
    <div>
      <ProfileInfo name='My name' descr='My description' />
      <MyPostsContainer />
    </div>
  );
}

export default Profile;