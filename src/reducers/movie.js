import { RECEIVE_API_MOVIE,SEARCH_MOVIE } from "../actions/movie";

export default function movie (state={},action) {
    switch(action.type) {
        case RECEIVE_API_MOVIE :
            return {
                ...state,
                movie : action.movie
            }
        case SEARCH_MOVIE :
            return { 
                ...state,
                onSearchMovie : action.movie
            }
            default : 
            return state
    }
}

