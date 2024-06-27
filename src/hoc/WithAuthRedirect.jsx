import React from "react";
import { connect } from "react-redux";
import { Navigate } from "react-router-dom";
let mapToStatePropsForRedirect = (state) => ({
  isAuth: state.auth.isAuth,
});

export const WithAuthRedirect = (Component) => {
  class RedirectComponent extends React.Component {
    render() {
      if (!this.props.isAuth) return <Navigate to={"/login"} />;
      return <Component {...this.props} />;
    }
  }
  const ConnectedAuthRedirectComponent = connect(mapToStatePropsForRedirect)(
    RedirectComponent
  );

  return ConnectedAuthRedirectComponent;
};
