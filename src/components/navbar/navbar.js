import React from "react";
import { Link } from "react-scroll";
import "./navbar.css";

const Navbar = () => (
  <nav>
    <div className="row">
      <div className="col-lg-6">
        <div className="row" id="navbarLinks">
          <Link
            className="nav-link"
            spy={true}
            to="home"
            smooth="easeInOutQuart"
            href="#about"
            id="aboutNavLink"
          >
            ROBERT KYUPELYAN
          </Link>
          <div className="nav-link">|</div>
          <Link
            className="nav-link"
            activeClass="nav-link-active"
            spy={true}
            to="about"
            smooth="easeInOutQuart"
            href="#about"
            id="aboutNavLink"
          >
            ABOUT
          </Link>
          <Link
            className="nav-link"
            activeClass="nav-link-active"
            spy={true}
            to="skills"
            smooth="easeInOutQuart"
            href="#skills"
            id="projectsNavLink"
          >
            SKILLS
          </Link>
          <Link
            className="nav-link"
            activeClass="nav-link-active"
            spy={true}
            to="projects"
            smooth="easeInOutQuart"
            href="#projects"
            id="contactNavLink"
          >
            PROJECTS
          </Link>
        </div>
      </div>
      <div className="col-lg-6">
        <div className="row" id="navbarSocial">
          <a
            href="https://github.com/Robk67"
            className="btn btn-default btn-circle"
            id="navSocialButton"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa fa-github" />
          </a>
          <a
            href="mailto:robkyupelyan@gmail.com"
            className="btn btn-default btn-circle"
            id="navSocialButton"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa fa-envelope" />
          </a>
          <a
            href="https://www.linkedin.com/in/robert-kyupelyan-ab9184142"
            className="btn btn-default btn-circle"
            id="navSocialButton"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa fa-linkedin" />
          </a>
        </div>
      </div>
    </div>
  </nav>
);

export default Navbar;
