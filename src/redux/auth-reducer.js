const SET_USERS_AUTH_DATA = "SET_USERS_AUTH_DATA";
let initialState = {
  user: null,
  email: null,
  login: null,
  isAuth: false,
  isFetching: false,
};
const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USERS_AUTH_DATA: {
      return {
        ...state,
        ...action.data,
        isAuth: true,
      };
    }

    default:
      return state;
  }
};

export const setUserAuthData = (userId, email, login) => {
  return { type: SET_USERS_AUTH_DATA, data: { userId, email, login } };
};
export default authReducer;