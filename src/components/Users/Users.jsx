import React from "react";
import styles from "./Users.module.css";
import axios from "axios";
import userDefault from "../../assets/images/image.png";

export class Users extends React.Component {
  componentDidMount() {
    axios
      .get("https://social-network.samuraijs.com/api/1.0/users")
      .then((response) => {
        this.props.setUsers(response.data.items);
      });
  }
  render() {
    return (
      <div>
        {this.props.users.map((user) => {
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
              </span>
              <div>
                {user.followed ? (
                  <button
                    onClick={() => {
                      this.props.unfollow(user.id);
                    }}
                  >
                    unfollow
                  </button>
                ) : (
                  <button
                    onClick={() => {
                      this.props.follow(user.id);
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
      </div>
    );
  }
}
