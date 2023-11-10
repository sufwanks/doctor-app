import React from "react";
import { Avatar, Button, Card, Col, Form, Input, Row, Select } from "antd";
import { MailOutlined } from "@ant-design/icons";

const { Option } = Select;
const onFinish = (values) => {
  console.log("Received values of form: ", values);
};
const Contact = () => (
  <div className="container">
    <h1>Contact Us</h1>
    <Row style={{ display: "flex", justifyContent: "space-around" }}>
      <Col>
        <Card
          className="contact-card contact-bg"
          style={{
            width: 300,
            height: 100,
            marginBottom: "20px",
          }}
          bordered={false}
        >
          <Avatar
            style={{
              backgroundColor: "blue",
              verticalAlign: "middle",
            }}
            size="large"
          >
            KS
          </Avatar>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
            }}
          >
            <h4 style={{ margin: 0 }}>Talk to us</h4>
            <a href="tel:+91 87654321">+91 87654321</a>
          </div>
        </Card>
        <Card
          className="contact-card contact-bg"
          style={{
            width: 300,
            height: 100,
          }}
          bordered={false}
        >
          <Avatar
            style={{
              backgroundColor: "blue",
              verticalAlign: "middle",
            }}
            size="large"
          >
            <MailOutlined />
          </Avatar>
          <div
            style={{
              display: "flex",
              alignItems: "flex-start",
              flexDirection: "column",
            }}
          >
            <h4 style={{ margin: 0 }}>Email Address</h4>
            <a href="tel:+91 87654321">testmail@kilm.com</a>
          </div>
        </Card>
      </Col>
      <Col>
        <Card
          title="Leave Us a Message"
          className="contact-bg"
          style={{
            width: 300,
            fontWeight: 500,
            fontSize: "21px",
          }}
          bordered={false}
        >
          <Form
            name="complex-form"
            onFinish={onFinish}
            labelCol={{
              span: 8,
            }}
            wrapperCol={{
              span: 16,
            }}
            style={{
              maxWidth: 600,
            }}
          >
            <Form.Item
              label="Name"
              style={{
                marginBottom: 0,
              }}
            >
              <Form.Item
                name="first_name"
                rules={[
                  {
                    required: true,
                  },
                ]}
                style={{
                  display: "inline-block",
                  width: "calc(50% - 8px)",
                }}
              >
                <Input placeholder="Input first name" />
              </Form.Item>
              <Form.Item
                name="last_name"
                rules={[
                  {
                    required: true,
                  },
                ]}
                style={{
                  display: "inline-block",
                  width: "calc(50% - 8px)",
                  margin: "0 8px",
                }}
              >
                <Input placeholder="Input Last Name" />
              </Form.Item>
            </Form.Item>
            <Form.Item name={["user", "Subject"]} label="Subject">
              <Input />
            </Form.Item>
            <Form.Item name={["user", "message"]} label="Message">
              <Input.TextArea />
            </Form.Item>

            <Form.Item label=" " colon={false}>
              <Button type="warning" htmlType="submit">
                Submit
              </Button>
            </Form.Item>
          </Form>
        </Card>
      </Col>
    </Row>
  </div>
);
export default Contact;
