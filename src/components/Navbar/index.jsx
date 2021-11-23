import React, { useState } from "react";
import logo from "../../assets/img/logo.png";
import { Container, NavbarTab, Phone, Logo, Wrapper } from "./style";

const Navbar = () => {
  const [isTabActive] = useState(false);
  const [isActive, setIsActive] = useState("О нас");
  return (
    <Container>
      <Wrapper to={"/"}>
        <Logo src={logo} />
      </Wrapper>
      <Wrapper>
        <NavbarTab
          active={isActive === `Услуги`}
          onClick={() => !isTabActive && setIsActive("Услуги")}
          to={"/Услуги"}
        >
          Услуги
        </NavbarTab>
        <NavbarTab
          active={isActive === `Ремонт`}
          onClick={() => !isTabActive && setIsActive("Ремонт")}
          to={"/Ремонт"}
        >
          Ремонт
        </NavbarTab>
        <NavbarTab
          active={isActive === `Портфолию`}
          onClick={() => !isTabActive && setIsActive("Портфолию")}
          to={"/Портфолию"}
        >
          Портфолию
        </NavbarTab>
        <NavbarTab
          active={isActive === "О нас"}
          onClick={() => !isTabActive && setIsActive("О нас")}
          to={"/"}
        >
          О нас
        </NavbarTab>
        <NavbarTab
          active={isActive === `Статьи`}
          onClick={() => !isTabActive && setIsActive("Статьи")}
          to={"/Статьи"}
        >
          Статьи
        </NavbarTab>
        <NavbarTab
          active={isActive === `Кантакты`}
          onClick={() => !isTabActive && setIsActive("Кантакты")}
          to={"/Кантакты"}
        >
          Кантакты
        </NavbarTab>
      </Wrapper>
      <Wrapper>
        <Phone>8 (700) 300-03-04</Phone>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
