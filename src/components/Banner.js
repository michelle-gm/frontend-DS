// import { useState, useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import float from "../assets/img/float.png";

export const Banner = () => {
  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <span className="tagLine"> PayView</span>
            <h1>{"PAGA EN LÍNEA"}</h1>
            <h1>{"A UN SOLO CLICK"}</h1>
            <button onClick={() => console.log("Connect")}>
              Empieza Aquí <ArrowRightCircle size={25} />
            </button>
          </Col>
          <Col xs={12} md={6} xl={5}>
            {/* Se puede quitar o Dejar,tambien se le puede cambiar el icono, como se prefiera */}
            <img src={float} alt="Headder Img" />
          </Col>
        </Row>
      </Container>
    </section>
  );
};
