import { Col, Divider, Row } from "antd";
import CardSinger from "./CardDisplay/CardSinger";
const style = {
  background: "#0092ff",
  padding: "8px 0",
};

export const SingerPlaylist = () => {
  return (
    <>
      <Divider orientation="left">Singer's Playlist</Divider>
      <Row gutter={16}>
        <Col className="gutter-row" span={6}>
          <CardSinger />
        </Col>
        <Col className="gutter-row" span={6}>
          <CardSinger />{" "}
        </Col>
        <Col className="gutter-row" span={6}>
          <CardSinger />{" "}
        </Col>
        <Col className="gutter-row" span={6}>
          <CardSinger />{" "}
        </Col>
      </Row>
    </>
  );
};
