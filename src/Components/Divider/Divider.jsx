/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const Divider = ({ size, orientation, className }) => {
  return <div className={`divider size-4-${size} ${orientation} ${className}`} />;
};

Divider.propTypes = {
  size: PropTypes.oneOf(["default", "large", "small"]),
  orientation: PropTypes.oneOf(["vertical", "horizontal"]),
};
