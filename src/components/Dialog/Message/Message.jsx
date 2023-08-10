import React from 'react';
import styles from './../Dialog.module.css'

const Message = (props) => {

    let newMessageElement=React.createRef()

    let sentMessage = () =>{
       
        let text = newMessageElement.current.value
        

    }

    return (
        
            <div className={styles.message}>
                <div>
                <textarea defaultValue={props.text} ref={newMessageElement}></textarea> 
                </div>
                <button onClick={sentMessage}>Sent message</button>
             
            </div>
            
       )
}


export default Message;