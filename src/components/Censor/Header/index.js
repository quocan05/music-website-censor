import { NotificationFilled } from "@ant-design/icons";
import { Avatar, Layout } from "antd";
import React from "react";
import { Button, Dropdown, Flex } from "antd";

const { Header } = Layout;

const items = [
  {
    key: "logout",
    label: "Sign out",
  },
  {
    key: "faq",
    label: "FAQs",
  },
  {
    key: "setting",
    label: "Setting",
  },
];

export const HeaderCensor = () => {
  return (
    <>
      <Header
        style={{
          display: "flex",
          justifyContent: "flex-end",
          alignItems: "center",
          gap: "20px",
        }}
      >
        <div className="dropdown-header">
          <Dropdown.Button
            menu={{
              items,
            }}
          >
            Censor
          </Dropdown.Button>
        </div>
        <NotificationFilled style={{ color: "#f5f5f5", fontSize: "1rem" }} />
      </Header>
    </>
  );
};
