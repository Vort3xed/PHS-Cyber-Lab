import React from "react";
import translation from '../../locales/en-US/translation.json';

const HeroSection: React.FC = () => (
  <div>
    <div className=" header">
      <div className="hero-section-bg" />
      <div className="row">
        <div className="col-md-6">
          <p className="about-us-header-title">{translation.translation.label["about-hero-title"]}</p>
          <p className="about-us-header-description">
            {translation.translation.label["about-hero-description"]}
          </p>
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSetuS9NoSRrWJe075z2BJaA3Zs70SZ61v840IovB2xKyQEiug/viewform?usp=sf_link"
            target="_blank"
            rel="noopener noreferrer">
              
            <button className="btn home-primary-btn">{translation.translation.button["join-team"]}</button>
          </a>
          
        </div>
        <div className="col-md-6 header-img">
          <div className="d-flex justify-content-center">
            <img
              src="/assets/aboutus/everyone.jpg"
              alt="About Us header"
              className="about-us-header-img"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default HeroSection;
