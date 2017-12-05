import React, { Component } from "react";
import g from "glamorous";
import cinderella from "cinderella";
import Triangle from "../../../components/Triangle";

export default {
  source: `cinderella()
  .add({
    targets: ".block",
    transform: {
      rotate: {
        from: 0,
        to: '180deg',
        duration: 1000,
      }
    }
  })
  .play();
`,
  Demo: class Demo01 extends Component {
    componentDidMount() {
      this.animation = cinderella()
        .add({
          targets: ".block",
          transform: {
            rotate: {
              from: 0,
              to: "180deg"
            }
          },
          defaults: {
            duration: 1000
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
        <g.Div
          height="100%"
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <Triangle className="block" />
        </g.Div>
      );
    }
  }
};
