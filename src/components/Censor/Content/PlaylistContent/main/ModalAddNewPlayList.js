import React, { useState } from "react";
import { Button, Modal } from "antd";
import FormAddPlaylist from "./FormAddPlaylist";
import { useDispatch, useSelector } from "react-redux";
import { closeModalAddNewPlaylist } from "../../../../../redux/actions/modal";
const ModalAddNewPlaylist = () => {
  const open = useSelector((state) => state.openModal.open);
  console.log("xxxx", open);
  const dispatch = useDispatch();
  const handleOk = () => {};
  const handleCancel = () => {
    dispatch(closeModalAddNewPlaylist());
  };
  return (
    <>
      <Modal
        title="Add new Playlist"
        open={open}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <FormAddPlaylist />
      </Modal>
    </>
  );
};
export default ModalAddNewPlaylist;
