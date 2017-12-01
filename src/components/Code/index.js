import Prism from "prismjs";
import "prismjs/components/prism-bash";
import "prismjs/themes/prism-solarizedlight.css";
import React from "react";
import PropTypes from "prop-types";
import * as Styled from "./styled";

export default function Code({ source, language }) {
  return (
    <pre>
      <Styled.Code
        dangerouslySetInnerHTML={{
          __html: Prism.highlight(source, Prism.languages[language])
        }}
      />
    </pre>
  );
}

Code.propTypes = {
  source: PropTypes.string.isRequired,
  language: PropTypes.oneOf(["javascript", "markup", "bash"])
};

Code.defaultProps = {
  language: "javascript"
};
