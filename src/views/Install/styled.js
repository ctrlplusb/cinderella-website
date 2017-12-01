import g from "glamorous";

export const Container = g.div(({ theme }) => ({
  maxWidth: theme.layout.narrow,
  margin: "0 auto"
}));
