import g from "glamorous";

export const Anchor = g.a(({ disabled }) => ({
  opacity: disabled ? 0.5 : 1,
  pointerEvents: disabled ? "none" : "all",
  cursor: disabled ? "cursor" : "pointer"
}));

export const H2 = g.h2({
  fontSize: `${18 / 16}rem`,
  fontWeight: "bold",
  margin: `${9 / 16}rem 0`,
  textDecoration: "underline"
});

export const NarrowContent = g.div(({ theme }) => ({
  maxWidth: theme.layout.narrow,
  margin: "0 auto",
  width: "100%"
}));

export const Notes = g.div({
  padding: `0 1rem`,
  color: "rgba(0,0,0,0.7)",
  fontStyle: "italic",
  borderLeft: "solid 2px rgba(0,0,0,0.7)",
  margin: `1rem 0`
});

export const Paragraph = g.p({
  margin: `${9 / 16}rem 0`
});

export const Section = g.div({
  marginBottom: `${18 / 16}rem`
});

export const UnorderedList = g.ul({
  marginLeft: "20px"
});
