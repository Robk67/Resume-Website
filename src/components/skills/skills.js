import React from "react";
import "./skills.css";

import FlutterLogo from "../../assets/icons/flutter.svg";
import AndroidLogo from "../../assets/icons/android.svg";
import AppleLogo from "../../assets/icons/apple.svg";
import HtmlLogo from "../../assets/icons/html5.svg";
import CssLogo from "../../assets/icons/css3.svg";
import ReactLogo from "../../assets/icons/react.svg";
import JavaLogo from "../../assets/icons/java.svg";
import CPlusPlusLogo from "../../assets/icons/cplusplus-line.svg";
import JavascriptLogo from "../../assets/icons/javascript.svg";
import ChessLogo from "../../assets/icons/chess-bishop.svg";
import PingPongLogo from "../../assets/icons/table-tennis.svg";
import LotrLogo from "../../assets/icons/circle-outline.svg";
import HamburgerLogo from "../../assets/icons/hamburger.svg";
import UnityLogo from "../../assets/icons/unity.svg";
import Graphics from "./GraphicsDemo";
import SkillsMobile from "./skillsMobile";
import { isMobile } from "react-device-detect";

const Skills = () => {
  if (isMobile) {
    return <SkillsMobile />;
  }
  return (
    <div className="section" id="skills">
      <div className="sectionBody">
        <div className="sectionTitle">SKILLS</div>
        <div className="row">
          <div className="col-xl-5">
            <div className="row graphicsDemo">
              <Graphics />
            </div>
            <div className="row">
              <p className="graphicsDemoDescription">
                Check out this sphere I made with WebGL{" "}
              </p>
            </div>
          </div>
          <div className="col-xl-7 skillSection">
            <div className="skillListSection">
              <div className="row skillRow">
                <div className="col skill">
                  <img src={FlutterLogo} alt="developer icon"></img>
                  <p className="skillLabel">Flutter</p>{" "}
                </div>
                <div className="col skill">
                  <img src={AndroidLogo} alt="developer icon"></img>
                  <p className="skillLabel">Android</p>{" "}
                </div>
                <div className="col skill">
                  <img src={AppleLogo} alt="developer icon"></img>
                  <p className="skillLabel">iOS</p>{" "}
                </div>
                <div className="col skill">
                  <img src={HtmlLogo} alt="developer icon"></img>
                  <p className="skillLabel">HTML</p>{" "}
                </div>
                <div className="col skill">
                  <img src={CssLogo} alt="developer icon"></img>
                  <p className="skillLabel">CSS</p>{" "}
                </div>
              </div>
            </div>
            <div className="skillListSection">
              <div className="row skillRow">
                <div className="col skill">
                  <img src={JavascriptLogo} alt="developer icon"></img>
                  <p className="skillLabel">Javascript</p>{" "}
                </div>
                <div className="col skill">
                  <img src={ReactLogo} alt="developer icon"></img>
                  <p className="skillLabel">React</p>{" "}
                </div>
                <div className="col skill">
                  <img src={JavaLogo} alt="developer icon"></img>
                  <p className="skillLabel">Java</p>{" "}
                </div>
                <div className="col skill">
                  <img src={CPlusPlusLogo} alt="developer icon"></img>
                  <p className="skillLabel">C++</p>{" "}
                </div>
                <div className="col skill">
                  <img src={UnityLogo} alt="developer icon"></img>
                  <p className="skillLabel">Unity </p>{" "}
                </div>
              </div>
            </div>
            <div className="skillListSection">
              <div className="row skillRow">
                <p className="skill">Even More Unrelated Skills: </p>
              </div>
            </div>
            <div className="skillListSection">
              <div className="row skillRow">
                <div className="col-md-3 skill">
                  <img src={ChessLogo} alt="developer icon"></img>
                  <p className="skillLabel">Chess</p>{" "}
                </div>
                <div className="col-md-3 skill">
                  <img src={PingPongLogo} alt="developer icon"></img>
                  <p className="skillLabel">Ping Pong</p>{" "}
                </div>
                <div className="col-md-3 skill">
                  <img src={LotrLogo} alt="developer icon"></img>
                  <p className="skillLabel">
                    The ability to watch all of The Lord of The Rings in one
                    sitting
                  </p>{" "}
                </div>
                <div className="col-md-3 skill">
                  <img src={HamburgerLogo} alt="developer icon"></img>
                  <p className="skillLabel">
                    Self proclaimed grill master{" "}
                  </p>{" "}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
