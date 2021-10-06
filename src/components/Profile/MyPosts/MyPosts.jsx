import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {
  const postElements = props.posts.map((p) => (
    <Post message={p.text} likesCount={p.likesCount} />
  ));

    const textField = React.createRef();

    const addPost = () => {
      const textValue = textField.current.value;
      alert(textValue);
      textField.current.value = '';
    };

  return (
    <div className={s.myPosts}>
      <h3>My posts</h3>
      <div className={s.textArea}>
        <div>
          <textarea ref={textField}></textarea>
        </div>
        <div>
          <button onClick={ addPost }>Add Post</button>
        </div>
      </div>
      {postElements}
    </div>
  );
};

export default MyPosts;
