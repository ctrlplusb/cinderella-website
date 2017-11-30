import React, { Component } from "react";
import { findDOMNode } from "react-dom";
import cinderella from "cinderella";
import Code from "../Code";
import Triangle from "../Triangle";
import * as Styled from "./styled";

const example = `cinderella().add({
  targets: '.triangle',
  transform: {
    translateX: {
      from: 0,
      to: '200px',
      duration: 750,
      easing: 'easeInOutElastic'
    }
  }
}).play()`;

export default class Example extends Component {
  componentDidMount() {
    const container = findDOMNode(this.containerEl);
    const containerStyle = getComputedStyle(container);
    const containerWidth = parseFloat(
      containerStyle.width.replace(/[^0-9\.]/i, "")
    );
    const triangle = findDOMNode(this.triangleEl);
    const triangleStyle = getComputedStyle(triangle);
    const triangleWidth = parseFloat(
      triangleStyle.width.replace(/[^0-9\.]/i, "")
    );
    this.animation = cinderella({
      loop: true,
      direction: "alternate"
    })
      .add({
        targets: ".triangle",
        transform: {
          translateX: {
            from: "0px",
            to: `${containerWidth - triangleWidth}px`
          },
          rotateZ: {
            from: "0deg",
            to: "180deg"
          }
        },
        defaults: {
          easing: "easeInOutQuart",
          delay: 100,
          duration: 1000
        }
      })
      .play();
  }

  triangleRef = el => {
    this.triangleEl = el;
  };

  containerRef = el => {
    this.containerEl = el;
  };

  render() {
    return (
      <Styled.Container>
        <Code source={example} />
        <Styled.AnimationContainer innerRef={this.containerRef}>
          <Triangle innerRef={this.triangleRef} />
        </Styled.AnimationContainer>
      </Styled.Container>
    );
  }
}
