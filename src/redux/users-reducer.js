const UNFOLLOW = "UNFOLLOW";
const FOLLOW = "FOLLOW";
const SET_USERS = "SET_USERS";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const SET_TOTAL_COUNT = "SET_TOTAL_COUNT";
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING";
let initialState = {
  users: [],
  totalCount: 0,
  currentPage: 1,
  pageSize: 100,
  isFetching: false,
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
        users: action.users,
      };
    }
    case SET_CURRENT_PAGE: {
      return {
        ...state,
        currentPage: action.currentPage,
      };
    }
    case SET_TOTAL_COUNT: {
      return {
        ...state,
        totalCount: action.totalCount,
      };
    }
    case TOGGLE_IS_FETCHING: {
      return {
        ...state,
        isFetching: action.isFetching,
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
export let setCurrentPageAC = (currentPage) => {
  return { type: SET_CURRENT_PAGE, currentPage };
};
export let setTotalCountAC = (totalCount) => {
  return { type: SET_TOTAL_COUNT, totalCount };
};
export let toggleIsFetchingAC = (isFetching) => {
  return { type: TOGGLE_IS_FETCHING, isFetching };
};
export default usersReducer;
