import { combineReducers } from "redux";
import { SearchReducer } from "./search";

export const allReducers = combineReducers({
  search: SearchReducer,
});
