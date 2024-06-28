import React from "react";
import { connect } from "react-redux";
import Profile from "./Profile";
import {
  getStatus,
  getUserProfile,
  updateStatus,
} from "../../redux/profile-reducer";
import { useParams } from "react-router-dom";
export function withRouter(Children) {
  return (props) => {
    const match = { params: useParams() };
    return <Children {...props} match={match} />;
  };
}
class ProfileContainer extends React.Component {
  componentDidMount() {
    let userId = this.props.match.params.userId;
    if (!userId) {
      userId = 31177;
    }
    this.props.getUserProfile(userId);
    this.props.getStatus(userId);
  }
  render() {
    return (
      <Profile
        {...this.props}
        profile={this.props.profile}
        status={this.props.status}
      />
    );
  }
}

const mapToStateProps = (state) => {
  return {
    posts: state.profilePage.posts,
    profile: state.profilePage.profile,
    status: state.profilePage.status,
  };
};

const WithUrlDataComponent = withRouter(ProfileContainer);

export default connect(mapToStateProps, {
  getUserProfile,
  getStatus,
  updateStatus,
})(WithUrlDataComponent);
