import React from "react";
import styles from "./Users.module.css";
export const Users = (props) => {
  return (
    <div>
      {props.users.map((user) => {
        return (
          <div key={user.id}>
            <span>
              <div>
                <img
                  src={user.avatarURL}
                  alt="Nothing"
                  className={styles.avatar}
                />
              </div>
              <div>
                {user.isFollowed ? (
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
            </span>
            <span>
              <span>
                <div>{user.fullName}</div>
                <div>{user.status}</div>
              </span>
              <span>
                <div>{user.location.country}</div>
                <div>{user.location.city}</div>
              </span>
            </span>
          </div>
        );
      })}
    </div>
  );
};
