import React from "react";
import Example from "../../components/Example";
import * as CommonStyled from "../../styled";
import * as Styled from "./styled";

export default function Home() {
  return (
    <Styled.Container>
      <p>A tiny transformation library.</p>
      <Example />
      <CommonStyled.UnorderedList>
        <li>Play, pause, seek, set speed, loop, reverse, alternate</li>
        <li>Compose animations to create complex timelines</li>
        <li>Built in easing functions</li>
        <li>Bundled devtools to visualise and debug your animations</li>
        <li>Optimised over requestAnimationFrame for 60FPS performance</li>
        <li>3.6kB (min + gzip)</li>
      </CommonStyled.UnorderedList>
    </Styled.Container>
  );
}
