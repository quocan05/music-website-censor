import { Card } from "antd";
import { ListDayRanking } from "./ListDayRanking";

export const RankingDay = () => {
  return (
    <>
      <Card
        title="Top song of the day"
        bordered={false}
        style={{
          width: "100%",
        }}
      >
        <ListDayRanking />
      </Card>
    </>
  );
};
