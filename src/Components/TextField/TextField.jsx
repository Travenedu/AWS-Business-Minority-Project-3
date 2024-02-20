/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const TextField = ({
  size,
  isDisabled,
  labelHidden,
  variation,
  text = "Placeholder",
  inputType = "text",
  inputType1 = "text",
}) => {
  return (
    <div
      className={`text-field size-0-${size} label-hidden-${labelHidden} is-disabled-1-${isDisabled} variation-0-${variation}`}
    >
      {!labelHidden && <div className="label-2">Label</div>}

      <div className="input-group">
        {variation === "default" && <input className="input" placeholder={text} type={inputType} />}

        {variation === "quiet" && (
          <>
            <input className="placeholder" placeholder={text} type={inputType1} />
            <img className="border" alt="Border" src="/img/border-5.svg" />
          </>
        )}
      </div>
    </div>
  );
};

TextField.propTypes = {
  size: PropTypes.oneOf(["large", "small", "default"]),
  isDisabled: PropTypes.bool,
  labelHidden: PropTypes.bool,
  variation: PropTypes.oneOf(["quiet", "default"]),
  text: PropTypes.string,
  inputType: PropTypes.string,
  inputType1: PropTypes.string,
};
