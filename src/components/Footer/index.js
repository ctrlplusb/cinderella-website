import React from "react";
import githubUrl from "./imgs/github.png";
import * as Styled from "./styled";

export default function Footer() {
  return (
    <Styled.Container>
      <a href="https://github.com/ctrlplusb/cinderella">
        <img src={githubUrl} alt="github" width="20" height="20" />
      </a>
    </Styled.Container>
  );
}
