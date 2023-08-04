import React from "react";
import HeroSection from "./hero-section";
import ResourcesSection from "./resources-section";
import ScrollToTop from "react-scroll-to-top";

const Resources: React.FC = () => (
  <div className="container">
    <ScrollToTop smooth className="scroll-to-top"/>
    <HeroSection />
    <ResourcesSection />
  </div>
);

export default Resources;