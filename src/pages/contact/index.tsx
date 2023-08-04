import React from "react";
import HeroSection from "./hero-section";
// import ContactFormSection from "./contact-form-section";
import ScrollToTop from "react-scroll-to-top";
import DonateSection from "./donate-section";

const Contact: React.FC = () => (
  <div className="container">
    <ScrollToTop smooth className="scroll-to-top"/>
    <HeroSection />
    <DonateSection />
    {/* <ContactFormSection /> */}
  </div>
);

export default Contact;
