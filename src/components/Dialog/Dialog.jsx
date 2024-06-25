import { Navigate } from "react-router-dom";
import styles from "./Dialog.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialog = (props) => {
  let state = props.dialogPage;
  let dialogsElement = state.dialogs.map((d) => (
    <DialogItem name={d.name} id={d.id} key={d.id} />
  ));
  let messagesElement = state.messages.map((m) => (
    <Message text={m.text} key={m.id} />
  ));

  let newMessageBody = state.newMessageBody;
  let onSendMessageClick = () => {
    props.sendMessage();
  };
  let onNewMassageChange = (e) => {
    let body = e.target.value;
    props.updateNewMessageBody(body);
  };

  if (!props.isAuth) return <Navigate to={"/login"} />;
  return (
    <div className={styles.dialogs}>
      <div className={styles.dialogItems}>{dialogsElement}</div>

      <div className={styles.messages}>
        <div>{messagesElement}</div>
        <div>
          <div>
            <textarea
              value={newMessageBody}
              onChange={onNewMassageChange}
              placeholder="Enter massage"
            ></textarea>
          </div>
          <div>
            <button onClick={onSendMessageClick}>Send</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dialog;
