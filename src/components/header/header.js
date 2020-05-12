import React from "react";
import { Link } from "react-scroll";
import "./header.css";

const Header = () => (
  <div className="section" id="home">
    <div className="header">
      <div className="headerName">
        <p>ROBERT KYUPELYAN</p>
      </div>
      <div className="headerDescription">
        <p>
          Software developer by day ... pretty much the same thing by night.
        </p>
      </div>
      <div className="headerButtons">
        <a
          href="https://github.com/Robk67"
          className="btn btn-default btn-circle"
          id="headerSocialButton"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fa fa-github" />
        </a>
        <a
          href="mailto:robkyupelyan@gmail.com"
          className="btn btn-default btn-circle"
          id="headerSocialButton"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fa fa-envelope" />
        </a>
        <a
          href="https://www.linkedin.com/in/robert-kyupelyan-ab9184142"
          className="btn btn-default btn-circle"
          id="headerSocialButton"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fa fa-linkedin" />
        </a>
      </div>
      <div className="headerGoButton">
        <Link
          className="btn btn-primary btn-xl"
          id="findOutMoreButton"
          to="about"
          smooth="true"
        >
          FIND OUT MORE
        </Link>
      </div>
    </div>
  </div>
);

export default Header;
