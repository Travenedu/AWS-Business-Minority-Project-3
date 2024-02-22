/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const Button = ({ label = "Button", size, isDisabled, variation, className }) => {
  return (
    <button className={`button ${size} ${variation} is-disabled-${isDisabled} ${className}`}>
      <div className="label">{label}</div>
    </button>
  );
};

Button.propTypes = {
  label: PropTypes.string,
  size: PropTypes.oneOf(["large", "small", "default"]),
  isDisabled: PropTypes.bool,
  variation: PropTypes.oneOf(["warning", "destructive", "default", "primary", "link"]),
};
