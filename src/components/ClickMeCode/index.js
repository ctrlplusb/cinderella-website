import React, { Component } from "react";
import { findDOMNode } from "react-dom";
import PropTypes from "prop-types";
import cinderella from "cinderella";
import Code from "../Code";
import { Container, ClickMeArea, Paragraph } from "./styled";

export default class ClickMeCode extends Component {
  componentDidMount() {
    this.animation = cinderella({ loop: true })
      .add({
        targets: this.clickMe,
        transform: {
          opacity: [
            {
              from: 1,
              to: 0,
              delay: 500,
              duration: 1
            },
            {
              from: 0,
              to: 1,
              delay: 500,
              duration: 1
            }
          ]
        }
      })
      .play();
  }

  componentWillUnmount() {
    if (this.animation) {
      this.animation.stop();
    }
  }

  clickMeRef = el => {
    if (!el) return;
    this.clickMe = findDOMNode(el);
  };

  render() {
    const { label, onClick, source } = this.props;
    return (
      <div>
        <Container>
          <Code lineNumbers source={source} />
          <ClickMeArea onClick={onClick} />
        </Container>
        <Paragraph innerRef={this.clickMeRef} onClick={onClick}>
          <span role="img" aria-label="">
            👆
          </span>{" "}
          {label}
        </Paragraph>
      </div>
    );
  }
}

ClickMeCode.propTypes = {
  label: PropTypes.string
};

ClickMeCode.defaultProps = {
  label: "Click me"
};
