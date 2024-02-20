/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { Button } from "../Button";
import "./style.css";

export const HeroLayout = ({ mode, className, eyebrowClassName }) => {
  return (
    <div className={`hero-layout ${className}`}>
      <div className={`left ${mode}`}>
        <div className="hero-message">
          <div className="message">
            <div className={`eyebrow ${eyebrowClassName}`}>
              {mode === "light" && <>Customer</>}

              {mode === "dark" && <>Business Owner</>}
            </div>
            <div className="heading">
              {mode === "light" && (
                <p className="text-wrapper-11">Find college student black owned businesses on near Howard University</p>
              )}

              {mode === "dark" && <p className="text-wrapper-11">Build up your brand and gain a great community</p>}
            </div>
            <div className="body">
              {mode === "light" && (
                <p className="text-wrapper-11">
                  If you are in need of a quality product or service any you reside near the illustrious Howard
                  University, then look no further. HUEntrepenuer Network is the application for you. We are able to
                  connect you with students business owners that will help you get a quality experience for a fraction
                  of the price.
                </p>
              )}

              {mode === "dark" && (
                <p className="text-wrapper-11">
                  HUEntrepenuer Network is a great way to be able and grow you community here and find a new community
                  to market to.
                </p>
              )}
            </div>
          </div>
          <Button className="instance-node" isDisabled={false} label="Get started" size="large" variation="primary" />
        </div>
      </div>
    </div>
  );
};

HeroLayout.propTypes = {
  mode: PropTypes.oneOf(["dark", "light"]),
};
