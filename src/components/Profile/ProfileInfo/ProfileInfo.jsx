import { Preloader } from "../../common/Preloader/Preloader";
import styles from "./ProfileInfo.module.css";
const ProfileInfo = (props) => {
  if (!props.profile) {
    return <Preloader />;
  }
  return (
    <div>
      <div>
        <img src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg" />
      </div>

      <div className={styles.description}>
        <img src={props.profile.photos.large}></img>
        ava + discription
      </div>
    </div>
  );
};
export default ProfileInfo;
