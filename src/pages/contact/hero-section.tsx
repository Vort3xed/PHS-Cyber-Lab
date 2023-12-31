import React from 'react';
import translation from '../../locales/en-US/translation.json';

const HeroSection: React.FC = () => (
  <div className="container mb-5">
    <div className="hero-section-bg" />
    <div className="row">
      <div className="col-sm-12 col-md-7 col-lg-7">
        <h1 className="contact-us-header-title">{translation.translation.label["contact-hero-title"]}</h1>
        <p className="contact-us-header-description">
          {translation.translation.label["contact-hero-description"]}
        </p>

        {/* <div className="d-flex justify-content-start mb-2">
          <i className="fab fa-facebook fa-2x social-icon" />
          <span className="social-facebook-link">{translation.translation.label["fb-link"]}</span>
        </div> */}
        <div className="d-flex justify-content-start mb-2"> 
          <a href={translation.translation.label["instagram-link"]} target="_blank" rel="noopener noreferrer">
            <i className="fab fa-instagram fa-2x social-icon" />
            <span className="social-instagram-link">{translation.translation.label["instagram-link"]}</span>
          </a>
        </div>
        {/* <div className="d-flex justify-content-start mb-2">
          <i className="fab fa-linkedin fa-2x social-icon" />
          <span className="social-linkedin-link">{translation.translation.label["linkedin-link"]}</span>
        </div> */}
        {/* <div className="d-flex justify-content-start mb-2">
          <i className="fab fa-youtube fa-2x social-icon" style={{ color: '#FF0000'}} /> 
          <span className="social-youtube-link">{translation.translation.label["yt-link"]}</span>
        </div> */}
        <div className="d-flex justify-content-start mb-2">
          <i className="fab fa-github fa-2x social-icon" />
          <a href={translation.translation.label["github-link"]} target="_blank" rel="noopener noreferrer">
            <span className="social-github-link">{translation.translation.label["github-link"]}</span>
          </a>
        </div>

        <div className="d-flex justify-content-start mb-2">
        <i className="fab fa-discord fa-2x social-icon" />
        <a href={translation.translation.label["discord-link"]} target="_blank" rel="noopener noreferrer">
          <span className="social-discord-link">{translation.translation.label["discord-link"]}</span>
        </a>
        </div>

        <div className="d-flex justify-content-start mb-2">
        <i className="fa fa-2x fa-envelope" />
        <a href="mailto:contact@phscyberlab.org" target="_blank" rel="noopener noreferrer">
          <span className="social-email-link">{translation.translation.label["email-address"]}</span>
        </a>
        </div>
      </div>

      <div className="col-sm-12 col-md-5 col-lg-5">
        <div className="d-felx justify-content-center">
          <img src="/assets/contact_us_header.png" alt="home header" className="contact-us-header-img" />
        </div>
      </div>
    </div>
  </div>
);

export default HeroSection;