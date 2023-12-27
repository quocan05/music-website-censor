import { Card } from "antd";
import Meta from "antd/es/card/Meta";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { openListSongOfPlaylist } from "../../../../../redux/actions/playlist/open/openPlaylist";

export const CardDisplay = (props) => {
  const [selected, setSelected] = useState(props.selected.name);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleOpenPlaylist = () => {
    console.log("Check props:>>>", props.selected);
    navigate("/detail-playlist");
    dispatch(openListSongOfPlaylist(props.selected));
  };

  return (
    <>
      <Card
        hoverable
        style={{ width: 160 }}
        cover={
          <img
            alt="example"
            src="https://e1.pngegg.com/pngimages/1001/845/png-clipart-somacro-45-300dpi-social-media-icons-soundcloud-soundcloud-logo.png"
          />
        }
        onClick={handleOpenPlaylist}
      >
        <Meta title={selected} description="" />
      </Card>
    </>
  );
};
