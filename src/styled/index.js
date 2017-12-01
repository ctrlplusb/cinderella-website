import g from "glamorous";

export const H2 = g.h2({
  fontSize: `${18 / 16}rem`,
  fontWeight: "bold",
  marginBottom: `${9 / 16}rem`
});

export const NarrowContent = g.div(({ theme }) => ({
  maxWidth: theme.layout.narrow,
  margin: "0 auto",
  width: "100%"
}));

export const Section = g.div({
  marginBottom: `${18 / 16}rem`
});

export const Paragraph = g.p({
  marginBottom: `${18 / 16}rem`
});

export const UnorderedList = g.ul({
  marginLeft: "20px"
});
