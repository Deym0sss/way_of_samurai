import { connect } from "react-redux";
import { followAC, unfollowAC, setUsersAC } from "../../redux/users-reducer";
import { Users } from "./Users";

const mapToStateProps = (state) => {
  return {
    users: state.usersPage.users,
  };
};
const mapToDispatchProps = (dispatch) => {
  return {
    follow: (userId) => {
      dispatch(followAC(userId));
    },
    unfollow: (userId) => {
      dispatch(unfollowAC(userId));
    },
    setUsers: (users) => {
      dispatch(setUsersAC(users));
    },
  };
};

export const UsersContainer = connect(
  mapToStateProps,
  mapToDispatchProps
)(Users);
