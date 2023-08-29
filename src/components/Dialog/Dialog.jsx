import { sendMessageCreator, updateNewMessageBodyCreator } from '../../redux/dialog-reducer'
import styles from './Dialog.module.css'
import DialogItem from './DialogItem/DialogItem'
import Message from './Message/Message'



const Dialog = (props) => {
let state = props.store.getState().dialogPage

let dialogsElement = state.dialogs.map(d => <DialogItem name={d.name} id={d.id} />)
let messagesElement = state.messages.map(m => <Message text={m.text} />)
let newMessageBody = state.newMessageBody

let onSendMessageClick =()=>{
    
    props.store.dispatch(sendMessageCreator())
}




let onNewMassageChange=(e)=>{
    let body = e.target.value
    
    props.store.dispatch(updateNewMessageBodyCreator(body))
   

}


    return (

        <div className={styles.dialogs}>


            <div className={styles.dialogItems}>

                {dialogsElement}

            </div>


            <div className={styles.messages}>

                <div>{messagesElement}</div>
                <div>
                    <div><textarea value={newMessageBody}onChange={onNewMassageChange} placeholder='Enter massage'></textarea></div>
                    <div><button onClick={onSendMessageClick}>Send</button></div>
                </div>

            </div>

        </div>
    )
}




export default Dialog;