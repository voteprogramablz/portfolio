import React from "react";
import "./styles.css";
import { FiCode } from "react-icons/fi";
import { BsCodeSlash } from "react-icons/bs";

function Header() {
  return (
    <header className="header">
      <div className="headerContainer">
        <div className="titleContainer">
          <FiCode fontSize={32} color="#f9f9f9" />
          <a href="/">
            <h1 className="title">Portfólio</h1>
          </a>
          <BsCodeSlash fontSize={32} color="#f9f9f9" />
        </div>
        <div>
          <ul>
            <li>
              <a href="#aboutMe">Sobre Mim</a>
            </li>
            <li>
              <a href="#projects">Projetos</a>
            </li>
            {/* <li>
              <a href="#services">Serviços</a>
            </li> */}
            <li>
              <a href="#skills">Minhas skills</a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}

export { Header };
