import React from "react";
import "./about.css";

const About = () => (
  <div className="section" id="about">
    <div className="aboutSectionBody">
      <div className="sectionTitle">ABOUT</div>
      <div className="row">
        <div className="aboutDescription">
          <p>
            My name is Robert and I am a mobile developer based in Los Angeles,
            CA. Aside from mobile development, I enjoy working on web-based
            projects and anything involving augmented or virtual reality. My
            personal projects can be found in my GitHub repository.
          </p>
          <br />
          <p>
            I graduated from California State University, Northridge in 2018
            with a Bachelor's of Science in Computer Science. I have been
            working as a Lead Developer in Medtronic, Diabetes mobile
            development team for the past few years. Using my professional
            experience, I am working on devices and software that will make a
            difference in the diabetes medical device industry.
          </p>
        </div>
      </div>
    </div>
  </div>
);

export default About;
