/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { Myicon9 } from "../../icons/Myicon9";
import "./style.css";

export const Features = ({
  className,
  text = "Feature A",
  text1 = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.",
  text2 = "Feature B",
  text3 = "Feature C",
  text4 = "Feature D",
}) => {
  return (
    <div className={`features ${className}`}>
      <div className="frame-2">
        <div className="frame-3">
          <div className="frame-4">
            <div className="my-icon-wrapper">
              <Myicon9 className="my-icon" color="#950404" />
            </div>
            <div className="text-wrapper-2">{text}</div>
            <p className="lorem-ipsum-dolor">{text1}</p>
          </div>
          <div className="frame-4">
            <div className="my-icon-wrapper">
              <Myicon9 className="my-icon" color="#950404" />
            </div>
            <div className="text-wrapper-2">{text2}</div>
            <p className="lorem-ipsum-dolor">{text1}</p>
          </div>
        </div>
        <div className="frame-3">
          <div className="frame-5">
            <div className="my-icon-wrapper">
              <Myicon9 className="my-icon" color="#950404" />
            </div>
            <div className="feature-c">{text3}</div>
            <p className="p">{text1}</p>
          </div>
          <div className="frame-4">
            <div className="my-icon-wrapper">
              <Myicon9 className="my-icon" color="#950404" />
            </div>
            <div className="text-wrapper-2">{text4}</div>
            <p className="lorem-ipsum-dolor">{text1}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

Features.propTypes = {
  text: PropTypes.string,
  text1: PropTypes.string,
  text2: PropTypes.string,
  text3: PropTypes.string,
  text4: PropTypes.string,
};
