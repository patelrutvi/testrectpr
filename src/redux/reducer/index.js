import { combineReducers } from "redux";
import { courseReducer } from "./course.reducer";

 

 export const rooreducer = combineReducers ({
    course : courseReducer
 })