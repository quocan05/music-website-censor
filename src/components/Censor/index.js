import React, { useState } from "react";

import { Breadcrumb, Divider, Layout, Menu, Space, theme } from "antd";
import MenuSiderbar from "./Menu";
import { HeaderCensor } from "./Header";
import Link from "antd/es/typography/Link";
import { ContentCensor } from "./Content";

const { Header, Content, Footer, Sider } = Layout;

export const Censor = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <>
      <Layout
        style={{
          minHeight: "100vh",
        }}
      >
        <Sider
          collapsible
          collapsed={collapsed}
          onCollapse={(value) => setCollapsed(value)}
        >
          <Divider
            style={{
              color: "white",
              marginBottom: "1rem",
              marginTop: "1rem",
              fontWeight: "600",
            }}
          >
            Soundtify for Censor
          </Divider>
          <Menu
            theme="dark"
            defaultSelectedKeys={[]}
            mode="inline"
            items={MenuSiderbar}
          />
        </Sider>
        <Layout
          style={{
            background: "#f0f2f5",

            overflow: "auto",
            maxHeight: "100vh",
          }}
        >
          <Header
            style={{
              padding: 0,
              background: colorBgContainer,
            }}
          >
            <HeaderCensor />
          </Header>
          <Content
            style={{
              margin: "0 16px",
            }}
          >
            <Breadcrumb
              style={{
                margin: "16px 0",
              }}
            ></Breadcrumb>
            <ContentCensor />
          </Content>
        </Layout>
      </Layout>
    </>
  );
};
