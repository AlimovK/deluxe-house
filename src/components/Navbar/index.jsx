import React from "react";
import logo from "../../assets/img/logo.png";
import { Container, NavbarTab, Phone, Logo, Wrapper } from "./style";
import {
  BrowserRouter as Router,
  Link,
  Redirect,
  Switch,
  Route,
  NavLink,
} from "react-router-dom";

const Navbar = () => {
  return (
    <Container>
      <Router>
        <Wrapper to={"/"}>
          <Logo src={logo} />
        </Wrapper>
        <Wrapper>
          <NavbarTab to={"/Услуги"}>Услуги</NavbarTab>
          <NavbarTab to={"/Ремонт"}>Ремонт</NavbarTab>
          <NavbarTab to={"/Портфолию"}>Портфолию</NavbarTab>
          <NavbarTab to={"/"}>О нас</NavbarTab>
          <NavbarTab to={"/Статьи"}>Статьи</NavbarTab>
          <NavbarTab to={"/Кантакты"}>Кантакты</NavbarTab>
        </Wrapper>
        <Wrapper>
          <Phone>8 (700) 300-03-04</Phone>
        </Wrapper>
      </Router>
    </Container>
  );
};

export default Navbar;
