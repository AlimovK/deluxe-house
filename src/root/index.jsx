import React from "react";
import MainBody from "../components/MainBody";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "../components/Navbar";

const Root = () => {
  return (
    <Router>
      <Navbar />
      <MainBody />
    </Router>
  );
};

export default Root;
