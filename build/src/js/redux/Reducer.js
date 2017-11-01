'use strict';
import { combineReducers } from "redux"
//import other reducer actions here

//we will have multiple actions in redux and would like to combine them using combineReducers.
const defaultState = {
  logged_in: false
}
const authentication = (state = [], action) => {
  switch (action.type) {
    case 'LOGIN':
      return {
        ...state,
          username: action.username,
          usertype: action.type,
          logged_in: true
        
      }
    case 'LOGOUT':
    return {
      ...state,
        logged_in: false
      
    }
    default:
      return defaultState
  }
}

const rootReducer = combineReducers({
  authentication,
})

export default rootReducer