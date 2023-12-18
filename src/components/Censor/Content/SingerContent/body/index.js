import React, { useState } from "react";
import { Radio, Tabs } from "antd";
import ListAllSingers from "../list/ListAllSinger";
import ListPendingSingers from "../list/ListPendingSinger";

export const TabSinger = () => {
  const [size, setSize] = useState("small");
  const tabs = [
    { name: "All Singers", id: 1, element: <ListAllSingers /> },
    { name: "Pending Singers", id: 2, element: <ListPendingSingers /> },
  ];
  const onChange = (e) => {
    setSize(e.target.value);
  };
  return (
    <div>
      <Tabs
        defaultActiveKey="1"
        type="card"
        size={size}
        items={tabs.map((item) => {
          return {
            label: item.name,
            key: item.id,
            children: item.element,
          };
        })}
      />
    </div>
  );
};
