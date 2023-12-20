import { Button, Card, Modal } from "antd";
import Search from "antd/es/input/Search";
import ListSongOfPlaylist from "./ListSongOfPlaylist";
import ModalSearch from "./ModalSearch";
import { useDispatch } from "react-redux";
import { openModalSearch } from "../../../../../redux/actions/search";

export const DetailPlaylist = () => {
  const dispatch = useDispatch();
  const showModalSearch = () => {
    dispatch(openModalSearch());
  };

  return (
    <>
      <Card
        title="Detail playlist ${nameplaylist}"
        extra={
          <div style={{ display: "flex", flexDirection: "row", gap: 20 }}>
            <Search placeholder="search something" />
            <Button type="primary" onClick={showModalSearch}>
              Add new song
            </Button>
          </div>
        }
      >
        <ListSongOfPlaylist />
      </Card>

      <ModalSearch />
    </>
  );
};
