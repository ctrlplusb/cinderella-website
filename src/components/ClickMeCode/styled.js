import g from "glamorous";
import * as CommonStyled from "../../styled";

export const Container = g.div({
  position: "relative",
  margin: `${9 / 16}rem 0`
});

export const ClickMeArea = g.div({
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  cursor: "pointer"
});

export const Paragraph = g(CommonStyled.Paragraph)({
  cursor: "pointer",
  paddingLeft: "4rem"
});
