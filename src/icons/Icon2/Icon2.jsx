/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

export const Icon2 = ({ color = "#950404", className }) => {
  return (
    <svg
      className={`icon-2 ${className}`}
      fill="none"
      height="14"
      viewBox="0 0 14 14"
      width="14"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect className="rect" fill={color} height="13" rx="4" width="13" x="0.333984" y="0.333374" />
      <path
        className="path"
        d="M5.44478 8.79393L3.24878 6.59793L2.50098 7.34046L5.44478 10.2843L11.7642 3.96482L11.0217 3.22229L5.44478 8.79393Z"
        fill="white"
      />
    </svg>
  );
};

Icon2.propTypes = {
  color: PropTypes.string,
};
