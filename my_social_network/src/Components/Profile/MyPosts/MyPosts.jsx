import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post'
import { Field, Form } from 'react-final-form';
import { maxLengthCreator, required } from '../../../Utils/validators';

const validator = (value) => {
  console.log("Validator is called");
  if (value.length === undefined || value.length === null || value.length <= 0)
    return undefined;
  required(value);
  maxLengthCreator(10)(value.newPost);
}

const MyPostsForm = (props) => {
  return (
    <Form fields={["newPost"]} onSubmit={values => {
      props.onSubmit(values.newPost)
    }}
      validate={values => {
        validator(values)
      }}
    >
      {({ handleSubmit }) => (
        <form onSubmit={handleSubmit}>
          <div>
            <Field name={"newPost"}
              component={"input"}
              type={"text"}
              placeholder={"Enter post here"}
            />
          </div>
          <div><button type={"submit"}>Add post</button></div>
        </form>
      )}
    </Form>
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