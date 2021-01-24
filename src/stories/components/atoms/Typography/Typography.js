import React from "react";
import PropTypes from "prop-types";
import { Wrapper, WrapperAnchor } from "./style";

export const Typography = ({
  color,
  size,
  text,
  weight,
  type,
  href,
  ...props
}) => {
  if (type === "anchor") {
    return (
      <WrapperAnchor
        className="anchor"
        color={color}
        weight={weight}
        size={size}
        href={href}
        {...props}
      >
        {text}
      </WrapperAnchor>
    );
  } else {
    return (
      <Wrapper
        className="typography"
        color={color}
        weight={weight}
        size={size}
        type={type}
        {...props}
      >
        {text}
      </Wrapper>
    );
  }
};

Typography.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOf([100, 200, 300, 400, 500, 600]),
  weight: PropTypes.oneOf([300, 600]),
  type: PropTypes.oneOf(["normal", "anchor", "heading"]),
  text: PropTypes.string.isRequired,
};

Typography.defaultProps = {
  color: "black",
  size: 100,
  text: "",
  weight: 300,
  type: "normal",
  href: "#",
};
