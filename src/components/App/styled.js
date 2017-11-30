import g from "glamorous";

export const Container = g.div({
  height: "100vh",
  display: "flex",
  flexDirection: "column"
});

export const Header = g.div({
  textAlign: "center"
});

export const Main = g.div({
  flexGrow: 1,
  display: "flex",
  height: "100%"
});

export const Heading = g.h1({
  fontSize: `${32 / 16}rem`
});
