import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import s from "./Profile.module.css";

const Profile = (props) => {
  return (
    <div className={s.content}>
      <ProfileInfo />
      <MyPosts
        posts={props.state.posts}
        addPostEntry={props.addPostEntry}
        updatePostEntry={props.updatePostEntry}
      />
    </div>
  );
};

export default Profile;
