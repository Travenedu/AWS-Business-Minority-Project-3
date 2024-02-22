/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";
import { Button } from "../Button";
import { TextField } from "../TextField";
import "./style.css";

export const CtaSection = ({ className }) => {
  return (
    <div className={`CTA-section ${className}`}>
      <div className="type-lock-up">
        <div className="frame-6">
          <div className="text-wrapper-3">Newsletter</div>
          <p className="text-wrapper-4">Stay in touch and never miss an update</p>
          <p className="text-wrapper-5">
            Keep up to date on the latest and greatest in the frontend and fullstack community
          </p>
        </div>
        <div className="form">
          <TextField isDisabled={false} labelHidden size="default" text="Email address" variation="default" />
          <Button
            className="design-component-instance-node"
            isDisabled={false}
            label="Sign me up"
            size="default"
            variation="primary"
          />
        </div>
      </div>
    </div>
  );
};
