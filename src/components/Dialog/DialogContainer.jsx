import {
  sendMessageCreator,
  updateNewMessageBodyCreator,
} from "../../redux/dialog-reducer";
import Dialog from "./Dialog";
import { connect } from "react-redux";
import { WithAuthRedirect } from "../../hoc/WithAuthRedirect";

const AuthRedirectComponent = WithAuthRedirect(Dialog);

const mapToStateProps = (state) => {
  return {
    dialogPage: state.dialogPage,
  };
};
const mapToDispatchProps = (dispatch) => {
  return {
    updateNewMessageBody: (body) => {
      dispatch(updateNewMessageBodyCreator(body));
    },
    sendMessage: () => {
      dispatch(sendMessageCreator());
    },
  };
};
const DialogContainer = connect(
  mapToStateProps,
  mapToDispatchProps
)(AuthRedirectComponent);

export default DialogContainer;
