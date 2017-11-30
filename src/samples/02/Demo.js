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

export default class Demo02 extends Component {
  componentDidMount() {
    this.animation = cinderella({ loop: true })
      .add({
        targets: ".block",
        transform: {
          translateY: {
            from: 0,
            to: "-100px"
          },
          scale: {
            from: 0.5,
            to: 1
          }
        },
        defaults: {
          delay: 500,
          duration: 1500,
          easing: "easeOutElastic"
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
