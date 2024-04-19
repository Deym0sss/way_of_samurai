const UPDATE_NEW_MASSAGE_BODY = "UPDATE-NEW-MASSAGE-BODY";
const SEND_MESSAGE = "SEND-MESSAGE";

let initialState = {
  dialogs: [
    { id: "1", name: "Kyrill" },
    { id: "2", name: "Pasha" },
    { id: "3", name: "Sasha" },
    { id: "4", name: "Vanya" },
  ],
  messages: [
    { id: 1, text: "Hi" },
    { id: 2, text: "Darova" },
    { id: 3, text: "Bonjorno" },
  ],
  newMessageBody: "",
};
const dialogReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_NEW_MASSAGE_BODY: {
      return {
        ...state,
        newMessageBody: action.body,
      };
    }

    case SEND_MESSAGE: {
      let body = state.newMessageBody;
      let messageId = state.messages.length + 1;
      return {
        ...state,
        newMessageBody: "",
        messages: [...state.messages, { id: messageId, text: body }],
      };
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
