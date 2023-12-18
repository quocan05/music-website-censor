import React, { useEffect, useState } from "react";
import { Avatar, Button, Card, List, Popconfirm, Skeleton } from "antd";
import Search from "antd/es/input/Search";
const count = 3;
const fakeDataUrl = `https://randomuser.me/api/?results=${count}&inc=name,gender,email,nat,picture&noinfo`;
const ListPendingSingers = () => {
  const [initLoading, setInitLoading] = useState(true);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
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
  const onLoadMore = () => {
    setLoading(true);
    setList(
      data.concat(
        [...new Array(count)].map(() => ({
          loading: true,
          name: {},
          picture: {},
        }))
      )
    );
    fetch(fakeDataUrl)
      .then((res) => res.json())
      .then((res) => {
        const newData = data.concat(res.results);
        setData(newData);
        setList(newData);
        setLoading(false);
        // Resetting window's offsetTop so as to display react-virtualized demo underfloor.
        // In real scene, you can using public method of react-virtualized:
        // https://stackoverflow.com/questions/46700726/how-to-use-public-method-updateposition-of-react-virtualized
        window.dispatchEvent(new Event("resize"));
      });
  };
  const loadMore =
    !initLoading && !loading ? (
      <div
        style={{
          textAlign: "center",
          marginTop: 12,
          height: 32,
          lineHeight: "32px",
        }}
      >
        <Button onClick={onLoadMore}>loading more</Button>
      </div>
    ) : null;

  const onSearch = (value, _e, info) => {
    const filteredData = data.filter((item) =>
      item.name?.last.toLowerCase().includes(value.toLowerCase())
    );
    setList(filteredData);
  };

  const confirm = () => {
    //message.success(`Click on ${option}`);
    console.log("check option>>>>", option);
  };
  const cancel = () => {};

  const handleApprove = () => {
    setOption("approve");
  };
  const handleReject = () => {
    setOption("reject");
  };

  const handleReload = () => {
    setLoading(true);
    fetch(fakeDataUrl)
      .then((res) => res.json())
      .then((res) => {
        const newData = res.results;
        setData(newData);
        setList(newData);
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
        console.error("Error fetching data:", error);
      });
  };
  return (
    <Card
      title="List pending singer"
      extra={
        <>
          <Button
            type="primary"
            onClick={handleReload}
            style={{ marginRight: 20 }}
          >
            Reload
          </Button>
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
      <List
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
      />
    </Card>
  );
};
export default ListPendingSingers;
