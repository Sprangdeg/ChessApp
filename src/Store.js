import { applyMiddleware, combineReducers, createStore } from "redux"
import reducer from "./reducers"

const logger = (store) => (next) => (action) => {
    console.log("action fired ", action);
}



const error = (store) => (next) => (action) => {
    try{
        next(action);
    }
    catch(e){
    console.log(e);
    }
}

const store = createStore(reducer, middleware);

const middleware = applyMiddleware(logger);

export default store;


//store.subscribe(() => {console.log("store changed ", store.getState())});

//store.dispatch({type: "INC", payload: 1});