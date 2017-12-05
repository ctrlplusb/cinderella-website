import React from "react";
import { Paragraph, Notes } from "../../../styled";

export default {
  Prose: () => (
    <div>
      <Notes>
        In an attempt to keep things interesting the tutorial is in a story
        format. Every time you see a block like this it will contain the more
        "serious" text.
      </Notes>
      <Paragraph>
        Once upon a time there lived a <em>.triangle</em> that was renowned for
        his difficult nature.
      </Paragraph>
      <Paragraph>
        Any invitation to enjoy movement was met with contempt and anger.
      </Paragraph>
      <Paragraph>
        He believed himself to be happy in his static isolation.
      </Paragraph>
    </div>
  )
};
