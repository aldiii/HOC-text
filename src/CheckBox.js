import React from "react";

export function CheckBox({ isImportant, on, toggle, children }) {
  return (
    <label>
      {isImportant ? <strong>{children}</strong> : children}
      <input type="checkbox" checked={on} onChange={toggle} />
    </label>
  );
}
