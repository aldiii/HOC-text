import React from "react";

export function RadioGroup({ on, toggle, children }) {
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
