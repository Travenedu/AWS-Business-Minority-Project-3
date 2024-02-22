/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";
import { Button } from "../Button";
import "./style.css";

export const NavBarHeader = ({ className }) => {
  return (
    <div className={`nav-bar-header ${className}`}>
      <div className="frame">
        <img className="amplify-mark" alt="Amplify mark" src="/img/amplify-mark.svg" />
        <div className="text-wrapper">Home</div>
        <div className="text-wrapper">Products</div>
        <div className="div">Pricing</div>
        <div className="text-wrapper">Contact</div>
      </div>
      <div className="actions">
        <Button className="button-instance" isDisabled={false} label="Log in" size="default" variation="link" />
        <Button className="button-instance" isDisabled={false} label="Sign up" size="default" variation="primary" />
      </div>
    </div>
  );
};
