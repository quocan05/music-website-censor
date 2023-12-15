import React from "react";
import { Card, Popover } from "antd";
import { NameGenre } from "./namegenre";
const { Meta } = Card;
const CardGenre = () => (
  <Popover title="Click to see all">
    <Card
      hoverable
      style={{
        width: 180,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "orange",
      }}
    >
      <NameGenre />
    </Card>
  </Popover>
);
export default CardGenre;
