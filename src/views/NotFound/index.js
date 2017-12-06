import React from "react";
import { NarrowContent } from "../../styled";

export default function NotFound() {
  return (
    <NarrowContent>
      Page not found{" "}
      <span role="img" aria-label="confused">
        🤷
      </span>
    </NarrowContent>
  );
}
