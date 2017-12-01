import React from "react";
import * as Styled from "./styled";

export default function Menu() {
  return (
    <Styled.Container>
      <a href="/">home</a>
      <span>|</span>
      <a href="/install">install</a>
      <span>|</span>
      <a href="/tutorial">tutorial</a>
      <span>|</span>
      <a href="/api">api</a>
      <span>|</span>
      <a href="/demos">demos</a>
      <span>|</span>
      <a href="/credits">credits</a>
    </Styled.Container>
  );
}
