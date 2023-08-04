import React from 'react';
import {translation} from '../../locales/en-US/translation.json';

const Footer: React.FC = () => (
  <footer className="footer-section mt-3">
    <div className="footer-container">
      <div className="footer-content pt-5 pb-5">
        <div className="row">
          <div className="col-xl-4 col-lg-4 mb-50">
            <div className="footer-widget">
              <div className="footer-logo d-flex gap-4 mb-2 align-items-center">
                <a href="/">
                  <img src="/assets/cleancyberlablogocropped.png" className="img-fluid" width="100px" alt="logo" />
                </a>
              </div>
              <div className="footer-text">
                <p>{translation.label["footer-description"]}</p>
                <div className="row social-media-row mb-3">
                  
                  <div className="col-lg-1 col-md-1 col-sm-1 social-media-col">
                    <a href={translation.label["instagram-link"]} rel="noreferrer" target="_blank">
                      <i className="bi bi-instagram social-media-icons text-white" />
                    </a>
                  </div>

                  <div className="col-lg-1 col-md-1 col-sm-1 social-media-col">
                    <a href="mailto:contact@phscyberlab.org" rel="noreferrer" target="_blank">
                      {/* <i className="bi bi-instagram social-media-icons text-white" /> */}
                      <i className="fa footer-email-icon fa-envelope text-white" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-xl-4 col-lg-4 col-md-6 mb-30">
            <div className="footer-widget">
              <div className="footer-widget-heading">
                <h3>{translation.label["footer-useful-link-title"]}</h3>
              </div>
              <ul>
                <li>
                  <a href="/">{translation.label["footer-useful-link-home"]}</a>
                </li>
                <li>
                  <a href="/contact">{translation.label["footer-useful-link-contact-us"]}</a>
                </li>
                <li>
                  <a href="/documents/501c3 status.pdf">{translation.label["footer-useful-link-blog"]}</a>
                </li>
                <li>
                  <a href="/documents/sponsorship_confirmation.pdf">{translation.label["footer-useful-link-event"]}</a>
                </li>
                <li>
                  <a href="/">{translation.label["footer-useful-link-code-of-conduct"]}</a>
                </li>
                <li>
                  <a href="/documents/w9_form.pdf">{translation.label["footer-useful-link-brand-assets"]}</a>
                </li>
              </ul>
            </div>
          </div>

          {/* <div className="col-xl-4 col-lg-4 col-md-6 mb-30">
            <div className="footer-widget">
              <div className="footer-widget-heading">
                <h3>{translation.label["footer-subscribe-title"]}</h3>
              </div>
              <div className="footer-text mb-25">
                <p>{translation.label["footer-subscribe-description"]}</p>
              </div>
              <div className="subscribe-email-section">
                <form action="#">
                  <input type="text" placeholder="Email Address" />
                  <button type="submit">
                    <i className="fa fa-envelope" />
                  </button>
                </form>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </div>

    <div className="copyright-area">
      <div className="container">
        <div className="row">
          <div className="col-xl-12 col-lg-12 text-center">
            <div className="copyright-text">
              <p>
                {translation.label["footer-copyright"]} &copy; {translation.label["footer-reserved"]}&nbsp;
                <a href="/">{translation.label["footer-phscyberlab"]}</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;