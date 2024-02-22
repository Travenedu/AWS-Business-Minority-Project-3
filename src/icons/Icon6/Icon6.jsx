/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

export const Icon6 = ({ color = "#950404", className }) => {
  return (
    <svg
      className={`icon-6 ${className}`}
      fill="none"
      height="11"
      viewBox="0 0 11 11"
      width="11"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect className="rect" fill={color} height="10" rx="4" width="10" x="0.75" y="0.25" />
      <path
        className="path"
        d="M4.68146 6.75817L2.99222 5.06893L2.41699 5.64011L4.68146 7.90458L9.54257 3.04347L8.97139 2.47229L4.68146 6.75817Z"
        fill="white"
      />
    </svg>
  );
};

Icon6.propTypes = {
  color: PropTypes.string,
};
