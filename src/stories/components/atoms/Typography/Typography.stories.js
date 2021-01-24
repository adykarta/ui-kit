import React from "react";

import { Typography } from "./Typography";

export default {
  title: "Atoms/Typography",
  component: Typography,
  argTypes: {
    color: { control: "color" },
  },
};

const Template = (args) => <Typography {...args} />;

export const Preview = Template.bind({});
Preview.args = {
  text: "Hello World!",
  size: 100,
  color: "black",
  weight: 300,
};
