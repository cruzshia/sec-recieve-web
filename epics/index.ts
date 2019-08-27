import AppEpics from './app'
import { combineEpics } from 'redux-observable'

export default combineEpics(...AppEpics)
