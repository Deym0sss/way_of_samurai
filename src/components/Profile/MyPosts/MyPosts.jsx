import React from 'react';
import styles from './MyPosts.module.css'
import Post from './Post/Post';



const MyPosts = (props) => {

    let newPostElement = React.createRef()


    let onAddPost = () => {
        props.addPost()

    }

    let onPostChange = () => {
        let text = newPostElement.current.value
        props.updateNewPostText(text)


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
                    <button onClick={onAddPost}>Add post</button>
                </div>

            </div>
            <div className={styles.posts}>

                {postsElement}

            </div>
        </div>

    )

}
export default MyPosts;