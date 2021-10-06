import React from "react";
import { addPostEntry } from "../../../redux/state";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {
  const postElements = props.posts.map((p) => (
    <Post message={p.text} likesCount={p.likesCount} />
  ));

  const textField = React.createRef();

  const addPost = () => {
    props.addPostEntry();
  };

  const updatePost = () => {
    const textValue = textField.current.value;
    props.updatePostEntry(textValue);
  };

  return (
    <div className={s.myPosts}>
      <h3>My posts</h3>
      <div className={s.textArea}>
        <div>
          <textarea onChange={updatePost} ref={textField}></textarea>
        </div>
        <div>
          <button onClick={addPost}>Add Post</button>
        </div>
      </div>
      {postElements}
    </div>
  );
};

export default MyPosts;
