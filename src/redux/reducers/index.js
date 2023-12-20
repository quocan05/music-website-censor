import { combineReducers } from "redux";
import { SearchReducer } from "./search";
import { DrawerReducer } from "./drawer";
import { ModalReducer } from "./modal";

export const allReducers = combineReducers({
  search: SearchReducer,
  openDrawerEditSong: DrawerReducer,
  openModal: ModalReducer,
});
