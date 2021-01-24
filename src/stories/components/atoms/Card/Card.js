import React from "react";
import PropTypes from "prop-types";
import { Wrapper } from "./style";

export const Card = ({ children, ...props }) => {
  return <Wrapper {...props}>{children}</Wrapper>;
};

Card.propTypes = {
  children: PropTypes.element,
};

Card.defaultProps = {
  children: "Hello World!",
};
