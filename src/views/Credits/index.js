import React, { Component } from "react";
import { findDOMNode } from "react-dom";
import cinderella from "cinderella";
import * as Styled from "./styled";

export default class Credits extends Component {
  componentDidMount() {
    const containerStyle = getComputedStyle(this.container);
    const containerHeight = parseFloat(
      containerStyle.height.replace(/[^0-9.]/i, "")
    );
    const creditsStyle = getComputedStyle(this.credits);
    const creditsHeight = parseFloat(
      creditsStyle.height.replace(/[^0-9.]/i, "")
    );
    const offset = containerHeight / 2 + creditsHeight / 2;

    this.animation = cinderella({ loop: true })
      .add({
        targets: this.credits,
        transform: {
          translateY: {
            from: `${offset}px`,
            to: `-${offset}px`,
            duration: Math.round(containerHeight / 50 * 1000)
          }
        }
      })
      .play();
  }

  containerRef = el => {
    if (el) {
      this.container = findDOMNode(el);
    }
  };

  creditRef = domNode => {
    this.credits = domNode;
  };

  onCreditMouseOver = () => {
    if (this.animation) {
      this.animation.pause();
    }
  };

  onCreditMouseOut = () => {
    if (this.animation) {
      this.animation.play();
    }
  };

  render() {
    return (
      <Styled.Container innerRef={this.containerRef}>
        <div
          ref={this.creditRef}
          onMouseOver={this.onCreditMouseOver}
          onMouseOut={this.onCreditMouseOut}
        >
          <Styled.Paragraph>
            Produced with{" "}
            <span role="img" aria-label="love">
              ❤️
            </span>{" "}
            by Sean Matheson<br />
            <a href="https://twitter.com/controlplusb">@controlplusb</a>
          </Styled.Paragraph>
          <Styled.Paragraph>
            Hugely inspired by <a href="animejs.com">animejs</a>
            <br />
            from Julian Garnier
            <br />
            <a href="https://twitter.com/JulianGarnier">@JulianGarnier</a>
          </Styled.Paragraph>
          <Styled.Paragraph>
            Huge{" "}
            <span role="img" aria-label="kiss">
              💋
            </span>{" "}
            to Mark O'Connor<br />
            for donating the name
          </Styled.Paragraph>
        </div>
        <Styled.FadeOutTop />
        <Styled.FadeInBottom />
      </Styled.Container>
    );
  }
}
