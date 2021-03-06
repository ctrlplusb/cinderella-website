import React from "react";
import g from "glamorous";
import cinderella from "cinderella";
import Triangle from "../../../components/Triangle";
import { Paragraph } from "../../../styled/index";

export default {
  description: (
    <Paragraph>
      A simple transformation targetting a single property; rotating the target
      180deg using the default easing (linear) over a period of 1000ms.
    </Paragraph>
  ),
  source: `cinderella()
  .add({
    targets: ".triangle",
    transform: {
      rotate: {
        from: 0,
        to: '180deg',
        duration: 1000,
      }
    }
  })
  .play();`,
  animationFactory: () =>
    cinderella().add({
      targets: ".triangle",
      transform: {
        rotate: {
          from: 0,
          to: "180deg"
        }
      },
      defaults: {
        duration: 1000
      }
    }),
  View: () => (
    <g.Div
      flexGrow="1"
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <Triangle className="triangle" />
    </g.Div>
  )
};
