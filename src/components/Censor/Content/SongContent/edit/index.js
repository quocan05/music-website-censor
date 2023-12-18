import Search from "antd/es/input/Search";
import SearchResult from "./result";
import { useDispatch } from "react-redux";
import { searchAction } from "../../../../../redux/actions/search";

export const EditSong = () => {
  const dispatch = useDispatch();
  const onSearch = (value, _e, info) => {
    // console.log("Check search >>>>", value);

    dispatch(searchAction(value));
  };

  return (
    <>
      <h3>Enter name of song to edit</h3>
      <Search
        placeholder="name of song"
        allowClear
        enterButton="Search"
        size="large"
        onSearch={onSearch}
      />
      <SearchResult />
    </>
  );
};
