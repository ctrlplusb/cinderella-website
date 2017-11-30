import { css } from "glamor";

import vt323Woff from "../../fonts/VT323-Regular.woff";
import vt323Woff2 from "../../fonts/VT323-Regular.woff2";

css.global("@font-face", {
  fontFamily: '"VT323 Regular"',
  src: `url("${vt323Woff2}") format("woff2"), url("${
    vt323Woff
  }") format("woff")`,
  fontWeight: 400,
  fontStyle: "normal"
});

css.global("body", {
  // backgroundColor: Theme.colors.contrast,
  fontFamily: '"VT323 Regular", monospace',
  fontSize: 16,
  fontWeight: 200,
  lineHeight: "20px"
});

css.global("*", {
  padding: 0,
  margin: 0,
  boxSizing: "border-box"
});

css.global("img", {
  maxWidth: "100%"
});
