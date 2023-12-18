import Search from "antd/es/input/Search";
import SearchResult from "./result";
import { useDispatch } from "react-redux";
import { searchAction } from "../../../../../redux/actions/search";
import DrawerEditSong from "../drawer/EditDrawer";

export const EditSong = () => {
  const dispatch = useDispatch();

  return (
    <>
      <h3>Enter name of song to edit</h3>
      <SearchResult />
      <DrawerEditSong />
    </>
  );
};
