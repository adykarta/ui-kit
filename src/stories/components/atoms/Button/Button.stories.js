import React from "react";

import { Button } from "./Button";

export default {
  title: "Atoms/Button",
  component: Button,
  argTypes: {
    backgroundColor: { control: "color" },
  },
};

const Template = (args) => <Button {...args} />;

export const Preview = Template.bind({});
Preview.args = {
  primary: true,
  label: "Button",
};
