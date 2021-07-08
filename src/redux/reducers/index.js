import {combineReducers} from 'redux'
import numList from './numList'
import todos from './todos'

export default combineReducers({
    todos,
    numList
  })
  