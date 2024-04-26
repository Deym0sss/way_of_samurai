import React from "react";
import styles from "./Users.module.css";
import axios from "axios";
import userDefault from "../../assets/images/image.png";

export class Users extends React.Component {
  componentDidMount() {
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`
      )
      .then((response) => {
        this.props.setUsers(response.data.items);
        this.props.setTotalUsersCount(response.data.totalCount);
      });
  }
  onSelectPage = (page) => {
    this.props.setCurrentPage(page);
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.pageSize}`
      )
      .then((response) => {
        this.props.setUsers(response.data.items);
      });
  };

  render() {
    let pagesCount = Math.ceil(this.props.totalCount / this.props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
      pages.push(i);
    }

    return (
      <div>
        <div>
          {pages.map((page) => {
            return (
              <span
                key={page}
                onClick={() => {
                  this.onSelectPage(page);
                }}
                className={
                  this.props.currentPage === page ? styles.selectedPage : null
                }
              >
                {page}
              </span>
            );
          })}
        </div>
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
