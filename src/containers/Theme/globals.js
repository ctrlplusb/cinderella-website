import vt323Woff from "./fonts/VT323-Regular.woff";
import vt323Woff2 from "./fonts/VT323-Regular.woff2";

export default `
@font-face {
  font-family: "VT323 Regular";
  src: url("${vt323Woff2}") format("woff2"), url("${vt323Woff}") format("woff");
}

*, *:before, *:after {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

body {
  font-family: "VT323 Regular", monospace;
  font-size: 18px;
  font-weight: 200;
  line-height: 20px;
}

@media screen and (max-width: 320px) {
  body {
    font-size: 14px;
    line-height: 16px;
  }
}

@media screen and (max-width: 760px) {
  body {
    font-size: 16px;
    line-height: 18px;
  }
}

h1, h2, h3, h4, h5, h6, label, p, button, abbr, a, span, small {
  /* FONT SMOOTHING / ANTIALIASING */
  /* Support for IE. */
  font-feature-settings: liga;
  font-smoothing: antialiased;
  /* Support for Safari and Chrome. */
  text-rendering: optimizeLegibility;
  text-size-adjust: 100%;
}

img {
  max-width: 100%;
}
`;
