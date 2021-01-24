import React from "react";

import { Card } from "./Card";

export default {
  title: "Atoms/Card",
  component: Card,
};

const Template = (args) => <Card {...args} />;

export const Preview = Template.bind({});
Card.args = {
  children: "Hello World",
};
