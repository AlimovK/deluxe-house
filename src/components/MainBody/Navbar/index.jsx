import React from "react";
import logo from "../../../assets/img/logo.png";
import { CallIcon, Container, NavbarTab, Phone, Logo, Wrapper } from "./style";

const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Logo src={logo} />
        {/* <Title /> */}
        {/* DELUXE HOUSE
          <br /> <small>design studio</small>
        </Title> */}
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
