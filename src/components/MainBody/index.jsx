import React from "react";
import { Container } from "./syle";
import Body from "./Body";
import OurProject from "./OurProjects";
import WeDoing from "./WeDoing";
const MainBody = () => {
  return (
    <Container>
      <Body />
      <WeDoing />
      <OurProject />
    </Container>
  );
};

export default MainBody;
