import { Col, Divider, Row } from "antd";
import CardNewest from "./CardDisplay/CardNewest";
const style = {
  background: "#0092ff",
  padding: "8px 0",
};

export const ListNewestSong = () => {
  return (
    <>
      <Row gutter={16}>
        <Col className="gutter-row" span={6}>
          <CardNewest />
        </Col>
        <Col className="gutter-row" span={6}>
          <CardNewest />
        </Col>
        <Col className="gutter-row" span={6}>
          <CardNewest />
        </Col>
        <Col className="gutter-row" span={6}>
          <CardNewest />
        </Col>
      </Row>
    </>
  );
};
