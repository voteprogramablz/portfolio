import React from "react";
import "./main.css";
import { Header } from "./Header";
import { Apresentation } from "./Apresentation";
import { AboutMe } from "./AboutMe";
import Footer from "./Footer";
import Contacts from "./Contacts";

function App() {
  return (
    <>
      <div className="container">
        <Header />
        <Apresentation />
        <AboutMe />
        <Contacts /> 
      </div>
      <Footer />
    </>
  );
}

export { App };
