import React from "react";
import styles from "./Users.module.css";
import axios from "axios";
import userDefault from "../../assets/images/image.png";
export const Users = (props) => {
  const getUser = () => {
    if (props.users.length === 0) {
      axios
        .get("https://social-network.samuraijs.com/api/1.0/users")
        .then((response) => {
          console.log(response.data);
          props.setUsers(response.data.items);
        });
    }
  };

  return (
    <div>
      {props.users.map((user) => {
        return (
          <div key={user.id}>
            <span>
              <div>
                <img
                  src={user.photos.small ? user.photos.small : userDefault}
                  alt="Nothing"
                  className={styles.avatar}
                />
              </div>
            </span>
            <span>
              <span>
                <div>{user.name}</div>
                <div>{user.status}</div>
              </span>
              <span>
                {/* <div>{user.location.country}</div> */}
                {/* <div>{user.location.city}</div> */}
              </span>
            </span>
            <div>
              {user.followed ? (
                <button
                  onClick={() => {
                    props.unfollow(user.id);
                  }}
                >
                  unfollow
                </button>
              ) : (
                <button
                  onClick={() => {
                    props.follow(user.id);
                  }}
                >
                  follow
                </button>
              )}
            </div>
            <br />
          </div>
        );
      })}
      <button style={{ width: "100px", height: "20px" }} onClick={getUser}>
        Get users
      </button>
    </div>
  );
};
