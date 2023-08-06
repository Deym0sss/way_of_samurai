import { NavLink } from 'react-router-dom';
import styles from './../Dialog.module.css'

const DialogItem = (props) => {
    return (
        <div className={styles.dialog + ' ' + styles.active}>
            <NavLink to={'/dialog/' + props.id}>{props.name}</NavLink>
        </div>
    )
}

export default DialogItem;