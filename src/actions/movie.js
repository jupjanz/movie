export const REQUEST_API_MOVIE = "REQUEST_API_MOVIE"
export const RECEIVE_API_MOVIE = "RECIEVE_API_MOVIE"
export const SEARCH_MOVIE = "SEACH_MOVIE"

export const requestApiMovie = () => {
    return {
        type : REQUEST_API_MOVIE,
    }
}

export const receiveApiMovie = (movie) => {
    return {
        type : RECEIVE_API_MOVIE,
        movie
    }
}
 
export const searchMovie = (movie) => {
    return {
        type : SEARCH_MOVIE,
        movie
    }
}