const UPDATE_NEW_MASSAGE_BODY = 'UPDATE-NEW-MASSAGE-BODY'
const SEND_MESSAGE = 'SEND-MESSAGE'

const dialogReducer =()=>{
 
  switch(action.type){

    case UPDATE_NEW_MASSAGE_BODY:
      state.newMessageBody = action.body
      return(state)

    case SEND_MESSAGE:
      let body = state.newMessageBody
            state.newMessageBody=''
            state.messages.push({id:6, text:body})
            return(state)
    
    default:return(state)
  }
}


export let sendMessageCreator = () =>{return{type: SEND_MESSAGE }}
export let updateNewMessageBodyCreator = (body) =>{return{type: UPDATE_NEW_MASSAGE_BODY, body:body}}
export default dialogReducer