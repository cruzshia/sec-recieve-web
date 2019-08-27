import { combineReducers } from 'redux'
import AppReducer, { appDefaultReducer } from './app/reducer'

export const initState = {
  app: appDefaultReducer
}

export default combineReducers({
  app: AppReducer
})
