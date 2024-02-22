/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const TextAreaField = ({
  size,
  isDisabled,
  labelHidden,
  variation,
  className,
  text = "Label",
  text1 = "Placeholder",
}) => {
  return (
    <div
      className={`text-area-field size-4-${size} label-hidden-2-${labelHidden} is-disabled-3-${isDisabled} variation-1-${variation} ${className}`}
    >
      {!labelHidden && <div className="label-4">{text}</div>}

      <div className="input-group-2">
        {variation === "default" && (
          <div className="placeholder-wrapper">
            <div className="placeholder-2">{text1}</div>
          </div>
        )}

        {variation === "quiet" && (
          <>
            <div className="div-wrapper">
              <div className="placeholder-3">{text1}</div>
            </div>
            <img className="img" alt="Border" src="/img/border.svg" />
          </>
        )}
      </div>
    </div>
  );
};

TextAreaField.propTypes = {
  size: PropTypes.oneOf(["large", "small", "default"]),
  isDisabled: PropTypes.bool,
  labelHidden: PropTypes.bool,
  variation: PropTypes.oneOf(["quiet", "default"]),
  text: PropTypes.string,
  text1: PropTypes.string,
};
