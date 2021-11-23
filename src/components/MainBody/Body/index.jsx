import React, { useState } from "react";
import {
  Button,
  ContactSection,
  Container,
  Icons,
  InsideSlide,
  Title,
} from "./style";
import title from "../../../assets/img/title.png";
import title2 from "../../../assets/img/title2.png";
import Zoom from "react-reveal/Zoom";
import Slide from "react-reveal/Slide";
import github from "../../../assets/img/github.png";
import linkedin from "../../../assets/img/linkedin.png";
import google from "../../../assets/img/google.png";
import facebook from "../../../assets/img/facebook.png";
import instagram from "../../../assets/img/instagram.png";
import telegram from "../../../assets/img/telegram.png";
import "./style.css";

const Body = () => {
  const [show, setShow] = useState(false);
  return (
    <Container>
      <Zoom right cascade>
        <Title main src={title} />
        <Title top src={title2} />
      </Zoom>
      <ContactSection>
        <Slide bottom when={show}>
          <InsideSlide>
            <a href="https://github.com/AlimovK">
              <Icons src={github} />
            </a>
            <a href="https://www.linkedin.com/in/alimov-kamron/">
              <Icons src={linkedin} />
            </a>
            <a href="mailto:kmrnalimov@gmail.com">
              <Icons src={google} />
            </a>
            <a href="">
              <Icons src={facebook} />
            </a>
            <a href="https://www.instagram.com/kamron_alimov">
              <Icons src={instagram} />
            </a>
            <a href="https://telegram.me/kamron99">
              <Icons src={telegram} />
            </a>
          </InsideSlide>
        </Slide>
        <Button
          className="btn btn-success my-5"
          type="button"
          onClick={() => setShow(true)}
        >
          Constact me
        </Button>
      </ContactSection>
    </Container>
  );
};

export default Body;
