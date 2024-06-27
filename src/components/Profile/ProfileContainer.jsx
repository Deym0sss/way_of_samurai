import React from "react";
import { connect } from "react-redux";
import Profile from "./Profile";
import { getUserProfile } from "../../redux/profile-reducer";
import { Navigate, useParams } from "react-router-dom";
import { WithAuthRedirect } from "../../hoc/WithAuthRedirect";
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
      userId = 2;
    }
    this.props.getUserProfile(userId);
  }
  render() {
    return <Profile {...this.props} profile={this.props.profile} />;
  }
}

const AuthRedirectComponent = WithAuthRedirect(ProfileContainer);

const mapToStateProps = (state) => {
  return {
    posts: state.profilePage.posts,
    profile: state.profilePage.profile,
  };
};

const WithUrlDataComponent = withRouter(AuthRedirectComponent);

export default connect(mapToStateProps, { getUserProfile })(
  WithUrlDataComponent
);
