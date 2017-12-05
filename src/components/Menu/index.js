import React from "react";
import { Link } from "react-router-dom";
import * as Styled from "./styled";

export default function Menu() {
  return (
    <Styled.Container>
      <Link to="/">home</Link>
      <span>|</span>
      <Link to="/install">install</Link>
      <span>|</span>
      <Link to="/tutorial">tutorial</Link>
      <span>|</span>
      <Link to="/api">api</Link>
      <span>|</span>
      <Link to="/demos">demos</Link>
      <span>|</span>
      <Link to="/credits">credits</Link>
    </Styled.Container>
  );
}
