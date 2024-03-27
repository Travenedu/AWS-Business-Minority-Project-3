import React from "react";
import { CtaSection } from "../../Components/CtaSection";
import { Features } from "../../Components/Features";
import { HeroLayout } from "../../Components/HeroLayout";
import { MarketingFooter } from "../../Components/MarketingFooter";
import { NavBarHeader } from "../../Components/NavBarHeader";
import "./style.css";

export const MarketingPage = () => {
  return (
    <div className="marketing-page">
      {/* <NavBarHeader className="nav-bar-header-2" /> */}
      <HeroLayout className="hero-layout-1" eyebrowClassName="hero-layout-instance" mode="light" />
      <Features
        className="features-x"
        text="Shop Student Clothing Brands"
        text1="If you are hungry and looking for a home cooked meal then ordering from our cooking entrepreneurs is the way to go."
        text2="Get Hair Services"
        text3="Get Your Nails Done"
        text4="Get Plates of Food"
      />
      <CtaSection className="CTA-section-instance" />
      <MarketingFooter className="marketing-footer-instance" />
    </div>
  );
};
