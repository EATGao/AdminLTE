import { legacy_createStore, combineReducers, applyMiddleware } from "redux";
import reduxThunk from "redux-thunk"
import handleNum from './NumStatus/reducer'
import handleArr from './ArrStatus/reducer'

const reducers = combineReducers({
    handleNum,
    handleArr
})


const store = legacy_createStore(reducers, applyMiddleware(reduxThunk));


export default store