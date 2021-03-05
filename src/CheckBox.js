import React from "react";

export function CheckBox({ on, toggle, children }) {
  return (
    <label>
      {children}
      <input type="checkbox" checked={on} onChange={toggle} />
    </label>
  );
}
