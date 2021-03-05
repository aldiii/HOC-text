import React, { useState } from "react";
import ReactDOM from "react-dom";

import "./styles.css";

function CheckBox({ on, toggle, children }) {
  return (
    <label>
      {children}
      <input type="checkbox" checked={on} onChange={toggle} />
    </label>
  );
}

function RadioGroup({ on, toggle, children }) {
  return (
    <div>
      <p>{children}</p>
      <label>
        On: <input type="radio" checked={on} onChange={toggle} />
      </label>
      <br />
      <label>
        Off: <input type="radio" checked={!on} onChange={toggle} />
      </label>
    </div>
  );
}

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
