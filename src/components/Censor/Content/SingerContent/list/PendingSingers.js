import React, { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { Avatar, Divider, List, Skeleton, Switch } from "antd";
const PendingSingers = (props) => {
  const count = 30;
  const fakeDataUrl = `https://randomuser.me/api/?results=${count}&inc=name,gender,email,nat,picture&noinfo`;

  const [data, setData] = useState([]);
  const [search, setSearch] = useState(props.search);
  const [list, setList] = useState([]);

  useEffect(() => {
    fetch(fakeDataUrl)
      .then((res) => res.json())
      .then((res) => {
        setData(res.results);
        setList(res.results);
      });
  }, []);

  console.log("data: ", data, "search: ", search);
  useEffect(() => {
    if (props.search) {
      // Lọc danh sách theo từ khóa tìm kiếm
      const filteredList = data.filter((item) =>
        item.name.last.toLowerCase().includes(props.search.toLowerCase())
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
              avatar={<Avatar src={item.picture.large} />}
              title={<a href="https://ant.design">{item.name.last}</a>}
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
