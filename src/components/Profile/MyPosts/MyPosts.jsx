import React from 'react';
import styles from './MyPosts.module.css'
import Post from './Post/Post';
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../redux/profile-reducer';






const MyPosts = (props) => {

    let newPostElement = React.createRef()


    let addPost = () => {
        //props.addPost()
        props.dispatch(addPostActionCreator())

    }

    let onPostChange = () => {

        let text = newPostElement.current.value
        // props.updateNewPostText(text)
        
        props.dispatch(updateNewPostTextActionCreator(text))


    }



    let postsElement = props.posts.map(p => <Post message={p.message} amountOfLikes={p.amountOfLikes} />)

    return (
        <div className={styles.item}>
            <h3>My posts</h3>
            <div>
                <div className={styles.item}>
                    <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText} />
                </div>
                <div className={styles.item}>
                    <button onClick={addPost}>Add post</button>
                </div>

            </div>
            <div className={styles.posts}>

                {postsElement}

            </div>
        </div>

    )

}
export default MyPosts;