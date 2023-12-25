import React, { useEffect, useState } from "react";
import { Avatar, Button, Card, List, Popconfirm, Skeleton } from "antd";
import Search from "antd/es/input/Search";
import PendingSingers from "./PendingSingers";
const count = 30;
const fakeDataUrl = `https://randomuser.me/api/?results=${count}&inc=name,gender,email,nat,picture&noinfo`;
const ListPendingSingers = () => {
  const [initLoading, setInitLoading] = useState(true);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  const [list, setList] = useState([]);
  const [option, setOption] = useState("");

  useEffect(() => {
    fetch(fakeDataUrl)
      .then((res) => res.json())
      .then((res) => {
        setInitLoading(false);
        setData(res.results);
        setList(res.results);
      });
  }, []);

  const onSearch = (value, _e, info) => {
    const filteredData = data.filter((item) =>
      item.name?.last.toLowerCase().includes(value.toLowerCase())
    );
    setList(filteredData);
    setSearch(value);
    console.log("search value>>>", search);
  };

  const handleApprove = () => {
    setOption("approve");
  };
  const handleReject = () => {
    setOption("reject");
  };

  return (
    <Card
      title="List pending singer"
      extra={
        <>
          <Search
            placeholder="search for name singer"
            onSearch={onSearch}
            style={{
              width: 200,
            }}
          />
        </>
      }
    >
      {/* <List
        className="demo-loadmore-list"
        loading={initLoading}
        itemLayout="horizontal"
        loadMore={loadMore}
        dataSource={list}
        renderItem={(item) => (
          <List.Item
            actions={[
              <Popconfirm
                title="Active this song?"
                description="Are you sure to active this singer?"
                onConfirm={confirm}
                onCancel={cancel}
                okText="Yes"
                cancelText="No"
              >
                <Button type="primary" onClick={handleApprove(item)}>
                  Active
                </Button>
              </Popconfirm>,
            ]}
          >
            <Skeleton avatar title={false} loading={item.loading} active>
              <List.Item.Meta
                avatar={<Avatar src={item.picture.large} />}
                title={<a href="">{item.name?.last}</a>}
                description="Request Date: ${date}"
              />
              <div>status: pending...</div>
            </Skeleton>
          </List.Item>
        )}
      /> */}

      <PendingSingers dataPending={data} search={search} />
    </Card>
  );
};
export default ListPendingSingers;
