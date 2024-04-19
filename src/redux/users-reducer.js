const UNFOLLOW = "UNFOLLOW";
const FOLLOW = "FOLLOW";
const SET_USERS = "SET_USERS";
const randomAvatar = Math.random(100);
let initialState = {
  users: [],
};
const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW: {
      return {
        ...state,
        users: state.users.map((user) => {
          if (user.id === action.userId) {
            return { ...user, followed: true };
          } else return user;
        }),
      };
    }

    case UNFOLLOW: {
      return {
        ...state,
        users: state.users.map((user) => {
          if (user.id === action.userId) {
            return { ...user, followed: false };
          } else return user;
        }),
      };
    }
    case SET_USERS: {
      return {
        ...state,
        users: [...action.users],
      };
    }

    default:
      return state;
  }
};

export let followAC = (userId) => {
  return { type: FOLLOW, userId: userId };
};
export let unfollowAC = (userId) => {
  return { type: UNFOLLOW, userId: userId };
};
export let setUsersAC = (users) => {
  return { type: SET_USERS, users: users };
};
export default usersReducer;
