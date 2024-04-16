const UPDATE_NEW_MASSAGE_BODY = "UPDATE-NEW-MASSAGE-BODY";
const SEND_MESSAGE = "SEND-MESSAGE";

let initialState = {
  dialogs: [
    { id: "1", name: "Kyrill" },
    { id: "2", name: "Pasha" },
    { id: "3", name: "Sasha" },
    { id: "4", name: "Vanya" },
  ],
  messages: [{ text: "Hi" }, { text: "Darova" }, { text: "Bonjorno" }],
  newMessageBody: "",
};
const dialogReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_NEW_MASSAGE_BODY: {
      let stateCopy = { ...state };
      stateCopy.newMessageBody = action.body;
      return stateCopy;
    }

    case SEND_MESSAGE: {
      let stateCopy = { ...state };
      let body = stateCopy.newMessageBody;
      stateCopy.newMessageBody = "";
      stateCopy.messages = [...state.messages];
      stateCopy.messages.push({ id: 6, text: body });
      return stateCopy;
    }

    default:
      return state;
  }
};

export let sendMessageCreator = () => {
  return { type: SEND_MESSAGE };
};
export let updateNewMessageBodyCreator = (body) => {
  return { type: UPDATE_NEW_MASSAGE_BODY, body: body };
};
export default dialogReducer;
