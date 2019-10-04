import { RECEIVE_API_DATA } from "../actions/users";

const initialState = {
    user: []
}

export default function users(state = initialState, action) {
    switch (action.type) {
        case RECEIVE_API_DATA:
            return {
                ...state,
                user: action.data
            }
        default:
            return state
    }
}