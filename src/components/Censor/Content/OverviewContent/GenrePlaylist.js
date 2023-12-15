import { Col, Divider, Row } from "antd";
import CardGenre from "./CardDisplay/CardGenre";
const style = {
  background: "#0092ff",
  padding: "8px 0",
};

export const GenrePlaylist = () => {
  return (
    <>
      <Divider orientation="left">Genre's Playlist</Divider>
      <Row gutter={12}>
        <Col className="gutter-row" span={6}>
          <CardGenre />
        </Col>
        <Col className="gutter-row" span={6}>
          <CardGenre />
        </Col>
        <Col className="gutter-row" span={6}>
          <CardGenre />
        </Col>
        <Col className="gutter-row" span={6}>
          <CardGenre />
        </Col>
      </Row>
    </>
  );
};
