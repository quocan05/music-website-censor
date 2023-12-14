import { CustomerServiceOutlined } from "@ant-design/icons";
import { Avatar, List } from "antd";
import { FaMusic } from "react-icons/fa";

export const ListDayRanking = () => {
  const data = [
    {
      title: "Song 1",
    },
    {
      title: "Song 2",
    },
    {
      title: "Song 3",
    },
    {
      title: "Song 4",
    },
  ];
  return (
    <List
      dataSource={data}
      renderItem={(item, index) => (
        <List.Item>
          <List.Item.Meta
            avatar={<CustomerServiceOutlined />}
            title={<a href="https://ant.design">{item.title}</a>}
            description="Singer: ${namesinger}"
          />
        </List.Item>
      )}
    />
  );
};
