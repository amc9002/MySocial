import { addPostAC, updateNewPostTextAC } from '../../../Redux/profile-reducer';
import MyPosts from './MyPosts';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  return {profilePage: state.profilePage};
}

const mapDispatchToProps = (dispatch) => {
  return {
    addPost: () => dispatch(addPostAC()),
    updateNewPostText: (text) => dispatch(updateNewPostTextAC(text))
  }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;