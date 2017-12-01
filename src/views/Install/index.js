import React from "react";
import Code from "../../components/Code";
import * as CommonStyled from "../../styled";
// import * as Styled from "./styled";

const htmlSource = `<script
  type='text/javascript'
  src='https://unpkg.com/cinderella@0.19.3/dist/cinderella.min.js'>
</script>`;

export default function Install() {
  return (
    <CommonStyled.NarrowContent>
      <CommonStyled.Section>
        <CommonStyled.H2>npm / commonjs</CommonStyled.H2>
        <Code source="npm install cinderella" language="bash" />
      </CommonStyled.Section>
      <CommonStyled.Section>
        <CommonStyled.H2>browser / umd</CommonStyled.H2>
        <Code source={htmlSource} language="markup" />
      </CommonStyled.Section>
    </CommonStyled.NarrowContent>
  );
}
