import { NavLink } from "react-router-dom";
import styles from "./Header.module.css";
const Header = (props) => {
  return (
    <header className={styles.header}>
      {props.isAuth === true ? (
        <div className={styles.loginBlock}> {props.login}</div>
      ) : (
        <div className={styles.loginBlock}>
          <NavLink to={"/login"}>Login</NavLink>
        </div>
      )}

      <img
        src={
          "https://play-lh.googleusercontent.com/DTzWtkxfnKwFO3ruybY1SKjJQnLYeuK3KmQmwV5OQ3dULr5iXxeEtzBLceultrKTIUTr"
        }
      />
    </header>
  );
};
export default Header;
