import { profileAPI } from "../api/api";

const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
const SET_USER_PROFILE = "SET_USER_PROFILE";
const SET_STATUS = "SET_STATUS";

let initialState = {
  posts: [
    { message: "Hello there", amountOfLikes: "Likes 12", id: 1 },
    { message: "Escalator", amountOfLikes: "Likes 28", id: 2 },
    { message: "Mayonez", amountOfLikes: "Likes 20", id: 3 },
    { message: "First post", amountOfLikes: "Likes 100", id: 4 },
  ],
  newPostText: "Example",
  profile: null,
  status: "",
};

const profileReduser = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST: {
      let newPost = {
        id: 5,
        message: state.newPostText,
        amountOfLikes: "Likes " + Math.round(Math.random() * 101),
      };
      return {
        ...state,
        posts: [...state.posts, newPost],
        newPostText: "",
      };
    }

    case UPDATE_NEW_POST_TEXT: {
      return {
        ...state,
        newPostText: action.newText,
      };
    }
    case SET_USER_PROFILE: {
      return {
        ...state,
        profile: action.profile,
      };
    }
    case SET_STATUS: {
      return {
        ...state,
        status: action.status,
      };
    }

    default:
      return state;
  }
};

export const addPostActionCreator = () => {
  return { type: ADD_POST };
};
export const updateNewPostTextActionCreator = (text) => {
  return { type: UPDATE_NEW_POST_TEXT, newText: text };
};
export const setUserProfile = (profile) => {
  return { type: SET_USER_PROFILE, profile };
};
export const setStatus = (status) => {
  return { type: SET_STATUS, status };
};
export const getUserProfile = (userId) => (dispatch) => {
  return profileAPI.getProfile(userId).then((data) => {
    dispatch(setUserProfile(data));
  });
};
export const getStatus = (userId) => (dispatch) => {
  return profileAPI.getStatus(userId).then((data) => {
    dispatch(setStatus(data.data));
  });
};
export const updateStatus = (status) => (dispatch) => {
  return profileAPI.updateStatus(status).then((data) => {
    dispatch(setStatus(status));
  });
};
export default profileReduser;
