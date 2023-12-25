import React from "react";
import { Button, Form, Input, Select, Space } from "antd";
const { Option } = Select;
const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};
const tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 16,
  },
};
const FormAddPlaylist = () => {
  const [form] = Form.useForm();
  const onStatusChange = (value) => {};
  const onFinish = (values) => {
    console.log(values);
  };

  return (
    <Form
      {...layout}
      form={form}
      name="control-hooks"
      onFinish={onFinish}
      style={{
        maxWidth: 600,
      }}
    >
      <Form.Item
        name="name"
        label="Name"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="status"
        label="Status"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Select
          placeholder="Select status"
          onChange={onStatusChange}
          allowClear
        >
          <Option value="public">public</Option>
          <Option value="private">private</Option>
        </Select>
      </Form.Item>

      <Form.Item {...tailLayout}>
        <Space>
          <Button type="primary" htmlType="submit">
            Add new playlist
          </Button>
        </Space>
      </Form.Item>
    </Form>
  );
};
export default FormAddPlaylist;
