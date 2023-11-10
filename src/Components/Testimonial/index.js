import { Button, Col, Image, Row } from "antd";
import React from "react";
import heroImage from "../../Assets/gettyimages-1162781756-612x612.jpg";

function Testimonial() {
  return (
    <div className="container">
      <Row>
        <Col span={12} style={{ height: "100vh", paddingInline: "16px" }}>
          <Image style={{ height: "305px" }} src={heroImage} alt="" />
        </Col>
        <Col span={12} style={{ textAlign: "justify" }}>
          <h1>Lorem Ipsum</h1>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>

          <Button className="primary-btn">View all Testimonials</Button>
        </Col>
      </Row>
    </div>
  );
}

export default Testimonial;
