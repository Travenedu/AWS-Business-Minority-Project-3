/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const Heading = ({ label = "Heading", level, className }) => {
  return (
    <div className={`heading ${level} ${className}`}>
      <div className="label-2">{label}</div>
    </div>
  );
};

Heading.propTypes = {
  label: PropTypes.string,
  level: PropTypes.oneOf(["two", "three", "four", "one", "five", "six"]),
};
