const UNFOLLOW = "UNFOLLOW";
const FOLLOW = "FOLLOW";
const SET_USERS = "SET_USERS";
const randomAvatar = Math.random(100);
let initialState = {
  users: [
    {
      id: 1,
      isFollowed: false,
      avatarURL: `https://robohash.org/${randomAvatar}`,
      fullName: "Kirill",
      age: 21,
      location: { country: "Ukraine", city: "Dnipro" },
      status: "Dateing",
    },
    {
      id: 2,
      isFollowed: true,
      avatarURL: `https://robohash.org/${randomAvatar + 1}`,
      fullName: "Pasha",
      age: 22,
      location: { country: "Ukraine", city: "Dnipro" },
      status: "Free",
    },
    {
      id: 3,
      isFollowed: true,
      avatarURL: `https://robohash.org/${randomAvatar + 2}`,
      fullName: "Amina",
      age: 19,
      location: { country: "Ukraine", city: "Dnipro" },
      status: "Dateing",
    },
  ],
};
const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW: {
      return {
        ...state,
        users: state.users.map((user) => {
          if (user.id === action.userId) {
            return { ...user, isFollowed: true };
          } else return user;
        }),
      };
    }

    case UNFOLLOW: {
      return {
        ...state,
        users: state.users.map((user) => {
          if (user.id === action.userId) {
            return { ...user, isFollowed: false };
          } else return user;
        }),
      };
    }
    case SET_USERS: {
      return {
        ...state,
        users: [...state.users, ...action.users],
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
