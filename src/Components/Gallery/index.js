import { Col, Image, Row } from "antd";
import React from "react";
import { Gallery } from "react-grid-gallery";

function ImageGallery() {
  const images2 = [
    {
      src: "https://media.istockphoto.com/id/1437830105/photo/cropped-shot-of-a-female-nurse-hold-her-senior-patients-hand-giving-support-doctor-helping.jpg?s=612x612&w=is&k=20&c=DzTEQWPXeA3BtVPhRvBAxBJmI3q5Yf6JmewN3TJ4H6g=",
      width: 320,
      height: 212,
    },
    {
      src: "https://media.istockphoto.com/id/1474842223/photo/arriving-at-the-doctors-office-shake-hands.jpg?s=612x612&w=is&k=20&c=T4RFm5rGcU6GfiGck66QNPh41b8lVR4PJK0sgBK4MTU=",
      width: 320,
      height: 174,
      isSelected: false,
      caption: "After Rain (Jeshu John - designerspics.com)",
    },
    {
      src: "https://media.istockphoto.com/id/1501183859/photo/nurse-making-a-bed-in-a-hospital-room.jpg?s=612x612&w=is&k=20&c=JEch6nU2MFztqFz5tcTRxXP5hhAevsDdFaGRX4zGrQE=",
      width: 320,
      height: 212,
      alt: "Boats (Jeshu John - designerspics.com)",
    },
    {
      src: "https://media.istockphoto.com/id/1438430294/photo/abstract-blur-soft-focus-interior-of-modern-cleaning-workplace-background-with-shine-light.jpg?s=612x612&w=is&k=20&c=Zjw9r-6f8ikMGdq6k-AyLoiAuP9mlQLwZDIEYl2FuGs=",
      width: 320,
      height: 212,
    },
    {
      src: "https://media.istockphoto.com/id/1421626437/photo/unrecognizeable-person-using-digital-tablet.jpg?s=612x612&w=is&k=20&c=knFP7cec0lViFy4GUTWk3fvTCbfOU42yfBKzXayLWe4=",
      width: 320,
      height: 174,
      isSelected: false,
      caption: "After Rain (Jeshu John - designerspics.com)",
    },
    {
      src: "https://media.istockphoto.com/id/1398625179/photo/glass-window-building-of-new-office-space.jpg?s=612x612&w=is&k=20&c=XC1sAVRBuBzva3wLT-bKizxfPjx59iV-kfGMYtOnUPQ=",
      width: 320,
      height: 212,
      alt: "Boats (Jeshu John - designerspics.com)",
    },
  ];
  return (
    <div style={{ background: "#e3bc82" }} className="container">
      <h1>Gallery</h1>
      {/* <Row gutter={4}>
        <Col span={8}>
          <Image
            src="https://media.istockphoto.com/id/1476261444/photo/young-pharmaceutic-seller-explaining-something-to-doctor-in-hospital.jpg?s=612x612&w=is&k=20&c=L6e02I4XdxR9nat2a1G8hzRnVeSbAx2aCJMsmT_mWUw="
            alt=""
          />
          <Image
            src="https://media.istockphoto.com/id/1398625179/photo/glass-window-building-of-new-office-space.jpg?s=612x612&w=is&k=20&c=XC1sAVRBuBzva3wLT-bKizxfPjx59iV-kfGMYtOnUPQ="
            alt=""
          />
        </Col>
        <Col className="full-width" span={16}>
          <Image
            src="https://media.istockphoto.com/id/1448093779/photo/young-multiracial-doctor-having-fun-with-little-girl-on-wheelchair.jpg?s=612x612&w=is&k=20&c=mvqMp0m7CGQfG57DTYCz_53skQlZ-5B2KT5fHcMq_HU="
            alt=""
          />
        </Col>
      </Row> */}
      <Gallery images={images2} />
    </div>
  );
}

export default ImageGallery;
