import { Flex, Typography } from "antd";

export const NameGenre = (props) => {
  const genre = {
    name: "REMIX",
  };
  return (
    <Typography style={{ fontSize: "1.8rem", fontWeight: "600" }}>
      {genre.name}
    </Typography>
  );
};
