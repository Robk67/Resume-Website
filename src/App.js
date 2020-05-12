import React from "react";
import Header from "./components/header/header";
import About from "./components/about/about";
import Skills from "./components/skills/skills";
import Projects from "./components/projects/projects";
import Navbar from "./components/navbar/navbar";
import ScrollShower from "./components/navbar/showOnScroll";
import Footer from "./components/footer/footer";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      {/* <ScrollShower showId={"about"}> */}
      <Navbar />
      {/* </ScrollShower> */}
      <About />
      <Skills />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
