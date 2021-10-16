import React from "react";
import Navbar from "./Navbar";
import { Container, Wrapper } from "./syle";
import Sidebar from "./Sidebar";
import Body from "./Body";

const MainBody = () => {
  return (
    <Container>
      <Sidebar />
      <Wrapper column>
        <Navbar />
        <Body />
      </Wrapper>
    </Container>
  );
};

export default MainBody;
