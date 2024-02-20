/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

export const Myicon9 = ({ color = "#950404", className }) => {
  return (
    <svg
      className={`myicon-9 ${className}`}
      fill="none"
      height="18"
      viewBox="0 0 18 18"
      width="18"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path"
        d="M7.07604 11.7146L4.03542 8.67396L3 9.70208L7.07604 13.7781L15.826 5.02813L14.7979 4L7.07604 11.7146Z"
        fill={color}
      />
    </svg>
  );
};

Myicon9.propTypes = {
  color: PropTypes.string,
};
