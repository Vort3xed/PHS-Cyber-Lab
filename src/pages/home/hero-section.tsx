import translation from '../../locales/en-US/translation.json';
import React from "react";
import { ShowModel } from "../../components/logo-3d-model/ShowModel";


const HeroSection: React.FC = () => (
  <div className="container mb-5">
    <div className="hero-section-bg" />
    <div className="row">
      <div className="col-sm-12 col-md-6 col-lg-6">
        <h1 className="home-header-title">{translation.translation.label["home-hero-title"]}</h1>
        <p className="home-header-description">
        {translation.translation.label["home-hero-description"]}
        </p>
        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLSc_am-PviAvGhkDkdb0cgP9DLJBDwWDMtAbcAKrHwRwNmmuww/viewform?usp=sf_link"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="btn home-primary-btn">{translation.translation.button["join"]}</button>
        </a>
      </div>

      <div className="col-sm-12 home-header-story">
        <div className="d-flex justify-content-center">
          <img src="/assets/home_header.png" alt="home header" className="home-header-img" />
        </div>
      </div>
      <div className="col-sm-12 col-md-6 col-lg-6 home-3d-model">
        {/* <MyModel /> */}
        {/* <BabylonScene modelPath="assets/Low_Poly_Laptop.gltf" /> */}

        {/* Credits to Sumeet Mahata for putting the club logo on the laptop screen! */}

        <ShowModel />

      </div>
    </div>
  </div>
);

export default HeroSection;
