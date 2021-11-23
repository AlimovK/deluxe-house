import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Root from "./root";
import Projects from "./components/MainBody/OurProjects";

ReactDOM.render(
  <React.StrictMode>
    <Root />
    {/* <Projects /> */}
  </React.StrictMode>,
  document.getElementById("root")
);
