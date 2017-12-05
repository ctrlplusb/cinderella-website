import React, { Component } from "react";
import { findDOMNode } from "react-dom";
import PropTypes from "prop-types";
import Prism from "prismjs";
import "prismjs/themes/prism-solarizedlight.css";
import "prismjs/components/prism-bash";
import * as Styled from "./styled";

export default class Code extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lineCount: 1
    };
  }

  componentDidMount() {
    let count = 1;
    let index = -1;
    while (true) {
      index = this.code.innerText.indexOf("\n", index + 1);
      if (index === -1) {
        break;
      }
      count += 1;
    }
    this.setState({
      lineCount: count
    });
  }

  codeRef = el => {
    if (!el) return;
    this.code = findDOMNode(el);
  };

  render() {
    const { source, language, lineNumbers, startLine } = this.props;
    const { lineCount } = this.state;

    const lineOffset = startLine - 1;

    return (
      <Styled.Container>
        {lineNumbers && (
          <Styled.LineNumbers>
            <pre>
              <Styled.Code>
                {[...new Array(lineCount)].reduce(
                  (acc, _, idx) =>
                    acc.concat(`${lineOffset + idx + 1}\n`.padStart(3, " ")),
                  ""
                )}
              </Styled.Code>
            </pre>
          </Styled.LineNumbers>
        )}
        <Styled.Source>
          <pre style={{ whiteSpace: "pre-wrap" }}>
            <Styled.Code
              innerRef={this.codeRef}
              dangerouslySetInnerHTML={{
                __html: Prism.highlight(source, Prism.languages[language])
              }}
            />
          </pre>
        </Styled.Source>
      </Styled.Container>
    );
  }
}

Code.propTypes = {
  language: PropTypes.oneOf(["javascript", "markup", "bash"]),
  lineNumbers: PropTypes.bool,
  source: PropTypes.string.isRequired,
  startLine: PropTypes.number
};

Code.defaultProps = {
  language: "javascript",
  lineNumbers: false,
  startLine: 1
};
