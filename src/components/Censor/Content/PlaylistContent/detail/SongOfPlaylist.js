import React, { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { Avatar, Button, Divider, List, Skeleton } from "antd";
import { getAllSongByPlaylist } from "../../../../../services/api/playlist";
import { useSelector } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";
const SongOfPlaylist = ({ data }) => {
  const [loading, setLoading] = useState(false);
  const [datasrc, setDataSrc] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    (async () => {
      console.log("running");
      if (data.id === undefined) navigate("/censor-manage-playlist");
      const list = await getAllSongByPlaylist(data.id);
      console.log("list ", list);
      setDataSrc(list.content);
    })();
  }, []);

  return (
    <div
      id="scrollableDiv"
      style={{
        height: 500,
        overflow: "auto",
        padding: "0 16px",
        border: "1px solid rgba(140, 140, 140, 0.35)",
      }}
    >
      <InfiniteScroll
        dataLength={datasrc.length}
        //next={loadMoreData}
        hasMore={datasrc.length < 0}
        loader={
          <Skeleton
            avatar
            paragraph={{
              rows: 1,
            }}
            active
          />
        }
        endMessage={<Divider plain>It is all, nothing more 🤐</Divider>}
        scrollableTarget="scrollableDiv"
      >
        <List
          dataSource={datasrc}
          renderItem={(item) => (
            <List.Item key={item.id}>
              <List.Item.Meta
                avatar={
                  <Avatar src="https://e1.pngegg.com/pngimages/1001/845/png-clipart-somacro-45-300dpi-social-media-icons-soundcloud-soundcloud-logo.png" />
                }
                title={<a>{item.name}</a>}
                description={""}
              />
              <Button danger>Remove</Button>
            </List.Item>
          )}
        />
      </InfiniteScroll>
    </div>
  );
};
export default SongOfPlaylist;
