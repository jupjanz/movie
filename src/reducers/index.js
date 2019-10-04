import { combineReducers } from 'redux';
import counter from './counter'
import users from './users'
import movie from './movie'

const reducer = combineReducers({
    counter,
    users,
    movie
})

export default reducer