import React from "react";
import Graphics from "./GraphicsDemo";
import "./main.css";

const Main = () => (
    <div className="section">
        <div className="col">
            <div className="row content">
                <Graphics />
            </div>
            <div className="row content">
                <div className="name">
                    Robert Kyupelyan
                </div>
            </div>
            <div className="row content">
                <div className="subtitle">
                    Software developer by day ... pretty much the same thing by night.
                </div>
            </div>
            <div className="row content">
                <div className="headerButtons">
                    <a
                        href="https://github.com/Robk67"
                        className="btn btn-default btn-circle"
                        id="mainButton"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <i className="fa fa-github" />
                    </a>
                    <a
                        href="mailto:robkyupelyan@gmail.com"
                        className="btn btn-default btn-circle"
                        id="mainButton"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <i className="fa fa-envelope" />
                    </a>
                    <a
                        href="https://www.linkedin.com/in/robert-kyupelyan-ab9184142"
                        className="btn btn-default btn-circle"
                        id="mainButton"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <i className="fa fa-linkedin" />
                    </a>
                </div>
            </div>
        </div>
    </div>
);

export default Main;
