import { SearchOutlined } from "@ant-design/icons";
import React, { useRef, useState } from "react";
import Highlighter from "react-highlight-words";
import { Button, Input, Modal, Space, Table } from "antd";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";

const data = [
  {
    key: "1",
    name: "Song 2",
    singer: "Singer 1",
    status: "public",
    category: "edm",
    playlist: "Playlist 1",
  },
  {
    key: "2",
    name: "Song 22",
    singer: "Singer 11",
    status: "private",
    category: "edm",
    playlist: "Playlist oasjd",
  },
  {
    key: "3",
    name: "Song 3",
    singer: "Singer 1",
    status: "private",
    category: "edm",
    playlist: "Playlist 1",
  },
  {
    key: "4",
    name: "Song 122",
    singer: "Singer 1",
    status: "public",
    category: "jazz",
    playlist: "Playlist 1",
  },
  {
    key: "5",
    name: "Song 1",
    singer: "Singer 1",
    status: "public",
    category: "edm",
    playlist: "Playlist 1",
  },
];
const ListAllSongs = () => {
  const [searchText, setSearchText] = useState("");
  const [searchedColumn, setSearchedColumn] = useState("");
  const searchInput = useRef(null);
  const [searchedData, setSearchedData] = useState([]); // State mới để lưu trữ dữ liệu tìm kiếm

  const [selectedRow, setSelectedRow] = useState(null); // State để lưu thông tin hàng được chọn
  const [modalVisible, setModalVisible] = useState(false); // State để kiểm soát việc hiển thị modal

  const openDetailSong = (record) => {
    setSelectedRow(record); // Lưu thông tin hàng được chọn vào state
    setModalVisible(true); // Hiển thị modal
  };

  const handleModalClose = () => {
    setModalVisible(false); // Đóng modal
  };

  const handleSearch = (selectedKeys, confirm, dataIndex) => {
    confirm();
    setSearchText(selectedKeys[0] || "");
    setSearchedColumn(dataIndex);

    if (!selectedKeys || selectedKeys.length === 0) {
      setSearchedData(data);
      return;
    }

    // Tìm kiếm dữ liệu và cập nhật vào state mới
    const newData = data.filter(
      (item) =>
        item[dataIndex] &&
        item[dataIndex]
          .toString()
          .toLowerCase()
          .includes(selectedKeys[0].toLowerCase())
    );
    setSearchedData(newData);
  };
  const handleReset = (clearFilters) => {
    clearFilters();
    setSearchText("");
  };
  const getColumnSearchProps = (dataIndex) => ({
    filterDropdown: ({
      setSelectedKeys,
      selectedKeys,
      confirm,
      clearFilters,
      close,
    }) => (
      <div
        style={{
          padding: 8,
        }}
        onKeyDown={(e) => e.stopPropagation()}
      >
        <Input
          ref={searchInput}
          placeholder={`Search ${dataIndex}`}
          value={selectedKeys[0]}
          onChange={(e) =>
            setSelectedKeys(e.target.value ? [e.target.value] : [])
          }
          onPressEnter={() => handleSearch(selectedKeys, confirm, dataIndex)}
          style={{
            marginBottom: 8,
            display: "block",
          }}
        />
        <Space>
          <Button
            type="primary"
            onClick={() => handleSearch(selectedKeys, confirm, dataIndex)}
            icon={<SearchOutlined />}
            size="small"
            style={{
              width: 90,
            }}
          >
            Search
          </Button>
          <Button
            onClick={() => clearFilters && handleReset(clearFilters)}
            size="small"
            style={{
              width: 90,
            }}
          >
            Reset
          </Button>
          <Button
            type="link"
            size="small"
            onClick={() => {
              confirm({
                closeDropdown: false,
              });
              setSearchText(selectedKeys[0]);
              setSearchedColumn(dataIndex);
            }}
          >
            Filter
          </Button>
          <Button
            type="link"
            size="small"
            onClick={() => {
              close();
            }}
          >
            close
          </Button>
        </Space>
      </div>
    ),
    filterIcon: (filtered) => (
      <SearchOutlined
        style={{
          color: filtered ? "#1677ff" : undefined,
        }}
      />
    ),
    onFilter: (value, record) =>
      record[dataIndex].toString().toLowerCase().includes(value.toLowerCase()),
    onFilterDropdownOpenChange: (visible) => {
      if (visible) {
        setTimeout(() => searchInput.current?.select(), 100);
      }
    },
    render: (text) =>
      searchedColumn === dataIndex ? (
        <Highlighter
          highlightStyle={{
            backgroundColor: "#ffc069",
            padding: 0,
          }}
          searchWords={[searchText]}
          autoEscape
          textToHighlight={text ? text.toString() : ""}
        />
      ) : (
        text
      ),
  });
  const columns = [
    {
      title: "Song name",
      dataIndex: "name",
      key: "name",
      width: "30%",
      ...getColumnSearchProps("name"),
    },
    {
      title: "Singer",
      dataIndex: "singer",
      key: "singer",
      width: "20%",
      ...getColumnSearchProps("singer"),
    },
    {
      title: "Category",
      dataIndex: "category",
      key: "category",
      width: "20%",
      ...getColumnSearchProps("category"),
    },
    {
      title: "Playlist name",
      dataIndex: "playlist",
      key: "playlist",
      width: "20%",
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      width: "20%",
      //...getColumnSearchProps("status"),
      //   sorter: (a, b) => a.status.length - b.status.length,
      //   sortDirections: ["descend", "ascend"],
    },
    {
      title: "Action",
      key: "action",
      render: (text, record) => (
        <a onClick={() => openDetailSong(record)}>Detail</a>
      ),
    },
  ];
  return (
    <>
      <Table columns={columns} dataSource={data} />
      <Modal
        open={modalVisible}
        onCancel={handleModalClose}
        footer={null}
        title="Song Details"
        width={720}
      >
        {selectedRow && (
          <>
            <p>Song Name: {selectedRow.name}</p>
            <p>Singer: {selectedRow.singer}</p>
            <AudioPlayer
              autoPlay
              src="http://example.com/audio.mp3"
              onPlay={(e) => console.log("onPlay")}
              // other props here
            />
          </>
        )}
      </Modal>
    </>
  );
};
export default ListAllSongs;
