import React from "react";
import PropTypes from "prop-types";
import { Wrapper, Loader, WrapperLoader } from "./style.js";

/**
 * Primary UI component for user interaction
 */
export const Button = ({
  primary,
  backgroundColor,
  size,
  label,
  isLoading,
  ...props
}) => {
  const mode = primary
    ? "storybook-button--primary"
    : "storybook-button--secondary";
  return (
    <Wrapper>
      {isLoading ? (
        <WrapperLoader
          className={[
            "storybook-button",
            `storybook-button--${size}`,
            mode,
          ].join(" ")}
        >
          <Loader primary={primary} />
        </WrapperLoader>
      ) : (
        <button
          type="button"
          className={[
            "storybook-button",
            `storybook-button--${size}`,
            mode,
          ].join(" ")}
          style={backgroundColor && { backgroundColor }}
          {...props}
        >
          {label}
        </button>
      )}
    </Wrapper>
  );
};

Button.propTypes = {
  /**
   * Is this the principal call to action on the page?
   */
  primary: PropTypes.bool,
  /**
   * What background color to use
   */
  backgroundColor: PropTypes.string,
  /**
   * How large should the button be?
   */
  size: PropTypes.oneOf(["small", "medium", "large"]),
  /**
   * Button contents
   */
  label: PropTypes.string.isRequired,
  /**
   * Optional click handler
   */
  onClick: PropTypes.func,
  /**
   * Is this a loading button?
   */
  isLoading: PropTypes.bool,
};

Button.defaultProps = {
  backgroundColor: null,
  primary: false,
  size: "medium",
  onClick: undefined,
  isLoading: false,
};
