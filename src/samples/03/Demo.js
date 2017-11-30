import React, { Component } from "react";
import g from "glamorous";
import cinderella from "cinderella";

const Container = g.div({
  height: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center"
});

const Block = g.div({
  height: 50,
  width: 50,
  backgroundColor: "#000"
});

export default class Demo03 extends Component {
  componentDidMount() {
    this.animation = cinderella({ loop: true })
      .add({
        targets: ".block",
        transform: {
          translateY: [
            {
              delay: 500,
              from: 0,
              to: "-100px",
              duration: 400,
              easing: "easeOutCubic"
            },
            {
              to: "0px",
              duration: 700,
              easing: "easeOutBounce"
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

  render() {
    return (
      <Container height="100%">
        <Block className="block" />
      </Container>
    );
  }
}
