import g from "glamorous";

export const Container = g.div({
  display: "flex",
  margin: "1rem 0"
});

export const Code = g.code(({ theme }) => ({
  fontFamily: `${theme.fonts.primary} !important`
}));

export const LineNumbers = g.div({
  color: "rgba(0,0,0,0.5)",
  display: "flex",
  justifyContent: "flex-end",
  paddingRight: "1rem"
});

export const Source = g.div({ flexGrow: 1 });
