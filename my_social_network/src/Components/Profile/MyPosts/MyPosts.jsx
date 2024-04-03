import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post'
import { maxLength, required } from '../../../Utils/validators';
import { Formik } from 'formik';

const validator = (value) => {
  console.log("Validator is called", value);
  const errors = {};
  {
    const req = required(value.newPost);
    if (req) {
      errors.newPost = req;
    }
    else {
      const len = maxLength(10)(value.newPost);
      if (len) errors.newPost = len;
    }
  }

  console.log("Validator resilt:", errors.newPost);
  return errors;
}

const MyPostsForm = (props) => {
  return (
    <div>
      <Formik
        initialValues={{ newPost: '' }}
        validate={validator}
        onSubmit={(values, { setSubmitting }) => {
          setSubmitting(props.onSubmit(values.newPost));
        }}
      >
        {({ values, errors, touched, handleSubmit, handleChange }) => (
          <form onSubmit={handleSubmit}>
            <textarea className={errors.newPost && touched.newPost ? s.error : undefined}
              name="newPost"
              type="text"
              placeholder={"Enter post here"}
              onChange={handleChange}
              value={values.newPost}
            />
            <div className={s.errorMsg}>
              {errors.newPost && touched.newPost && <div>{errors.newPost}</div>}
            </div>
            <div><button type={"submit"}>Add post</button></div>
          </form>
        )}
      </Formik>
    </div>
  )
}


function MyPosts(props) {
  let postsDataToJsx = props.profilePage.postsData.map(p =>
    <Post key={p.id} post={p.post} likesCount={p.likesCount} />
  );

  const onAddPost = (newPost) => {
    props.addPost(newPost);
  }

  return (
    <div>
      <div className={s.postsBlock}><h3>My posts</h3></div>
      <div>New post:</div>
      <MyPostsForm onSubmit={onAddPost} />
      <div className={s.posts}>{postsDataToJsx}</div>
    </div>
  );
}

export default MyPosts;