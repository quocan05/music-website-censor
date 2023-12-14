import { Col, Divider, Row } from "antd";
const style = {
  background: "#0092ff",
  padding: "8px 0",
};

export const GenrePlaylist = () => {
  return (
    <>
      <Divider orientation="left">Genre's Playlist</Divider>
      <Row gutter={16}>
        <Col className="gutter-row" span={6}>
          <div style={style}>col-6</div>
        </Col>
        <Col className="gutter-row" span={6}>
          <div style={style}>col-6</div>
        </Col>
        <Col className="gutter-row" span={6}>
          <div style={style}>col-6</div>
        </Col>
        <Col className="gutter-row" span={6}>
          <div style={style}>col-6</div>
        </Col>
      </Row>
    </>
  );
};
