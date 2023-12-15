import { Col, Divider, Row } from "antd";
import CardMostListen from "./CardDisplay/CardMostListen";
const style = {
  background: "#0092ff",
  padding: "8px 0",
};

export const TopPlaylist = () => {
  return (
    <>
      <Divider orientation="left">Most Listened Playlist</Divider>
      <Row gutter={16}>
        <Col className="gutter-row" span={6}>
          <CardMostListen />
        </Col>
        <Col className="gutter-row" span={6}>
          <CardMostListen />{" "}
        </Col>
        <Col className="gutter-row" span={6}>
          <CardMostListen />{" "}
        </Col>
        <Col className="gutter-row" span={6}>
          <CardMostListen />{" "}
        </Col>
      </Row>
    </>
  );
};
