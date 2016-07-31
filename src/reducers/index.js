import { combineReducers } from 'redux'
import modal from './modal'
import budget from './budget'

export default combineReducers({
	modal: modal,
	budget: budget
})
