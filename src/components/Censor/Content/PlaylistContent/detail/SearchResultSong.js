import React, { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { Avatar, Button, Divider, List, Skeleton } from "antd";
import { useSelector } from "react-redux";
import { getAllSong } from "../../../../../services/api/song";
const SearchResultSong = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [list, setList] = useState([]);
  const resultSearch = useSelector((state) => state.search.input);
  //console.log("SEarch input: >>>", resultSearch);
  // const loadMoreData = () => {
  //   if (loading) {
  //     return;
  //   }
  //   setLoading(true);
  //   fetch(
  //     "https://randomuser.me/api/?results=10&inc=name,gender,email,nat,picture&noinfo"
  //   )
  //     .then((res) => res.json())
  //     .then((body) => {
  //       setData([...data, ...body.results]);
  //       setList([...data, ...body.results]);
  //       setLoading(false);
  //     })
  //     .catch(() => {
  //       setLoading(false);
  //     });
  // };
  useEffect(() => {
    (async () => {
      const datasrc = await getAllSong();
      setData(datasrc.content);
    })();
  }, []);

  useEffect(() => {
    // Lọc dữ liệu từ 'data' dựa trên 'resultSearch' và cập nhật 'list'
    const filteredData = data.filter((item) =>
      item.name.toLowerCase().includes(resultSearch.toLowerCase())
    );
    setList(filteredData);
  }, [resultSearch, data]);

  const handleAddToPlaylist = () => {};

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
        //next={loadMoreData}
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
                title={<a href="">{item.name}</a>}
                description="singer: ${singername}, category: ${category}"
              />
              <Button type="primary" onClick={handleAddToPlaylist}>
                Add
              </Button>
            </List.Item>
          )}
        />
      </InfiniteScroll>
    </div>
  );
};
export default SearchResultSong;
