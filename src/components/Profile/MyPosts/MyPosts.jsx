import styles from './MyPosts.module.css'
import Post from './Post/Post';

const MyPosts = (props) => {

  

    let postsElement = props.posts.map(p => <Post message={p.message} amountOfLikes={p.amountOfLikes} />)

    return (
        <div className={styles.item}>
            <h3>My posts</h3>
            <div>
                <div className={styles.item}>
                    <textarea></textarea>
                </div>
                <div className={styles.item}>
                    <button>Add post</button>
                </div>

            </div>
            <div classsName={styles.posts}>

                {postsElement}

            </div>
        </div>

    )

}
export default MyPosts;