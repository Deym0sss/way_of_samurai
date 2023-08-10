import MyPosts from './MyPosts/MyPosts';
import styles from './Profile.module.css'
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = (props) => {

    return (

        <div>
            <ProfileInfo />

            <MyPosts posts={props.posts} dispatch={props.dispatch} newPostText={props.newPostText}  />
        </div>
    )
}
export default Profile;