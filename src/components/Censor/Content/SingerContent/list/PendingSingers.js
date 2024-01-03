import React, { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { Avatar, Divider, List, Skeleton, Switch } from "antd";
import { getAllUnActiveSinger } from "../../../../../services/api/singer";
const PendingSingers = (props) => {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState(props.search);
  const [list, setList] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const datasrc = await getAllUnActiveSinger();
      setData(datasrc.content);
    };
    fetchData();
  }, []);

  console.log("data: ", data, "search: ", search);
  useEffect(() => {
    if (props.search) {
      // Lọc danh sách theo từ khóa tìm kiếm
      const filteredList = data.filter((item) =>
        item.name.toLowerCase().includes(props.search.toLowerCase())
      );
      setList(filteredList); // Cập nhật danh sách hiển thị
    } else {
      // Nếu từ khóa tìm kiếm không tồn tại, hiển thị danh sách ban đầu
      setList(data);
    }
  }, [props.search, data]);

  return (
    <div
      id="scrollableDiv"
      style={{
        height: 400,
        overflow: "auto",
        padding: "0 16px",
        border: "1px solid rgba(140, 140, 140, 0.35)",
      }}
    >
      <List
        dataSource={list}
        renderItem={(item) => (
          <List.Item key={item.email}>
            <List.Item.Meta
              avatar={
                <Avatar
                  src={
                    "https://cdn.icon-icons.com/icons2/1465/PNG/512/166mansinger2_100662.png"
                  }
                />
              }
              title={<a>{item.bio}</a>}
              description={item.email}
            />
            <Switch checkedChildren={"Active"} unCheckedChildren={"Unactive"} />
          </List.Item>
        )}
      />
    </div>
  );
};
export default PendingSingers;
