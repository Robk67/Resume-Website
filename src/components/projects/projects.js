import React from "react";
import "./projects.css";
import { isMobile } from "react-device-detect";
import ProjectsMobile from "./projectsMobile";

const Projects = () => {
  if (isMobile) {
    return <ProjectsMobile />;
  }
  return (
    <div className="section" id="projects">
      <div className="sectionBody">
        <div className="sectionTitle">PROJECTS</div>
        <div className="row projectCardRow">
          <div className="col-md-4 projectCard">
            <div className="card-body projectCardBody">
              <div className="card-title row">
                <div className="col-sm-9" id="cardTitle">
                  Fouryears
                </div>
                <div className="col-sm-3">
                  <i className="fa fa-github" id="githubIconNA" />
                </div>
              </div>
              <p className="card-text">
                A web application built using the MEAN stack and was hosted
                using Amazon web services. Fouryears is an application that was
                designed to generate school schedules for students, ensuring
                that they would graduate from college in four years.
              </p>
            </div>
            <div className="projectCardFooter">
              <div className="row">
                <div className="col-sm-3 projectSkills">Angular</div>
                <div className="col-sm-3 projectSkills">HTML</div>
                <div className="col-sm-3 projectSkills">CSS</div>
                <div className="col-sm-3 projectSkills">JS</div>
              </div>
            </div>
          </div>
          <div className="col-md-4 projectCard">
            <div className="card-body projectCardBody">
              <div className="card-title row">
                <div className="col-sm-9" id="cardTitle">
                  Lighthouse
                </div>
                <div className="col-sm-3">
                  <a
                    href="https://github.com/Robk67/Lighthouse"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fa fa-github" id="githubIcon" />
                  </a>
                </div>
              </div>{" "}
              <p className="card-text">
                This project was a submission into the month long App-Jam
                competition at California State University Northridge This
                crowdsourcing Android application allowed users to create, view
                and filter events based on their location and other criteria.
              </p>
            </div>
            <div className="projectCardFooter">
              <div className="row">
                <div className="col projectSkills">Android</div>
              </div>
            </div>
          </div>
          <div className="col-md-4 projectCard">
            <div className="card-body projectCardBody">
              <div className="card-title row">
                <div className="col-sm-9" id="cardTitle">
                  Ruber System
                </div>
                <div className="col-sm-3">
                  <a
                    href="https://github.com/Robk67/Space-Explorer-Simulator"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fa fa-github" id="githubIcon" />
                  </a>
                </div>
              </div>{" "}
              <p className="card-text">
                A simulation enviornment that displays concepts in computer
                graphics utilizing Open GL libraries and the C/C++ programming
                languages. This app showcased the concepts from computer
                graphics like object collision and a homing missle algorithhm.
              </p>
            </div>
            <div className="projectCardFooter">
              <div className="row">
                <div className="col-sm-3 projectSkills">C/C++</div>
                <div className="col-sm-3 projectSkills">OpenGL</div>
              </div>
            </div>
          </div>
        </div>
        <div className="row projectCardRow">
          <div className="col-md-4 projectCard">
            <div className="card-body projectCardBody">
              <div className="card-title row">
                <div className="col-sm-9" id="cardTitle">
                  All Bottled Up
                </div>
                <div className="col-sm-3">
                  <a
                    href="https://github.com/Robk67/All-Bottled-Up"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fa fa-github" id="githubIcon" />
                  </a>
                </div>
              </div>
              <p className="card-text">
                A two dimensional side scrolling adventure game made with Unity
                3D. This game follows a robot that has to collect emotions and
                use them as power ups to travel through three levels, beat
                puzzles and the defeat the final boss.
              </p>
            </div>
            <div className="projectCardFooter">
              <div className="row">
                <div className="col-sm-3 projectSkills">Unity</div>
                <div className="col-sm-3 projectSkills">C#</div>
              </div>
            </div>
          </div>
          <div className="col-md-4 projectCard">
            <div className="card-body projectCardBody">
              <div className="card-title row">
                <div className="col-sm-9" id="cardTitle">
                  Ocean Treasure Quest
                </div>
                <div className="col-sm-3">
                  <a
                    href="https://github.com/Robk67/Ocean-Treasure-Quest"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fa fa-github" id="githubIcon" />
                  </a>{" "}
                </div>
              </div>{" "}
              <p className="card-text">
                A three dimensional environment allowing players to traverse and
                collect treasures using Monogame XNA framework. This project
                featured pathing algorithms such as the A* algorithm,
                interactions with NPC's and objects.
              </p>
            </div>
            <div className="projectCardFooter">
              <div className="row">
                <div className="col-sm-3 projectSkills">C#</div>
                <div className="col-sm-3 projectSkills">Monogame</div>
              </div>
            </div>
          </div>
          <div className="col-md-4 projectCard">
            <div className="card-body projectCardBody">
              <div className="card-title row">
                <div className="col-sm-9" id="cardTitle">
                  Resume Website
                </div>
                <div className="col-sm-3">
                  <a
                    href="https://github.com/Robk67/Ocean-Treasure-Quest"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fa fa-github" id="githubIcon" />
                  </a>{" "}
                </div>
              </div>{" "}
              <p className="card-text">
                This resume website built using React with WebGL and ParticleJS.
              </p>
            </div>
            <div className="projectCardFooter">
              <div className="row">
                <div className="col-sm-3 projectSkills">React</div>
                <div className="col-sm-3 projectSkills">HTML</div>
                <div className="col-sm-3 projectSkills">CSS</div>
                <div className="col-sm-3 projectSkills">JS</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
