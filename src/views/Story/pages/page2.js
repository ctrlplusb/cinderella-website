import React from "react";
import Code from "../../../components/Code/index";
import { Notes, Paragraph } from "../../../styled";

export default {
  Prose: () => (
    <div>
      <Paragraph>
        On one fine day an unexpected traveller arrived in town.
      </Paragraph>
      <Code source="const cinderella = require('cinderella')" />
      <Notes>
        The "cinderella" module exports a function which is used to do all the
        things. All of your animation definitions will be created using this.
      </Notes>
      <Paragraph>
        The traveller overheard others talking of <em>.triangle</em>, and noted
        how quickly concluded him to be unfriendly.
      </Paragraph>
      <Paragraph>
        Within her heart she believed that <em>.triangle</em> was really sad.
        She set out to restore his passion for movement.
      </Paragraph>
    </div>
  )
};
