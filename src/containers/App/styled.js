import g from "glamorous";

export const Container = g.div(({ theme }) => ({
  minHeight: "100vh",
  display: "flex",
  flexDirection: "column",
  padding: "0 15px",
  zIndex: theme.z.normal,
  position: "relative"
}));

export const Header = g.div({
  textAlign: "center"
});

export const Main = g.div({
  flexGrow: 1,
  display: "flex",
  height: "100%"
});

export const Footer = g.div({
  textAlign: "center",
  margin: "20px 0"
});

export const Heading = g.h1({
  fontSize: `${32 / 16}rem`
});
