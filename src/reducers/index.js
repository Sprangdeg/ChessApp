import { combineReducers } from "redux"
import chessReducer from "./chessReducer"
import optimist from 'redux-optimist';

export default optimist(combineReducers({
    chess: chessReducer
}));