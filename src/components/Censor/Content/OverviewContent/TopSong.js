import React from "react";
import { Avatar, List } from "antd";
const data = [
  {
    title: "Song 1",
  },
  {
    title: "Song 2",
  },
  {
    title: "Song 3",
  },
  {
    title: "Song 4",
  },
];
const TopSong = () => (
  <List
    itemLayout="horizontal"
    dataSource={data}
    renderItem={(item, index) => (
      <List.Item>
        <List.Item.Meta
          avatar={
            <Avatar
              src={`https://xsgames.co/randomusers/avatar.php?g=pixel&key=${index}`}
            />
          }
          title={<a href="https://ant.design">{item.title}</a>}
          description="singer: ${name}"
        />
      </List.Item>
    )}
  />
);
export default TopSong;
