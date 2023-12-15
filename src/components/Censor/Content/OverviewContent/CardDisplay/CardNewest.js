import React from "react";
import { Card } from "antd";
const { Meta } = Card;
const CardNewest = () => (
  <Card
    hoverable
    style={{
      width: 160,
    }}
    cover={
      <img
        alt="img-song"
        src="https://icons.iconarchive.com/icons/danleech/simple/256/soundcloud-icon.png"
      />
    }
  >
    <Meta title="New song" description="Singer: ${name}" />
  </Card>
);
export default CardNewest;
