import React, { Component } from "react";
import { findDOMNode } from "react-dom";
import g from "glamorous";
import cinderella from "cinderella";

const blockMargin = 5;
const blockSize = 20;

const Block = g.div({
  height: blockSize,
  width: blockSize,
  margin: blockMargin,
  backgroundColor: "pink",
  float: "left"
});

export default {
  source: `cinderella()
  .add({
    targets: ".block",
    transform: {
      translateY: {
        from: 0,
        to: "-100px",
      },
      rotate: {
        from: 0,
        to: '180deg',
      }
    },
    defaults: {
      duration: 1000
    }
  })
  .play();`,
  animationFactory: () =>
    cinderella().add({
      targets: ".block",
      transform: {
        opacity: {
          from: 0,
          to: 1,
          duration: 1
        },
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
        duration: 1500,
        easing: "easeInOutExpo"
      }
    }),
  View: class DemoXX extends Component {
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
      window.removeEventListener("resize", this.createAnimation);
    }

    createAnimation = () => {
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
      const blocksPerRow = Math.floor(containerWidth / blockSizeWithMarg) + 1;
      const blocksPerCol = Math.floor(containerHeight / blockSizeWithMarg) + 1;

      this.innerContainer.style.width = `${blocksPerRow * blockSizeWithMarg}px`;
      this.innerContainer.style.height = `${blocksPerCol *
        blockSizeWithMarg}px`;

      this.setState({
        blockCount: blocksPerRow * blocksPerCol
      });
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
        <g.Div
          position="fixed"
          top="0"
          left="0"
          width="100%"
          height="100%"
          zIndex="-1"
          innerRef={this.containerRef}
        >
          <div ref={this.innerContainerRef}>
            {[...new Array(blockCount)].map((_, idx) => (
              <Block key={idx} className="block" style={{ opacity: 0 }} />
            ))}
          </div>
        </g.Div>
      );
    }
  }
};
