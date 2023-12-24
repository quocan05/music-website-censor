import { Outlet } from "react-router-dom";
import ListMain from "./main/ListMain";
import { Button } from "antd";
import { useDispatch } from "react-redux";
import { openModalAddNewPlaylist } from "../../../../redux/actions/modal";
import ModalAddNewPlaylist from "./main/ModalAddNewPlayList";

export const ManagePlaylists = () => {
  const dispatch = useDispatch();
  const handleOpenDrawerAddNewPlaylist = () => {
    dispatch(openModalAddNewPlaylist());
    console.log(">>>>", openModalAddNewPlaylist);
  };

  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <h1>Manage Playlist</h1>
        <Button type="primary" onClick={handleOpenDrawerAddNewPlaylist}>
          Add new playlist
        </Button>
      </div>
      <ListMain />
      <ModalAddNewPlaylist />
    </>
  );
};
