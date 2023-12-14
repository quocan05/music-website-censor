import React, { useState } from "react";
import { Avatar, List, Radio, Space } from "antd";
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

const App = () => {
  return (
    <>
      <List
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
              description="Ant Design, a design language for background applications, is refined by Ant UED Team"
            />
          </List.Item>
        )}
      />
    </>
  );
};
export default App;
