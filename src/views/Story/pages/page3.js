import React from "react";
import cinderella from "cinderella";
import Code from "../../../components/Code";
import { Paragraph } from "../../../styled";

export default {
  Prose: () => (
    <Paragraph>Trying not to frighten him she gently rotated him...</Paragraph>
  ),
  animation: {
    source: `cinderella()
  .add({
    targets: '.triangle',
    transform: {
      rotate: {
        from: 0,
        to: '180deg',
        duration: 1000
      }
    }
  })
  .play()`,
    instance: cinderella().add({
      targets: ".triangle",
      transform: {
        rotate: {
          from: 0,
          to: "180deg",
          duration: 1000
        }
      }
    }),
    notes: (
      <div>
        <Paragraph>
          Ok, this is our first full animation so it is gonna require a hefty
          breakdown. Don't worry, these will get shorter as we will only
          introduce concepts not previously discussed.
        </Paragraph>
        <Paragraph>
          At first we called cinderella - this creates a new animation timeline:
        </Paragraph>
        <Code lineNumbers source="cinderella()" startLine={1} />
        <Paragraph>
          Then we added an animation sequence to the timeline:
        </Paragraph>
        <Code lineNumbers source="  .add({" startLine={2} />
        <Paragraph>
          The animation is targetting the triangle via a CSS selector:
        </Paragraph>
        <Code lineNumbers source="    targets: '.triangle'," startLine={3} />
        <Paragraph>
          If multiple nodes are matched by the selector, then all of them will
          animate. Additionally you can provide actual DOM nodes or even plain
          JS objects.
        </Paragraph>
        <Paragraph>
          The animation "transform" is used to contain all the transformations
          that we wish to apply to our "targets":
        </Paragraph>
        <Code lineNumbers source="    transform: {" startLine={4} />
        <Paragraph>
          In this animation we wish to rotate the triangle from to 0 to 180
          degrees over a period of 1000ms:
        </Paragraph>
        <Code
          lineNumbers
          source={`        rotate: {
          from: 0,
          to: "180deg",
          duration: 1000
        }`}
          startLine={5}
        />
        <Paragraph>
          As you can see above, the unit (e.g. deg) is only required on the
          "to".
        </Paragraph>
        <Paragraph>
          By default all transforms run using "linear" easing - i.e. the change
          of value is distributed evenly across the duration. This creates a
          very simple and smooth effect. Later we will show how you can select
          custom easings to give your animations more life.
        </Paragraph>
        <Paragraph>
          Finally we need to call ".play()" to start our animation:
        </Paragraph>
        <Code lineNumbers source="  .play()" startLine={4} />
      </div>
    )
  }
};
