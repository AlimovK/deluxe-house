import React from "react";
import { Button, Container, Title } from "./style";
import title from "../../../assets/img/title.png";
import title2 from "../../../assets/img/title2.png";
import Zoom from "react-reveal/Zoom";

const Body = () => {
  return (
    <Container>
      <Zoom right cascade>
        <Title main src={title} />
        <Title top src={title2} />
      </Zoom>
      <Button>Расчет стоимости</Button>
    </Container>
  );
};

export default Body;
