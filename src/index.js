import React from "react";
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
  return (
    <div className="App">
      <CheckBox on={false} toggle={() => null}>
        First option
      </CheckBox>
      <RadioGroup on={false} toggle={() => null}>
        SecondOption
      </RadioGroup>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
