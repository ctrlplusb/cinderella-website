import "glamor/reset";
import React from "react";
import { ThemeProvider } from "glamorous";
import { css } from "glamor";
import * as theme from "./theme";

import globalStyles from "./globals";

export default function Theme({ children }) {
  css.insert(globalStyles);
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}
