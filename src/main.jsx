import React from "react";
import ReactDOM from "react-dom";
import Mikrofrontend from "./Mikrofrontend";
import "./index.css";

ReactDOM.render(
  <React.StrictMode>
    <div className="page-wrapper">
      <div className="page-layout">
        <main>
          <Mikrofrontend />
        </main>
      </div>
    </div>
  </React.StrictMode>,
  document.getElementById("root")
);
