/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";
import { Button } from "../Button";
import { Divider } from "../Divider";
import { LogoWithText } from "../LogoWithText";
import { TextField } from "../TextField";
import "./style.css";

export const MarketingFooter = ({ className }) => {
  return (
    <div className={`marketing-footer ${className}`}>
      <div className="frame-7">
        <div className="frame-8">
          <p className="text-wrapper-6">Sign up for our newsletter</p>
          <div className="text-wrapper-7">No spam. We promise.</div>
        </div>
        <div className="frame-9">
          <TextField isDisabled={false} labelHidden size="default" text="Your email" variation="default" />
          <Button className="button-2" isDisabled={false} label="Subscribe" size="default" variation="default" />
        </div>
      </div>
      <Divider className="divider-instance" orientation="horizontal" size="small" />
      <div className="frame-10">
        <div className="frame-11">
          <div className="text-wrapper-8">Products</div>
          <div className="text-wrapper-9">Libraries</div>
          <div className="text-wrapper-9">CLI</div>
          <div className="text-wrapper-9">Studio</div>
          <div className="text-wrapper-9">Hosting</div>
        </div>
        <div className="frame-11">
          <div className="text-wrapper-8">Resources</div>
          <div className="text-wrapper-9">Docs</div>
          <div className="text-wrapper-9">Learn</div>
          <div className="text-wrapper-9">Examples</div>
          <div className="text-wrapper-9">Changelog</div>
        </div>
        <div className="frame-11">
          <div className="text-wrapper-8">Company</div>
          <div className="text-wrapper-9">About us</div>
          <div className="text-wrapper-9">Contact</div>
          <div className="text-wrapper-9">Blog</div>
        </div>
      </div>
      <Divider className="divider-instance" orientation="horizontal" size="small" />
      <div className="frame-12">
        <LogoWithText color="neutral" colorNeutralClassName="logo-with-text" logoClassName="logo-with-text-instance" />
        <p className="text-wrapper-10">© 2023 AWS Amplify UI. All rights reserved.</p>
      </div>
    </div>
  );
};
