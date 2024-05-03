import React from "react";
import styles from "./Users.module.css";
import userDefault from "../../assets/images/image.png";
import { NavLink } from "react-router-dom";
import { followAPI } from "../../api/api";

export const Users = (props) => {
  let pagesCount = Math.ceil(props.totalCount / props.pageSize);
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
                props.onSelectPage(page);
              }}
              className={
                props.currentPage === page ? styles.selectedPage : null
              }
            >
              {page}
            </span>
          );
        })}
      </div>
      {props.users.map((user) => {
        return (
          <div key={user.id}>
            <span>
              <div>
                <NavLink to={"/profile/" + user.id}>
                  <img
                    src={user.photos.small ? user.photos.small : userDefault}
                    alt="Nothing"
                    className={styles.avatar}
                  />
                </NavLink>
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
                    followAPI.unfollow(user.id).then((data) => {
                      if (data.resultCode === 0) {
                        props.unfollow(user.id);
                      }
                    });
                  }}
                >
                  unfollow
                </button>
              ) : (
                <button
                  onClick={() => {
                    followAPI.follow(user.id).then((data) => {
                      if (data.resultCode === 0) {
                        props.follow(user.id);
                      }
                    });
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
};
