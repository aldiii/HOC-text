import React, { useState } from "react";
import ReactDOM from "react-dom";
import { CheckBox } from "./CheckBox";
import { RadioGroup } from "./RadioGroup";

import "./styles.css";

function App() {
  const [on, setOn] = useState(false);
  const toggle = () => setOn((prevOn) => !prevOn);
  return (
    <div className="App">
      <CheckBox on={on} toggle={toggle}>
        First option
      </CheckBox>
      <RadioGroup on={on} toggle={toggle}>
        SecondOption
      </RadioGroup>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
