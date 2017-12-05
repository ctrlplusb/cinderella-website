import React, { Component } from "react";
import { findDOMNode } from "react-dom";
import cinderella from "cinderella";
import Code from "../Code";
import { Container, ClickMeArea, Paragraph } from "./styled";

export default class StoryCode extends Component {
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
    const { source, onClick } = this.props;
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
          Click to play
        </Paragraph>
      </div>
    );
  }
}
