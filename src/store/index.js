import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'
import { users, questions, auth } from '../reducers'

export const store = createStore(
                combineReducers({users, questions, user_id: auth}), 
                applyMiddleware(thunk)
            )