import { Button, Card, Col, Image, Row } from "antd";
import React from "react";
import heroImage from "../../Assets/gettyimages-1162781756-612x612.jpg";
import {
  UserAddOutlined,
  HistoryOutlined,
  MedicineBoxOutlined,
} from "@ant-design/icons";

function Hero() {
  return (
    <>
      <div style={{ backgroundColor: "#f2fbf3" }}>
        <div className="container">
          <Row>
            <Col span={12} style={{ textAlign: "justify" }}>
              <h1>Lorem Ipsum has been the industry's standard dummy text</h1>

              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>

              <Button className="primary-btn">Get Started</Button>
            </Col>
            <Col span={12} style={{ height: "100vh", paddingInline: "16px" }}>
              <Image style={{ height: "305px" }} src={heroImage} alt="" />
            </Col>
          </Row>
        </div>
      </div>
      <div className="container">
        <Row gutter={16}>
          <Col span={8}>
            <Card bordered={false}>
              <UserAddOutlined
                style={{ fontSize: "40px" }}
                className="main-icon"
              />
              <p className="card-text">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae ab illo inventore veritatis et quasi
              </p>

              <Button className="primary-btn">Appoinment</Button>
            </Card>
          </Col>
          <Col span={8}>
            <Card bordered={true}>
              {" "}
              <HistoryOutlined
                style={{ fontSize: "40px" }}
                className="main-icon"
              />
              <p className="card-text">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae ab illo inventore veritatis et quasi
              </p>
              <Button className="primary-btn">History</Button>
            </Card>
          </Col>
          <Col span={8}>
            <Card bordered={false}>
              {" "}
              <MedicineBoxOutlined
                style={{ fontSize: "40px" }}
                className="main-icon"
              />
              <p className="card-text">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae ab illo inventore veritatis et quasi
              </p>
              <Button className="primary-btn">Prescription</Button>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default Hero;
