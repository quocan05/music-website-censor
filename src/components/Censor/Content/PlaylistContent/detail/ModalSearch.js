import React, { useState } from "react";
import { Button, Divider, Modal, Space } from "antd";
import { useDispatch, useSelector } from "react-redux";
import {
  closeModalSearch,
  searchAction,
} from "../../../../../redux/actions/search";
import Search from "antd/es/input/Search";
import SearchResultSong from "./SearchResultSong";
const ModalSearch = () => {
  const open = useSelector((state) => state.openModal.open);
  const dispatch = useDispatch();
  const handleOk = () => {};
  const handleCancel = () => {
    dispatch(closeModalSearch());
  };

  const onSearch = (value, _e, info) => {
    dispatch(searchAction(value));
  };

  return (
    <>
      <Modal
        open={open}
        title="Add new song to playlist"
        onOk={handleOk}
        onCancel={handleCancel}
        footer={(_, { OkBtn, CancelBtn }) => (
          <>
            <CancelBtn />
            <OkBtn />
          </>
        )}
      >
        <Search placeholder="enter name song" onSearch={onSearch} enterButton />
        <Divider>Result</Divider>
        <SearchResultSong />
      </Modal>
    </>
  );
};
export default ModalSearch;
