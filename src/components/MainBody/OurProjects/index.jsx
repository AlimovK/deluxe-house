import React from "react";
import {
  Container,
  Title,
  Line,
  Wrapper,
  ImgWrapper,
  Img,
  Des,
} from "./style.js";
import first from "../../../assets/img/first.png";
import second from "../../../assets/img/second.png";
import third from "../../../assets/img/third.png";
import fourth from "../../../assets/img/fourth.png";
import fifth from "../../../assets/img/fifth.png";
import sixth from "../../../assets/img/sixth.png";
import seventh from "../../../assets/img/seventh.png";
import eighth from "../../../assets/img/eighth.png";
import nineth from "../../../assets/img/nineth.png";

const OurProjects = () => {
  return (
    <Container>
      <Title>Наши проекты</Title>
      <Line />
      <Wrapper>
        <ImgWrapper>
          <Img src={first} />
          <Des>
            Дом для двух поколений
            <br />
            Уютная студия в ЖК Адмирал
          </Des>
        </ImgWrapper>
        <ImgWrapper>
          <Img src={second} />
          <Des>
            Дом для двух поколений
            <br />
            Уютная студия в ЖК Адмирал
          </Des>
        </ImgWrapper>
        <ImgWrapper>
          <Img src={third} />
          <Des>
            Дом для двух поколений
            <br />
            Уютная студия в ЖК Адмирал
          </Des>
        </ImgWrapper>
        <ImgWrapper>
          <Img src={fourth} />
          <Des>
            Дом для двух поколений
            <br />
            Уютная студия в ЖК Адмирал
          </Des>
        </ImgWrapper>
        <ImgWrapper>
          <Img src={fifth} />
          <Des>
            Дом для двух поколений
            <br />
            Уютная студия в ЖК Адмирал
          </Des>
        </ImgWrapper>
        <ImgWrapper>
          <Img src={sixth} />
          <Des>
            Дом для двух поколений
            <br />
            Уютная студия в ЖК Адмирал
          </Des>
        </ImgWrapper>
        <ImgWrapper>
          <Img src={seventh} />
          <Des>
            Дом для двух поколений
            <br />
            Уютная студия в ЖК Адмирал
          </Des>
        </ImgWrapper>
        <ImgWrapper>
          <Img src={eighth} />
          <Des>
            Дом для двух поколений
            <br />
            Уютная студия в ЖК Адмирал
          </Des>
        </ImgWrapper>
        <ImgWrapper>
          <Img src={nineth} />
          <Des>
            Дом для двух поколений
            <br />
            Уютная студия в ЖК Адмирал
          </Des>
        </ImgWrapper>
      </Wrapper>
    </Container>
  );
};
export default OurProjects;
