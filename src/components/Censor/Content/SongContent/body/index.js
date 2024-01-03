import React, { useState } from "react";
import { Radio, Tabs } from "antd";
import ListAllSongs from "../list/ListAllSongs";
import ListPendingSong from "../list/ListPendingSong";
import { EditSong } from "../edit";
import DrawerEditSong from "../drawer/EditDrawer";
const TabSongs = () => {
  const [size, setSize] = useState("small");
  const [activeTab, setActiveTab] = useState(1);
  const tabs = [
    { name: "All songs", id: "1", element: <ListAllSongs /> },
    { name: "Pending songs", id: "2", element: <ListPendingSong /> },
    { name: "Edit song", id: "3", element: <EditSong /> },
  ];
  const onChange = (key) => {
    setActiveTab(key);
    console.log("active tab now: ", key);
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
export default TabSongs;
