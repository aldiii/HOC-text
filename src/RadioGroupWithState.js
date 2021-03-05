import React, { useState } from "react";
import { RadioGroup } from "./RadioGroup";

export function RadioGroupWithState({ children }) {
  const [on, setOn] = useState(false);
  const toggle = () => setOn((prevOn) => !prevOn);
  return (
    <RadioGroup on={on} toggle={toggle}>
      {children}
    </RadioGroup>
  );
}
