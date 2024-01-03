import { SearchOutlined } from "@ant-design/icons";
import React, { useEffect, useRef, useState } from "react";
import Highlighter from "react-highlight-words";
import { Button, Input, Modal, Space, Table } from "antd";
import {
  getAllActiveSinger,
  getAllSinger,
} from "../../../../../services/api/singer";

const ListAllSingers = () => {
  const [searchText, setSearchText] = useState("");
  const [searchedColumn, setSearchedColumn] = useState("");
  const searchInput = useRef(null);
  const [searchedData, setSearchedData] = useState([]); // State mới để lưu trữ dữ liệu tìm kiếm

  const [selectedRow, setSelectedRow] = useState(null); // State để lưu thông tin hàng được chọn
  const [modalVisible, setModalVisible] = useState(false); // State để kiểm soát việc hiển thị modal

  const [data, setData] = useState(false);

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
      title: "Singer name",
      dataIndex: "name",
      key: "name",
      width: "30%",
      ...getColumnSearchProps("name"),
    },

    {
      title: "Action",
      key: "action",
      render: (text, record) => (
        <a onClick={() => openDetailSong(record)}>Detail</a>
      ),
    },
  ];

  useEffect(() => {
    (async () => {
      const datasourceget = await getAllActiveSinger();
      console.log("check datasrc>>>", datasourceget);
      setData(datasourceget.content);
    })();
  }, []);

  return (
    <>
      {data === false ? (
        <>Loading....</>
      ) : data.length === 0 ? (
        <>No singer found</>
      ) : (
        <>
          <Table
            columns={columns}
            dataSource={data.map((item) => {
              return {
                key: item.id,
                name: item.name,
                status: item.email,
              };
            })}
          />
          <Modal
            visible={modalVisible}
            onCancel={handleModalClose}
            footer={null}
            title="Song Details"
          >
            {selectedRow && (
              <div>
                <p>Singer Name: {selectedRow.name}</p>
              </div>
            )}
          </Modal>
        </>
      )}
    </>
  );
};
export default ListAllSingers;
