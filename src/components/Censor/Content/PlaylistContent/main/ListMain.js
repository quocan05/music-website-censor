import React, { useEffect, useState } from "react";
import { Col, Divider, Row, Slider } from "antd";
import { CardDisplay } from "./CardDisplay";
import { getAllPlayList } from "../../../../../services/api/playlist";
const count = 10;

const ListMain = () => {
  const [initLoading, setInitLoading] = useState(true);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [list, setList] = useState([]);
  const [itemSelected, setItemSelected] = useState(null);

  useEffect(() => {
    (async () => {
      const datasrc = await getAllPlayList();
      console.log("Check>>> ", datasrc);
      setData(datasrc.content);
    })();
  }, []);
  const style = {
    background: "#0092ff",
    padding: "8px 0",
  };

  return (
    <>
      <Divider orientation="left">All Playlist</Divider>
      <Row gutter={[16, 16]}>
        {data &&
          data.map((item) => (
            <Col className="gutter-row" span={4}>
              <CardDisplay selected={item} />
            </Col>
          ))}
      </Row>
    </>
  );
};
export default ListMain;
