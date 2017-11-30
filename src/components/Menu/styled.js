import g from "glamorous";

export const Container = g.div(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  maxWidth: theme.layout.narrow,
  margin: "0 auto 20px"
}));
