import React from "react";
import MainBody from "../components/MainBody";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "../components/Navbar";
import Uslugi from "../components/Uslugi";
import Remont from "../components/Remont";
import Portfolio from "../components/Portfolio";
import Stati from "../components/Stati";
import Contact from "../components/Contact";

const Root = () => {
  return (
    <Router>
      <Navbar />
      <Route path="/Услуги" component={Uslugi} />
      <Route path="/Ремонт" component={Remont} />
      <Route exact path="/Портфолию" component={Portfolio} />
      <Route exact path="/" component={MainBody} />
      <Route exact path="/Статьи" component={Stati} />
      <Route exact path="/Кантакты" component={Contact} />
    </Router>
  );
};

export default Root;
