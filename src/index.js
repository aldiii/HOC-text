import React, { useState } from "react";
import ReactDOM from "react-dom";
import { CheckBoxWithState } from "./CheckBoxWithState";
import { RadioGroupWithState } from "./RadioGroupWithState";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <CheckBoxWithState>First option</CheckBoxWithState>
      <RadioGroupWithState>SecondOption</RadioGroupWithState>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
