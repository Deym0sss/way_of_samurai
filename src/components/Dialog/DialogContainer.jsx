import { sendMessageCreator, updateNewMessageBodyCreator } from '../../redux/dialog-reducer'
import Dialog from './Dialog'
const DialogContainer = (props) => {
let state = props.store.getState().dialogPage
let onSendMessageClick =()=>{
    props.store.dispatch(sendMessageCreator())
}
let onNewMassageChange=(body)=>{
    props.store.dispatch(updateNewMessageBodyCreator(body))
}
    return <Dialog  updateNewMessageBody={onNewMassageChange} sendMessage={onSendMessageClick} dialogPage={state}/>
}
export default DialogContainer;