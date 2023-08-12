import {combineReducers,legacy_createStore as createStore} from 'redux'
import {configureStore} from '@reduxjs/toolkit'

import dialogReducer from './dialog-reducer'
import sidebarReducer from './sidebar-reducer'
import profileReduser from './profile-reducer'

let reducers = combineReducers({
  profilePage:profileReduser,
  dialogPage:dialogReducer,
  // sidebar:sidebarReducer
})

const store = configureStore({
reducer: reducers
})

export default store