import React from 'react';
import styles from './../Dialog.module.css'
const Message = (props) => {
    return (
        
            <div className={styles.message}>
                <div>{props.text}</div>
            </div>
            
       )
}
export default Message;