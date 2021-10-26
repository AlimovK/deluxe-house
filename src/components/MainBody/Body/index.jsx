import React from "react";
import { Button, Container, Title } from "./style";
import title from "../../../assets/img/title.png";
import title2 from "../../../assets/img/title2.png";

const Body = () => {
  return (
    <Container>
      <Title main src={title} />
      <Title top src={title2} />
      <Button>Расчет стоимости</Button>
    </Container>
  );
};

export default Body;
