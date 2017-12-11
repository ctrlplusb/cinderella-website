import React from "react";

export default function Triangle({ className, innerRef, style }) {
  return (
    <svg
      ref={innerRef}
      className={className}
      width="30"
      height="30"
      viewBox="0 0 30 30"
      style={style}
    >
      <polygon fill="#000" points="0,30 15,0 30,30" />
    </svg>
  );
}
