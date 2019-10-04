import {INCREMENT,DECREMENT} from '../actions/counter'


const initialState = {
    point: 0,
}

export default function counter(state = initialState, action) {
    switch (action.type) {
        case INCREMENT:
            return {
                ...state,
                point: action.payload
            }
        case DECREMENT:
            return {
                ...state,
                point: action.payload
            }
        default:
            return state
    }
}
