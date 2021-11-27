import React from "react";
import { About, Container, Img, Line, Title, Wrapper } from "./style";
import img from "../../../assets/img/weDoing.png";

const WeDoing = () => {
  return (
    <Container>
      <Title>Что мы делаем?</Title>
      <Line />
      <Wrapper>
        <Img src={img} />
        <About></About>
      </Wrapper>
    </Container>
  );
};

export default WeDoing;
