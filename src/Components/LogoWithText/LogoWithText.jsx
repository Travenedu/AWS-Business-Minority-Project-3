/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { Myicon } from "../../icons/Myicon";
import "./style.css";

export const LogoWithText = ({ color, colorNeutralClassName, logoClassName }) => {
  return (
    <>
      {color === "neutral" && (
        <div className={`logo-with-text color-neutral ${colorNeutralClassName}`}>
          <div className={`logo ${logoClassName}`}>
            <Myicon className="type-shopping-bag" />
          </div>
        </div>
      )}

      {color === "brand" && (
        <img
          className={`logo-with-text color-brand ${colorNeutralClassName}`}
          alt="Color brand"
          src="/img/color-brand.svg"
        />
      )}
    </>
  );
};

LogoWithText.propTypes = {
  color: PropTypes.oneOf(["neutral", "brand"]),
};
