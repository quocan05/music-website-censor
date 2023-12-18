import React, { useState } from "react";
import { PlusOutlined } from "@ant-design/icons";
import {
  Button,
  Col,
  DatePicker,
  Drawer,
  Form,
  Input,
  Row,
  Select,
  Space,
} from "antd";
import { useDispatch, useSelector } from "react-redux";
import { closeEditSongDrawer } from "../../../../../redux/actions/drawer";
const { Option } = Select;
const DrawerEditSong = () => {
  const open = useSelector((state) => state.openDrawerEditSong.open);
  const data = useSelector((state) => state.openDrawerEditSong.data);
  const dispatch = useDispatch();
  const onClose = () => {
    dispatch(closeEditSongDrawer());
  };
  console.log("open: ", open, "data: ", data);
  return (
    <>
      {data && (
        <Drawer
          title="Edit song"
          width={720}
          onClose={onClose}
          open={open}
          styles={{
            body: {
              paddingBottom: 80,
            },
          }}
          extra={
            <Space>
              <Button onClick={onClose}>Cancel</Button>
              <Button onClick={onClose} type="primary">
                Edit
              </Button>
            </Space>
          }
        >
          <Form layout="vertical" hideRequiredMark>
            <Row gutter={16}>
              <Col span={12}>
                <Form.Item
                  label="Name"
                  rules={[
                    {
                      required: true,
                      message: "Please enter user name",
                    },
                  ]}
                >
                  <Input
                    placeholder="Please enter user name"
                    value={data.name.last}
                  />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item
                  label="Url"
                  rules={[
                    {
                      required: true,
                      message: "Please enter url",
                    },
                  ]}
                >
                  <Input
                    style={{
                      width: "100%",
                    }}
                    addonBefore="http://"
                    addonAfter=".com"
                    placeholder="Please enter url"
                  />
                </Form.Item>
              </Col>
            </Row>
            <Row gutter={16}>
              <Col span={12}>
                <Form.Item
                  label="Owner"
                  rules={[
                    {
                      required: true,
                      message: "Please select an owner",
                    },
                  ]}
                >
                  <Select placeholder="Please select an owner">
                    <Option value="xiao">Xiaoxiao Fu</Option>
                    <Option value="mao">Maomao Zhou</Option>
                  </Select>
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item
                  label="Type"
                  rules={[
                    {
                      required: true,
                      message: "Please choose the type",
                    },
                  ]}
                >
                  <Select placeholder="Please choose the type">
                    <Option value="private">Private</Option>
                    <Option value="public">Public</Option>
                  </Select>
                </Form.Item>
              </Col>
            </Row>
            <Row gutter={16}>
              <Col span={12}>
                <Form.Item
                  label="Approver"
                  rules={[
                    {
                      required: true,
                      message: "Please choose the approver",
                    },
                  ]}
                >
                  <Select placeholder="Please choose the approver">
                    <Option value="jack">Jack Ma</Option>
                    <Option value="tom">Tom Liu</Option>
                  </Select>
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item
                  label="DateTime"
                  rules={[
                    {
                      required: true,
                      message: "Please choose the dateTime",
                    },
                  ]}
                >
                  <DatePicker.RangePicker
                    style={{
                      width: "100%",
                    }}
                    getPopupContainer={(trigger) => trigger.parentElement}
                  />
                </Form.Item>
              </Col>
            </Row>
            <Row gutter={16}>
              <Col span={24}>
                <Form.Item
                  label="Description"
                  rules={[
                    {
                      required: true,
                      message: "please enter url description",
                    },
                  ]}
                >
                  <Input.TextArea
                    rows={4}
                    placeholder="please enter url description"
                  />
                </Form.Item>
              </Col>
            </Row>
          </Form>
        </Drawer>
      )}
    </>
  );
};
export default DrawerEditSong;
