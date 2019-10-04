import { put, call, takeLatest, } from 'redux-saga/effects'
import axios from 'axios'
import { receiveApiData, REQUEST_API_DATA } from '../actions/users'

async function getDatauser() {
    try {
        const result = await axios.get("https://jsonplaceholder.typicode.com/users")
        return result.data
    } catch (e) {
        console.log(e)
    }
}


function* addDataUser() {
    try {
        const data = yield call(getDatauser)
        yield put(receiveApiData(data))
    } catch (e) {
        console.log(e)
    }
}

export default function* rootSagas() {
    yield takeLatest(REQUEST_API_DATA, addDataUser)
}