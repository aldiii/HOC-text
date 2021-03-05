import React, { useState } from "react";
import ReactDOM from "react-dom";
import { CheckBox } from "./CheckBox";
import { RadioGroup } from "./RadioGroup";

import "./styles.css";

function WithOnOffState(StatelessComponent) {
  function EnhancedComponent(props) {
    const { children } = props;
    const [on, setOn] = useState(false);
    const toggle = () => setOn((prevOn) => !prevOn);
    return (
      <StatelessComponent on={on} toggle={toggle} {...props}>
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
      <RadioGroupWithState isImportant>SecondOption</RadioGroupWithState>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
