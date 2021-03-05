import React, { useState } from "react";
import ReactDOM from "react-dom";
import { CheckBox } from "./CheckBox";
import { RadioGroup } from "./RadioGroup";

import "./styles.css";

function WithOnOffState(StatelessComponent) {
  function EnhancedComponent({ children }) {
    const [on, setOn] = useState(false);
    const toggle = () => setOn((prevOn) => !prevOn);
    return (
      <StatelessComponent on={on} toggle={toggle}>
        {children}
      </StatelessComponent>
    );
  }
  return EnhancedComponent;
}

const CheckBoxWithState = WithOnOffState(CheckBox);
const RadioGroupWithState = WithOnOffState(RadioGroup);

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
