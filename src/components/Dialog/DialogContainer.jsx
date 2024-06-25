import {
  sendMessageCreator,
  updateNewMessageBodyCreator,
} from "../../redux/dialog-reducer";
import Dialog from "./Dialog";
import { connect } from "react-redux";

const mapToStateProps = (state) => {
  return {
    dialogPage: state.dialogPage,
    isAuth: state.auth.isAuth,
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
const DialogContainer = connect(mapToStateProps, mapToDispatchProps)(Dialog);

export default DialogContainer;
