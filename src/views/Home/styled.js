import g from "glamorous";

export const Container = g.div(({ theme }) => ({
  width: "100%",
  maxWidth: theme.layout.narrow,
  margin: "0 auto"
}));
