import styles from './Dialog.module.css'
import DialogItem from './DialogItem/DialogItem'
import Message from './Message/Message'


const Dialog = (props) => {


 let dialogsElement = props.dialogs.map(d => <DialogItem name={d.name} id={d.id} />)

  

    let messagesElement = props.messages.map(m => <Message text={m.text} />)

    return (

        <div className={styles.dialogs}>


            <div className={styles.dialogItems}>

                {dialogsElement}

            </div>


            <div className={styles.messages}>

                {messagesElement}

            </div>

        </div>
    )
}




export default Dialog;