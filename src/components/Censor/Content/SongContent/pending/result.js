import React, { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { Avatar, Button, Divider, List, Skeleton, Switch } from "antd";
import { useSelector } from "react-redux";
import { CheckOutlined, CloseOutlined } from "@ant-design/icons";
import { getAllPendingSong } from "../../../../../services/api/song";
const SearchResultPending = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [list, setList] = useState([]);
  const resultSearch = useSelector((state) => state.search.input);
  useEffect(() => {
    (async () => {
      const datasrc = await getAllPendingSong();
      setData(datasrc.content);
      console.log("data pending: >>>", datasrc);
    })();
  }, [data]);

  useEffect(() => {
    const filteredData = data.filter((item) =>
      item.name.toLowerCase().includes(resultSearch.toLowerCase())
    );
    setList(filteredData);
  }, [resultSearch]);
  const handleOnChangeSong = () => {};
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
      <InfiniteScroll
        dataLength={data.length}
        hasMore={data.length < 50}
        // loader={
        //   <Skeleton
        //     avatar
        //     paragraph={{
        //       rows: 1,
        //     }}
        //     active
        //   />
        // }
        endMessage={<Divider plain>It is all, nothing more 🤐</Divider>}
        scrollableTarget="scrollableDiv"
      >
        <List
          dataSource={list}
          renderItem={(item) => (
            <List.Item key={item.id}>
              <List.Item.Meta
                avatar={
                  <Avatar
                    src={
                      "https://e1.pngegg.com/pngimages/1001/845/png-clipart-somacro-45-300dpi-social-media-icons-soundcloud-soundcloud-logo.png"
                    }
                  />
                }
                title={<a>{item.name}</a>}
                description={item.email}
              />
              {/* <Switch defaultChecked={item.active} onChange={handleOnChangeSong} /> */}
              <div style={{ display: "flex", flexDirection: "row", gap: 10 }}>
                <Button>Play</Button>
                <Button type="primary">Approve</Button>
                <Button danger>Reject</Button>
              </div>
            </List.Item>
          )}
        />
      </InfiniteScroll>
    </div>
  );
};
export default SearchResultPending;
