import "glamor/reset";
import React from "react";
import { ThemeProvider } from "glamorous";
import * as theme from "./theme";

import "./globals";

export default function Theme({ children }) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}
