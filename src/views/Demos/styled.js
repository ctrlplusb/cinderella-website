import g from "glamorous";

export const DemoContainer = g.div({
  display: "flex",
  flexDirection: "column",
  height: "100%"
});

export const DemoPager = g.div({
  display: "flex",
  justifyContent: "space-between"
});

export const DemoView = g.div({
  display: "flex",
  flexGrow: 1,
  alignItems: "center",
  "@media (max-width: 460px)": {
    flexDirection: "column"
  }
});

export const Source = g.div({
  flexGrow: 1
});

export const DemoColumn = g.div({
  display: "flex",
  // alignItems: "center",
  // justifyContent: "center",
  "@media (min-width: 461px)": {
    // flexGrow: 1,
    width: "50%"
  },
  "@media (max-width: 460px)": {
    minHeight: 200

    // alignItems: "center"
  }
});
