import { combineReducers } from "redux";
import { SearchReducer } from "./search";
import { DrawerReducer } from "./drawer";
import { ModalReducer } from "./modal";
import { PlaylistReducer } from "./playlist";

export const allReducers = combineReducers({
  search: SearchReducer,
  openDrawerEditSong: DrawerReducer,
  openModal: ModalReducer,
  openPlaylist: PlaylistReducer,
});
