import { combineReducers } from "redux"
import chessReducer from "./chessReducer"

export default combineReducers({
    chess: chessReducer
})