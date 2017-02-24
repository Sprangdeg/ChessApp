import { applyMiddleware, createStore } from "redux"
import reducer from "./reducers"

const logger = (store) => (next) => (action) => {
    console.log("action fired ", action);
    return next(action);
}

const error = (store) => (next) => (action) => {
    try{
        next(action);
    }
    catch(e){
    console.log(e);
    }
}

const middleware = applyMiddleware(logger, error);
const store = createStore(reducer, middleware);

export default store;


//store.subscribe(() => {console.log("store changed ", store.getState())});

//store.dispatch({type: "INC", payload: 1});