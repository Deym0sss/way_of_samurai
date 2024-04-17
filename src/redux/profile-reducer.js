const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";

let initialState = {
  posts: [
    { message: "Hello there", amountOfLikes: "Likes 12" },
    { message: "Escalator", amountOfLikes: "Likes 28" },
    { message: "Mayonez", amountOfLikes: "Likes 20" },
    { message: "First post", amountOfLikes: "Likes 100" },
  ],
  newPostText: "Example",
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
export default profileReduser;
