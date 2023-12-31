import Search from "antd/es/input/Search";
import { useDispatch } from "react-redux";
import { searchAction } from "../../../../../redux/actions/search";
import DrawerEditSong from "../drawer/EditDrawer";
import { Divider } from "antd";
import SearchResultPending from "../pending/result";

const ListPendingSong = () => {
  const dispatch = useDispatch();
  const onSearch = (value, _e, info) => {
    dispatch(searchAction(value));
  };
  return (
    <>
      <h3>Enter name of song</h3>
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
export default ListPendingSong;
