import { Card } from "antd";
import Meta from "antd/es/card/Meta";
import { useNavigate } from "react-router-dom";

export const CardDisplay = (props) => {
  const { selected } = props;
  const navigate = useNavigate();

  const handleOpenPlaylist = () => {
    console.log("Check prop:>>>", selected);
    navigate("/detail-playlist");
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
        <Meta title={selected.name.last} description="" />
      </Card>
    </>
  );
};
