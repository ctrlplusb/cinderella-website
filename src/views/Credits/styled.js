import g from "glamorous";

export const Container = g.div({
  flexGrow: 1,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  textAlign: "center",
  position: "relative",
  overflow: "hidden"
  // WebkitBackfaceVisibility: "hidden",
  // WebkitPerspective: 1000,
  // WebkitTransform: "translate3d(0, 0, 0)"
});

export const FadeOutTop = g.div({
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: 100,
  background:
    "linear-gradient(to bottom, #ffffff 0%, rgba(255, 255, 255, 0) 100%)",
  pointerEvents: "none"
});

export const FadeInBottom = g.div({
  position: "absolute",
  bottom: 0,
  left: 0,
  width: "100%",
  height: 100,
  background:
    "linear-gradient(to bottom, rgba(255, 255, 255, 0) 0%, #ffffff 100%)",
  pointerEvents: "none"
});

export const Paragraph = g.p({
  marginBottom: `${36 / 16}rem`
});
