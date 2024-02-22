/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { Icon10 } from "../../icons/Icon10";
import { Icon2 } from "../../icons/Icon2";
import { Icon6 } from "../../icons/Icon6";
import "./style.css";

export const CheckboxField = ({ size, defaultChecked, isDisabled, labelPosition, className, text = "Checkbox" }) => {
  return (
    <div className={`checkbox-field size-11-${size} ${className}`}>
      <div
        className={`label-5 ${labelPosition} default-checked-${defaultChecked} size-12-${size} is-disabled-6-${isDisabled}`}
      >
        {labelPosition === "start" && <>{text}</>}

        {defaultChecked && labelPosition === "end" && size === "large" && (
          <Icon10 className="icon" color={!isDisabled ? "#950404" : "#EFF0F0"} />
        )}

        {defaultChecked && size === "default" && labelPosition === "end" && (
          <Icon2 className="icon-2" color={!isDisabled ? "#950404" : "#EFF0F0"} />
        )}

        {defaultChecked && size === "small" && labelPosition === "end" && (
          <Icon6 className="icon-6" color={!isDisabled ? "#950404" : "#EFF0F0"} />
        )}
      </div>
      <div
        className={`check-box label-position-${labelPosition} size-13-${size} default-checked-0-${defaultChecked} is-disabled-7-${isDisabled}`}
      >
        {labelPosition === "end" && <>{text}</>}

        {defaultChecked && labelPosition === "start" && size === "large" && (
          <Icon10 className="icon" color={!isDisabled ? "#950404" : "#EFF0F0"} />
        )}

        {defaultChecked && size === "default" && labelPosition === "start" && (
          <Icon2 className="icon-2" color={!isDisabled ? "#950404" : "#EFF0F0"} />
        )}

        {defaultChecked && labelPosition === "start" && size === "small" && (
          <Icon6 className="icon-6" color={!isDisabled ? "#950404" : "#EFF0F0"} />
        )}
      </div>
    </div>
  );
};

CheckboxField.propTypes = {
  size: PropTypes.oneOf(["large", "small", "default"]),
  defaultChecked: PropTypes.bool,
  isDisabled: PropTypes.bool,
  labelPosition: PropTypes.oneOf(["end", "start"]),
  text: PropTypes.string,
};
