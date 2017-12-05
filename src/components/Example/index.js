import React, { Component } from "react";
import { findDOMNode } from "react-dom";
import cinderella from "cinderella";
import Code from "../Code";
import Triangle from "../Triangle";
import * as Styled from "./styled";
import * as DOMUtils from "../../utils/dom";

const example = `cinderella({ loop: true, direction: "alternate" })
  .add({
    targets: ".triangle",
    transform: {
      translateX: {
        from: 0,
        to: "500px"
      },
      rotateZ: {
        from: 0,
        to: "180deg"
      }
    },
    defaults: {
      easing: "easeInOutQuart",
      delay: 100,
      duration: 1000
    }
  })
  .play()`;

export default class Example extends Component {
  componentDidMount() {
    this.animation = cinderella({
      loop: true,
      direction: "alternate"
    })
      .add({
        targets: this.triangle,
        transform: {
          translateX: {
            from: 0,
            to: `${DOMUtils.getWidth(this.container) -
              DOMUtils.getWidth(this.triangle)}px`
          },
          rotateZ: {
            from: 0,
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
    if (!el) return;
    this.triangle = findDOMNode(el);
  };

  containerRef = el => {
    if (!el) return;
    this.container = findDOMNode(el);
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
