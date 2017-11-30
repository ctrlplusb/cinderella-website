import g from "glamorous";

export const Container = g.div({
  display: "flex",
  height: "100%",
  justifyContent: "center",
  flexGrow: 1,
  position: "relative"
});

export const Column = g.div({
  flexGrow: 1,
  padding: "0 20px 20px",
  maxWidth: "50vw"
});
