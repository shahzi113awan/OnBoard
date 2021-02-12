import { combineReducers } from "redux";
import {completedReducer} from "./completedReducer";
import {kybReducer} from './kybReducer';

export default combineReducers({
  completedReducer,
  kybReducer
});
