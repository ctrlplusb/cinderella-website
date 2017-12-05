import React, { Component } from "react";
import { findDOMNode } from "react-dom";
import g from "glamorous";
import cinderella from "cinderella";

const blockMargin = 5;
const blockSize = 20;

const Container = g.div({
  height: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center"
});

const Block = g.div({
  height: blockSize,
  width: blockSize,
  margin: blockMargin,
  backgroundColor: "#000",
  float: "left"
});

export default class DemoXX extends Component {
  constructor(props) {
    super(props);
    this.state = {
      blockCount: 0
    };
  }

  componentDidMount() {
    window.addEventListener("resize", this.createAnimation);
    this.createAnimation();
  }

  componentWillUnmount() {
    if (this.animation) {
      this.animation.stop();
    }
    window.removeEventListener("resize", this.createAnimation);
  }

  createAnimation = () => {
    if (this.animation) {
      this.animation.stop();
    }

    const container = findDOMNode(this.containerEl);
    const containerStyle = getComputedStyle(container);
    const containerWidth = parseFloat(
      containerStyle.width.replace(/[^0-9.]+/i, ""),
      10
    );
    const containerHeight = parseFloat(
      containerStyle.height.replace(/[^0-9.]+/i, ""),
      10
    );

    const blockSizeWithMarg = blockSize + blockMargin * 2;
    const blocksPerRow = Math.floor(containerWidth / blockSizeWithMarg);
    const blocksPerCol = Math.floor(containerHeight / blockSizeWithMarg);

    this.animation = cinderella({
      loop: true,
      direction: "alternate"
    }).add({
      targets: ".block",
      transform: {
        scale: {
          from: 0,
          to: 1.5
        },
        rotate: {
          from: 0,
          to: "360deg"
        }
      },
      defaults: {
        delay: 500,
        duration: 1500,
        easing: "easeInOutCubic"
      }
    });

    this.innerContainer.style.width = `${blocksPerRow * blockSizeWithMarg}px`;
    this.innerContainer.style.height = `${blocksPerCol * blockSizeWithMarg}px`;

    this.setState(
      {
        blockCount: blocksPerRow * blocksPerCol
      },
      () => {
        this.animation.play();
      }
    );
  };

  containerRef = el => {
    this.containerEl = el;
  };

  innerContainerRef = domNode => {
    this.innerContainer = domNode;
  };

  render() {
    const { blockCount } = this.state;
    return (
      <Container innerRef={this.containerRef} height="100%">
        <div ref={this.innerContainerRef}>
          {[...new Array(blockCount)].map((_, idx) => (
            <Block key={idx} className="block" />
          ))}
        </div>
      </Container>
    );
  }
}
