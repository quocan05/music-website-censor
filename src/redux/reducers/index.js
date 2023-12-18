import { combineReducers } from "redux";
import { SearchReducer } from "./search";
import { DrawerReducer } from "./drawer";

export const allReducers = combineReducers({
  search: SearchReducer,
  openDrawerEditSong: DrawerReducer,
});
