import React from "react";
import { Card } from "antd";
const { Meta } = Card;
const CardMostListen = () => (
  <Card
    hoverable
    style={{
      width: 160,
    }}
    cover={
      <img
        alt="img-playlist"
        src="https://developer.spotify.com/images/guidelines/design/icon3@2x.png"
      />
    }
  >
    <Meta title="${Name Playlist}" />
  </Card>
);
export default CardMostListen;
