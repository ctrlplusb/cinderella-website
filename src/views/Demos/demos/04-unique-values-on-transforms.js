import React from "react";
import g from "glamorous";
import cinderella from "cinderella";
import Triangle from "../../../components/Triangle";
import { Paragraph } from "../../../styled/index";

export default {
  description: (
    <div>
      <Paragraph>
        Transforming multiple properties; rotating the target 180deg whilst
        simultaneously scaling it. The default easing (linear) is used over a
        period of 1000ms.
      </Paragraph>
      <Paragraph>
        Note the usage of defaults which applies the duration to both
        transforms.
      </Paragraph>
    </div>
  ),
  source: `cinderella()
  .add({
    targets: ".triangle",
    transform: {
      scale: {
        from: 1,
        to: 2,
        easing: 'easeInOutQuad',
        duration: 1000
      },
      rotate: {
        from: 0,
        to: "180deg",
        easing: 'easeInOutElastic',
        duration: 2000
      }
    }
  })
  .play();`,
  animationFactory: () =>
    cinderella().add({
      targets: ".triangle",
      transform: {
        scale: {
          from: 1,
          to: 2,
          easing: "easeInOutQuad",
          duration: 1000
        },
        rotate: {
          from: 0,
          to: "180deg",
          easing: "easeInOutElastic",
          duration: 2000
        }
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
