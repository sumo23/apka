import React from "react";

import { storiesOf } from "@storybook/react";
import { withKnobs, object } from "@storybook/addon-knobs/react";
import { action } from "@storybook/addon-actions";

import AnswerPicker from "../components/AnswerPicker";
import { questions } from "../questions";

export const actions = {
  onPick: action("onPick")
};

storiesOf("AnswerPicker", module)
  .addDecorator(withKnobs)
  .add("default", () => (
    <AnswerPicker
      {...actions}
      answers={object("answers", questions[0].answers)}
    />
  ));
