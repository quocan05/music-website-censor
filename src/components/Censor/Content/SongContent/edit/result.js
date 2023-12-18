import React, { useEffect, useState } from "react";
import { Avatar, Button, List, Skeleton } from "antd";
import { useDispatch, useSelector } from "react-redux";
import Search from "antd/es/input/Search";
import { openEditSongDrawer } from "../../../../../redux/actions/drawer";
import DrawerEditSong from "../drawer/EditDrawer";
const count = 10;
const fakeDataUrl = `https://randomuser.me/api/?results=${count}&inc=name,gender,email,nat,picture&noinfo`;
const SearchResult = () => {
  const [initLoading, setInitLoading] = useState(true);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [list, setList] = useState([]);

  const dispatch = useDispatch();
  useEffect(() => {
    fetch(fakeDataUrl)
      .then((res) => res.json())
      .then((res) => {
        setInitLoading(false);
        setData(res.results);
        setList(res.results);
      });
  }, []);

  const onSearch = (value, _e, info) => {
    console.log("Check search >>>>", value);
    const filteredData = data.filter((item) =>
      item.name?.last.toLowerCase().includes(value.toLowerCase())
    );
    setList(filteredData);
  };

  const onLoadMore = () => {
    setLoading(true);
    setList(
      data.concat(
        [...new Array(count)].map(() => ({
          loading: true,
          name: {},
          picture: {},
        }))
      )
    );
    fetch(fakeDataUrl)
      .then((res) => res.json())
      .then((res) => {
        const newData = data.concat(res.results);
        setData(newData);
        setList(newData);
        setLoading(false);
        // Resetting window's offsetTop so as to display react-virtualized demo underfloor.
        // In real scene, you can using public method of react-virtualized:
        // https://stackoverflow.com/questions/46700726/how-to-use-public-method-updateposition-of-react-virtualized
        window.dispatchEvent(new Event("resize"));
      });
  };
  const loadMore =
    !initLoading && !loading ? (
      <div
        style={{
          textAlign: "center",
          marginTop: 12,
          height: 32,
          lineHeight: "32px",
        }}
      >
        <Button onClick={onLoadMore}>loading more</Button>
      </div>
    ) : null;

  const handleEditSong = (item) => {
    dispatch(openEditSongDrawer(item));
    console.log(openEditSongDrawer);
  };

  return (
    <>
      <Search
        placeholder="name of song"
        allowClear
        enterButton="Search"
        size="large"
        onSearch={onSearch}
      />
      <List
        className="demo-loadmore-list"
        loading={initLoading}
        itemLayout="horizontal"
        dataSource={list}
        loadMore={loadMore}
        renderItem={(item) => (
          <List.Item
            actions={[
              <Button
                type="primary"
                onClick={() => {
                  handleEditSong(item);
                }}
              >
                Edit
              </Button>,
            ]}
          >
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
    </>
  );
};
export default SearchResult;
