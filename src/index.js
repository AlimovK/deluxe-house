import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Root from "./root";
import WeDoing from "./components/MainBody/WeDoing";

ReactDOM.render(
  <React.StrictMode>
    <Root />
    {/* <WeDoing /> */}
  </React.StrictMode>,
  document.getElementById("root")
);
