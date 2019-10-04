import axios from 'axios'
import { put, call, takeLatest,select } from 'redux-saga/effects'
import {onSearchMovie } from './selector/index'
import {REQUEST_API_MOVIE,receiveApiMovie} from '../actions/movie'

async function getDataApiMovie(movie) {
    const API_KEY = "db0d3199c380efdcc5e86fafe0b1c2f6"
    try {
        const result = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=${movie}&page=1`)
        return result.data
    } catch (e) {
        console.log(e)
    }  
}

function* addMovie() {
        try{
            const movies = yield select(onSearchMovie)
            const data = yield call(getDataApiMovie,movies)
            console.log(data)
            yield put(receiveApiMovie(data))
        } catch (e) {
            console.log(e)
        }
}

export default function* getMovie() {
    yield takeLatest(REQUEST_API_MOVIE,addMovie)
}
