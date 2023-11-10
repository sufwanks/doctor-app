import { Button, Col, Image, List, Row } from "antd";
import React from "react";
import logo from "../../Assets/swasth-svg-logo.svg";
import Link from "antd/es/typography/Link";

const HeaderNav = () => {
  const data = [
    {
      title: "Home",
    },
    {
      title: "Vision",
    },
    {
      title: "Service",
    },
    {
      title: "About Us",
    },
  ];

  return (
    <nav cla>
      <Row
        style={{
          display: "flex",
          flexFlow: "row wrap",
          justifyContent: "space-evenly",
        }}
        wrap={false}
      >
        <Col
          span={15}
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-evenly",
          }}
        >
          <Image src={logo} alt="" />

          <Link className="nav-links">Home</Link>
          <Link className="nav-links">Vision</Link>
          <Link className="nav-links">Service</Link>
          <Link className="nav-links">About Us</Link>
        </Col>

        <Col
          span={6}
          style={{
            padding: "0 16px",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
          flex="none"
        >
          <div
            style={{
              padding: "0 16px",
            }}
          >
            <Button className="primary-btn">Sign Up</Button>
            <Button className="primary-btn">Login</Button>
          </div>
        </Col>
      </Row>
    </nav>
  );
};

export default HeaderNav;
