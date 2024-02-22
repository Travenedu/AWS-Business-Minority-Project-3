import React from "react";
import { ContactUs } from "../../Components/ContactUs";
import { Heading } from "../../Components/Heading";
import { MyIcon } from "../../Components/MyIcon";
import { NavBarHeader } from "../../Components/NavBarHeader";
import { Myicon1 } from "../../icons/Myicon1";
import { Myicon2 } from "../../icons/Myicon2";
import { TypeEmail } from "../../icons/TypeEmail";
import { TypePhone } from "../../icons/TypePhone";
import "./style.css";

export const LeaveAReview = () => {
  return (
    <div className="leave-a-review">
      <NavBarHeader
        className="nav-bar-header-2"
        divClassName="nav-bar-header-instance"
        divClassName1="nav-bar-header-instance"
        divClassName2="nav-bar-header-instance"
        divClassNameOverride="nav-bar-header-instance"
        hasAmplifyMark={false}
      />
      <div className="frame-5">
        <Heading className="heading-instance" label="Contact Us!" level="one" />
        <p className="p">Or contact us, we love to hear from our customers!</p>
      </div>
      <div className="frame-6">
        <div className="frame-7">
          <div className="frame-8">
            <TypeEmail className="my-icon-2" />
            <div className="text-wrapper-3">By email</div>
            <a href="mailto:HUEntrepenuer@gmail.com" rel="noopener noreferrer" target="_blank">
              <img className="huentrepenuer-gmail" alt="Huentrepenuer gmail" src="/img/huentrepenuer-gmail-com.png" />
            </a>
          </div>
          <div className="frame-8">
            <TypePhone className="my-icon-2" />
            <div className="text-wrapper-3">By phone</div>
            <div className="text-wrapper-4">+1 (123) 456-7890</div>
          </div>
          <div className="frame-8">
            <MyIcon type="location" />
            <div className="text-wrapper-3">In person</div>
            <p className="element-main-street">
              123 Main Street
              <br />
              Anytown, USA 12345
            </p>
          </div>
        </div>
        <ContactUs
          className="contact-us-instance"
          icon={<Myicon2 className="my-icon-2" />}
          override={<Myicon1 className="my-icon-2" />}
        />
      </div>
    </div>
  );
};
