import React from "react";
import { Avatar, List } from "antd";
const data = [
  {
    title: "Singer 1",
  },
  {
    title: "Singer 2",
  },
  {
    title: "Singer 3",
  },
  {
    title: "Singer 4",
  },
];
const TopSinger = () => (
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
          description="total songs : ${number}"
        />
      </List.Item>
    )}
  />
);
export default TopSinger;
