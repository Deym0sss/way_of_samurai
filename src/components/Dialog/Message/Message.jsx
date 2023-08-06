import styles from './../Dialog.module.css'

const Message = (props) => {

    return <div className={styles.message}> {props.text} </div>

}


export default Message;