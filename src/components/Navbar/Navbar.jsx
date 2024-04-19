import { NavLink } from "react-router-dom";
import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <nav className={styles.nav}>
      <div className={`${styles.item} ${styles.active}`}>
        <NavLink to="/profile">Profile</NavLink>
      </div>
      <div className={styles.item}>
        <NavLink to="/dialog">Message</NavLink>
      </div>
      <div className={styles.item}>
        <NavLink to="/news">News</NavLink>
      </div>
      <div className={styles.item}>
        <NavLink to="/music">Music</NavLink>
      </div>
      <div className={styles.item}>
        <NavLink to="/users">Users</NavLink>
      </div>
      <div className={styles.item}>
        <NavLink to="/settings">Settings</NavLink>
      </div>
    </nav>
  );
};
export default Navbar;
