import React from "react";
import Example from "../Example";
import * as Styled from "./styled";

export default function Home() {
  return (
    <Styled.Container>
      <p>A tiny transformation library.</p>
      <Example />
    </Styled.Container>
  );
}
