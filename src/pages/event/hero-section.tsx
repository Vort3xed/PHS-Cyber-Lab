import React from 'react';
import {translation} from '../../locales/en-US/translation.json';

const HeroSection: React.FC = () => (
  <div className="container mb-5">
    <div className="hero-section-bg" />
    <div className="row">
      <div className="col-sm-12 col-md-7 col-lg-7">
        <h1 className="event-header-title">{translation.label["event-hero-title"]}</h1>
        <p className="event-header-description">
        {translation.label["event-hero-description"]}
        </p>
        
        
      </div>

      <div className="col-sm-12 col-md-5 col-lg-5">
        <div className="d-felx justify-content-center">
          <img src="/assets/events_header.png" alt="home header" className="event-header-img" />
        </div>
      </div>
    </div>
  </div>
);

export default HeroSection;