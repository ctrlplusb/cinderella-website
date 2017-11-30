import React from "react";

export default function Triangle({ innerRef }) {
  return (
    <svg
      ref={innerRef}
      className="triangle"
      width="30"
      height="30"
      viewBox="0 0 30 30"
    >
      <polygon fill="#000" points="0,30 15,0 30,30" />
    </svg>
  );
}
