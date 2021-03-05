import React from "react";

export function RadioGroup({ isImportant, on, toggle, children }) {
  return (
    <div>
      <p>{isImportant ? <strong>{children}</strong> : children}</p>
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
