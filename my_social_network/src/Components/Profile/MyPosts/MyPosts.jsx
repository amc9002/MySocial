import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post'
import { Field, Form } from 'react-final-form';
import { maxLength, required } from '../../../Utils/validators';

const validator = (value) => {
  console.log("Validator is called", value);
  const errors = {};
  { //newPost field validation
    const req = required(value.newPost);
    console.log("'Recuired' returned: ", req);
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
    <Form fields={["newPost"]} onSubmit={values => {
      props.onSubmit(values.newPost)
    }}
      validate={values => {
        const errors = validator(values);
      }}
    >
      {({ handleSubmit }) => (
        <form onSubmit={handleSubmit}>
          <div>
            <Field name={"newPost"}>
              {({ input, meta }) => (
                <div>
                  <input
                    {...input}
                    type={"text"}
                    placeholder={"Enter post here"}
                  />
                  <div className='errorMsg'>
                    {meta.error && meta.touched && <div>{meta.error}</div>}
                  </div>
                </div>
              )}
            </Field>
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