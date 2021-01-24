import React from "react";

import { Skeleton } from "./Skeleton";

export default {
  title: "Atoms/Skeleton",
  component: Skeleton,
};

const Template = (args) => <Skeleton {...args} />;

export const Preview = Template.bind({});
Skeleton.args = {
  height: "1.3em",
  width: "100%",
};
