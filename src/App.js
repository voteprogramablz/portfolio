import React from "react";
import "./main.css";
import { Header } from "./Header";
import { Apresentation } from "./Apresentation";
import { AboutMe } from "./AboutMe";
import Footer from "./Footer";
import Contacts from "./Contacts";
import Projects from "./Projects";
import MySkills from "./MySkills";

function App() {
  return (
    <>
      <div className="outsideContainer">
        <Header />
        <div className="container">
          <Apresentation />
          <AboutMe />
          <Contacts />
          <Projects />
          <MySkills />
        </div>
        <Footer />
      </div>
    </>
  );
}

export { App };
