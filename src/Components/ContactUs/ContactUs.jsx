/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";
import { Myicon } from "../../icons/Myicon";
import { TypeTwitter } from "../../icons/TypeTwitter";
import { Button } from "../Button";
import { CheckboxField } from "../CheckboxField";
import { TextAreaField } from "../TextAreaField";
import { TextField } from "../TextField";
import "./style.css";

export const ContactUs = ({
  className,
  icon = <Myicon className="icon-instance-node" />,
  override = <TypeTwitter className="icon-instance-node" />,
}) => {
  return (
    <div className={`contact-us ${className}`}>
      <div className="frame-2">
        <TextField
          className="text-field-instance"
          isDisabled={false}
          labelHidden={false}
          size="default"
          text="First name"
          text1=""
          variation="default"
        />
        <TextField
          className="text-field-instance"
          isDisabled={false}
          labelHidden={false}
          size="default"
          text="Last name"
          text1=""
          variation="default"
        />
      </div>
      <TextField
        className="design-component-instance-node"
        isDisabled={false}
        labelHidden={false}
        size="default"
        text="Email address"
        text1=""
        variation="default"
      />
      <TextAreaField
        className="design-component-instance-node"
        isDisabled={false}
        labelHidden={false}
        size="default"
        text="Message"
        text1=""
        variation="default"
      />
      <CheckboxField
        className="checkbox-field-instance"
        defaultChecked={false}
        isDisabled={false}
        labelPosition="end"
        size="default"
        text="You agree to our Privacy Policy"
      />
      <Button className="button-2" isDisabled={false} label="Send message" size="large" variation="primary" />
      <div className="frame-3">
        <div className="frame-4">
          {icon}
          <div className="text-wrapper-2">Instagram</div>
        </div>
        <div className="frame-4">
          {override}
          <div className="text-wrapper-2">Twitter</div>
        </div>
      </div>
    </div>
  );
};
