import { combineReducers } from 'redux'

import users from './users'

const appReducer = combineReducers({
	users
})

const rootReducer = (state, action) => {
	if(action.type === 'LOGOUT') {
		state = null
	}

	return appReducer(state, action)
}

export default rootReducer