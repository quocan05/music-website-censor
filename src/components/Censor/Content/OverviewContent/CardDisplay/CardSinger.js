import React from "react";
import { Card } from "antd";
const { Meta } = Card;
const CardSinger = () => (
  <Card
    hoverable
    style={{
      width: 160,
    }}
    cover={
      <img
        alt="img-singer"
        src="https://upload.wikimedia.org/wikipedia/commons/e/ee/Xxxtentacion_%28cropped%29.jpg"
      />
    }
  >
    <Meta title="Name playlist" description="Singer: ${name}" />
  </Card>
);
export default CardSinger;
