import React from "react";
import "./footer.css";
import { isMobile } from "react-device-detect";

const Footer = () => {
  if (isMobile) {
    return (
      <div className="footer">
        <div className="row">
          <div className="col">
            <a
              href="https://github.com/Robk67"
              className="btn btn-default btn-circle"
              id="footerSocialButton"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa fa-github" />
            </a>
          </div>
          <div className="col">
            <a
              href="mailto:robkyupelyan@gmail.com"
              className="btn btn-default btn-circle"
              id="footerSocialButton"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa fa-envelope" />
            </a>
          </div>
          <div className="col">
            <a
              href="https://www.linkedin.com/in/robert-kyupelyan-ab9184142"
              className="btn btn-default btn-circle"
              id="footerSocialButton"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa fa-linkedin" />
            </a>
          </div>
        </div>
      </div>
    );
  }
  return null;
};

export default Footer;
