import axios from "axios";
const instance = axios.create({
  withCredentials: true,
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
  headers: {
    "API-KEY": "2a817afb-6853-4ed2-a4c9-c5afb82d2e7c",
  },
});
export const userAPI = {
  getUser(currentPage = 1, pageSize = 100) {
    return instance
      .get(`users?page=${currentPage}&count=${pageSize}`)
      .then((response) => {
        return response.data;
      });
  },
};
export const authAPI = {
  getAuth() {
    return instance.get(`auth/me`).then((response) => {
      return response.data;
    });
  },
};

export const followAPI = {
  follow(userId) {
    return instance.post(`follow/${userId}`).then((response) => {
      return response.data;
    });
  },
  unfollow(userId) {
    return instance.delete(`follow/${userId}`).then((response) => {
      return response.data;
    });
  },
};

export const profileAPI = {
  getProfile(userId) {
    return instance.get(`profile/${userId}`).then((response) => {
      return response.data;
    });
  },
};
