import React from "react";
import Header from "./Header";
import { connect } from "react-redux";
import { setUserAuthData } from "../../redux/auth-reducer";
import { authAPI } from "../../api/api";
class HeaderContainer extends React.Component {
  componentDidMount() {
    authAPI.getAuth().then((data) => {
      if (data.resultCode === 0) {
        const { id, email, login } = data.data;
        this.props.setUserAuthData(id, email, login);
      }
    });
  }
  render() {
    return <Header {...this.props} />;
  }
}
const mapStateToProps = (state) => {
  return {
    isAuth: state.auth.isAuth,
    login: state.auth.login,
  };
};
export default connect(mapStateToProps, { setUserAuthData })(HeaderContainer);
