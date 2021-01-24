import React from "react";
import PropTypes from "prop-types";
import { Wrapper } from "./style";

export const Skeleton = ({ height, width }) => {
  return <Wrapper width={width} height={height} />;
};

Skeleton.propTypes = {
  height: PropTypes.string,
  width: PropTypes.string,
};

Skeleton.defaultProps = {
  height: "1.3em",
  width: "100%",
};
