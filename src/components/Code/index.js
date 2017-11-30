import "prismjs/themes/prism-solarizedlight.css";
import React from "react";
import PropTypes from "prop-types";
import Prism from "prismjs";
import * as Styled from "./styled";

export default function Code({ source }) {
  return (
    <pre>
      <Styled.Code
        dangerouslySetInnerHTML={{
          __html: Prism.highlight(source, Prism.languages.javascript)
        }}
      />
    </pre>
  );
}

Code.propTypes = {
  source: PropTypes.string.isRequired
};
