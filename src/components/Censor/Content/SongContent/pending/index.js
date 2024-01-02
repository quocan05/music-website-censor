import Search from "antd/es/input/Search";
import SearchResult from "./result";
import { useDispatch } from "react-redux";
import { searchAction } from "../../../../../redux/actions/search";
import DrawerEditSong from "../drawer/EditDrawer";
import { Divider } from "antd";
import SearchResultPending from "./result";

export const PendingSong = () => {
  const dispatch = useDispatch();
  const onSearch = (value, _e, info) => {
    dispatch(searchAction(value));
  };
  return (
    <>
      <h3>Enter name of song </h3>
      <Search
        placeholder="enter name song"
        onSearch={onSearch}
        size="large"
        enterButton
      />
      <Divider>Result</Divider>
      <SearchResultPending />
      <DrawerEditSong />
    </>
  );
};
