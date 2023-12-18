import React, { useEffect, useState } from "react";
import { Avatar, Button, List, Skeleton } from "antd";
import { useSelector } from "react-redux";
const count = 3;
const fakeDataUrl = `https://randomuser.me/api/?results=${count}&inc=name,gender,email,nat,picture&noinfo`;
const SearchResult = () => {
  const [initLoading, setInitLoading] = useState(true);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [list, setList] = useState([]);

  const resultSearch = useSelector((state) => state.search);

  useEffect(() => {
    fetch(fakeDataUrl)
      .then((res) => res.json())
      .then((res) => {
        setInitLoading(false);
        setData(res.results);
        setList(res.results);
      });
  }, []);

  useEffect(() => {
    if (!resultSearch || typeof resultSearch !== "string") {
      setList(data); // Hiển thị toàn bộ dữ liệu nếu resultSearch không phải chuỗi
    } else {
      const filteredData = data.filter((item) => {
        // Kiểm tra xem item.name.last có chứa resultSearch không (không phân biệt hoa thường)
        return item.name.last
          .toLowerCase()
          .includes(resultSearch.toLowerCase());
      });
      setList(filteredData);
    }
  }, [resultSearch, data]);

  return (
    <List
      className="demo-loadmore-list"
      loading={initLoading}
      itemLayout="horizontal"
      dataSource={list}
      renderItem={(item) => (
        <List.Item actions={[<Button type="primary">Edit</Button>]}>
          <Skeleton avatar title={false} loading={item.loading} active>
            <List.Item.Meta
              avatar={<Avatar src={item.picture.large} />}
              title={<a href="">{item.name.last}</a>}
              description="Singer : ${singername}"
            />
            <div>content</div>
          </Skeleton>
        </List.Item>
      )}
    />
  );
};
export default SearchResult;
