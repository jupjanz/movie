import { createStore, applyMiddleware } from 'redux'
import reducer from './reducers/index'
import thunk from 'redux-thunk'
import createSagaMiddleware from 'redux-saga'
import rootSagas from './sagas/sagas'
import getMovie from './sagas/movie'
// import {composeWithDevTools} from 'redux-devtools-extension'

const sagaMiddleware = createSagaMiddleware()
const store = createStore(
    reducer,
    applyMiddleware(thunk, sagaMiddleware)
    )
    const sagaRoot = [getMovie,rootSagas]
    
sagaMiddleware.run(...sagaRoot)


export default store