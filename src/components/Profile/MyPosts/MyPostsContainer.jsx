import {
  addPostActionCreator,
  updateNewPostTextActionCreator,
} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import { connect } from "react-redux";

const mapToStateProps = (state) => {
  console.log(state);
  return {
    posts: state.profilePage.posts,
    newPostText: state.profilePage.newPostText,
  };
};
const mapToDispatchProps = (dispatch) => {
  return {
    updateNewPostText: (text) => {
      dispatch(updateNewPostTextActionCreator(text));
    },
    addPost: () => {
      dispatch(addPostActionCreator());
    },
  };
};
const MyPostsContainer = connect(mapToStateProps, mapToDispatchProps)(MyPosts);

export default MyPostsContainer;
