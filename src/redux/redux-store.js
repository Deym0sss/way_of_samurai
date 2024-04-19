import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";

import dialogReducer from "./dialog-reducer";
import sidebarReducer from "./sidebar-reducer";
import profileReduser from "./profile-reducer";
import usersReducer from "./users-reducer";

let reducers = combineReducers({
  profilePage: profileReduser,
  dialogPage: dialogReducer,
  usersPage: usersReducer,
  // sidebar:sidebarReducer
});

const store = configureStore({
  reducer: reducers,
});

export default store;
