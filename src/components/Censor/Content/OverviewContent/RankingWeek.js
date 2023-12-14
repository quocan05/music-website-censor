import { Card } from "antd";
import { ListWeekRanking } from "./ListWeekRanking";

export const RankingWeek = () => {
  return (
    <>
      <Card
        title="Top song of the Week"
        bordered={false}
        style={{
          width: "100%",
        }}
      >
        <ListWeekRanking />
      </Card>
    </>
  );
};
