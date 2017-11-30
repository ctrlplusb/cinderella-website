import "prismjs/themes/prism-solarizedlight.css";
import React from "react";
import PropTypes from "prop-types";
import Prism from "prismjs";
import * as Styled from "./styled";

export default function CodeHighlight({ code }) {
  return (
    <pre>
      <Styled.Code
        dangerouslySetInnerHTML={{
          __html: Prism.highlight(code, Prism.languages.javascript)
        }}
      />
    </pre>
  );
}

CodeHighlight.propTypes = {
  code: PropTypes.string.isRequired
};
