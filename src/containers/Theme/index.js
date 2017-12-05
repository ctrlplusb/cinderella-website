import "glamor/reset";
import "./globals.css";
import React from "react";
import { ThemeProvider } from "glamorous";
import * as theme from "./theme";

export default function Theme({ children }) {
  // css.insert(globalStyles);
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}
