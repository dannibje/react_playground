import {combineReducers} from "redux";
import coursesReducer from "./courseReducer";

const rootReducer = combineReducers({
    coursesReducer: coursesReducer
});

export default rootReducer;