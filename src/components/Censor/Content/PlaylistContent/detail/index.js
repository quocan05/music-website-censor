import { Button, Card, Modal, Popconfirm, Switch, message } from "antd";
import Search from "antd/es/input/Search";
import ModalSearch from "./ModalSearch";
import { useDispatch } from "react-redux";
import { openModalSearch } from "../../../../../redux/actions/search";
import SongOfPlaylist from "./SongOfPlaylist";

export const DetailPlaylist = () => {
  const dispatch = useDispatch();
  const showModalSearch = () => {
    dispatch(openModalSearch());
  };

  const confirm = (e) => {
    console.log(e);
  };
  const cancel = (e) => {
    console.log(e);
  };

  return (
    <>
      <Card
        title="Detail playlist ${nameplaylist}"
        extra={
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              gap: 10,
              alignItems: "center",
            }}
          >
            <Switch
              checkedChildren="public"
              unCheckedChildren="private"
              style={{ width: "140px" }}
            />
            <Search placeholder="search something" />
            <Button type="primary" onClick={showModalSearch}>
              Add new song
            </Button>

            <Popconfirm
              title="Delete playlist"
              description="Are you sure to delete this playlist?"
              onConfirm={confirm}
              onCancel={cancel}
              okText="Yes"
              cancelText="No"
            >
              <Button danger>Delete this playlist</Button>
            </Popconfirm>
          </div>
        }
      >
        <SongOfPlaylist />
      </Card>

      <ModalSearch />
    </>
  );
};
