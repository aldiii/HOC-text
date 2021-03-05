import React, { useState } from "react";
import { CheckBox } from "./CheckBox";

function CheckBoxWithState({ children }) {
  const [on, setOn] = useState(false);
  const toggle = () => setOn((prevOn) => !prevOn);
  return (
    <CheckBox on={on} toggle={toggle}>
      {children}
    </CheckBox>
  );
}
