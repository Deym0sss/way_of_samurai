import {
  sendMessageCreator,
  updateNewMessageBodyCreator,
} from "../../redux/dialog-reducer";
import Dialog from "./Dialog";
import { connect } from "react-redux";
import { WithAuthRedirect } from "../../hoc/WithAuthRedirect";
import { compose } from "redux";

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

export default compose(
  connect(mapToStateProps, mapToDispatchProps),
  WithAuthRedirect
)(Dialog);
