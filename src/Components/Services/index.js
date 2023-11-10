import { Button, Card, Col, Image, Row } from "antd";
import React from "react";
import image1 from "../../Assets/serviceimg1.jpg";
import image2 from "../../Assets/serviceimg2.jpg";
import image3 from "../../Assets/serviceimg3.jpg";

function Services() {
  return (
    <div style={{ backgroundColor: "#f2fbf3" }}>
      <div className="container">
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <h1>Oue Services</h1>
          <Button>View All </Button>
        </div>
        <Row gutter={16} className="multiple-cards">
          <Col span={8}>
            <Card hoverable cover={<Image alt="example" src={image1} />}>
              <h2 style={{ textAlign: "left" }}>Lorem Ipsum text</h2>
              <p className="card-text">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae ab illo inventore veritatis et quasi
              </p>
              <Button style={{ color: "#00897b" }} type="link">
                Read more
              </Button>
            </Card>
          </Col>
          <Col span={8}>
            <Card hoverable cover={<Image alt="example" src={image2} />}>
              <h2 style={{ textAlign: "left" }}>Standard dummy text</h2>
              <p className="card-text">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae ab illo inventore veritatis et quasi
              </p>
              <Button style={{ color: "#00897b" }} type="link">
                Read more
              </Button>
            </Card>
          </Col>
          <Col span={8}>
            <Card hoverable cover={<Image alt="example" src={image3} />}>
              <h2 style={{ textAlign: "left" }}>Lorem Ipsum head</h2>
              <p className="card-text">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae ab illo inventore veritatis et quasi
              </p>
              <Button style={{ color: "#00897b" }} type="link">
                Read more
              </Button>
            </Card>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default Services;
