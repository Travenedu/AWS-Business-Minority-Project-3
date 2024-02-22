/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

export const Icon10 = ({ color = "#EFF0F0", className }) => {
  return (
    <svg
      className={`icon-10 ${className}`}
      fill="none"
      height="19"
      viewBox="0 0 19 19"
      width="19"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect className="rect" fill={color} height="18" rx="4" width="18" x="0.25" y="0.25" />
      <path
        className="path"
        d="M7.32604 11.9646L4.28542 8.92396L3.25 9.95208L7.32604 14.0281L16.076 5.27813L15.0479 4.25L7.32604 11.9646Z"
        fill="white"
      />
    </svg>
  );
};

Icon10.propTypes = {
  color: PropTypes.string,
};
