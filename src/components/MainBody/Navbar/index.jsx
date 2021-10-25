import React from "react";
import { CallIcon, Container, NavbarTab, Phone, Title, Wrapper } from "./style";

const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Title>
          DELUXE HOUSE
          <br /> <small>design studio</small>
        </Title>
      </Wrapper>
      <Wrapper>
        <NavbarTab>Услуги</NavbarTab>
        <NavbarTab>Ремонт</NavbarTab>
        <NavbarTab>Портфолию</NavbarTab>
        <NavbarTab>О нас</NavbarTab>
        <NavbarTab>Статьи</NavbarTab>
        <NavbarTab>Кантакты</NavbarTab>
      </Wrapper>
      <Wrapper>
        <Phone>8 (700) 300-03-04</Phone>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
