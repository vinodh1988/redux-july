import { combineReducers } from "redux";
import { firstReducer, secondReducer } from "./reducers";


export const appstate=combineReducers({
    first: firstReducer,
    second: secondReducer
})