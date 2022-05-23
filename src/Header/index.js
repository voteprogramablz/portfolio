import React from "react";
import "./styles.css";
import { FiCode } from "react-icons/fi";
import { BsCodeSlash } from "react-icons/bs";

function Header() {
  const [menuHeight, setMenuHeight] = React.useState(0);
  const menuRef = React.useRef();

  function scrollToTheSection(event) {
    event.preventDefault();
    const sectionId = event.target?.attributes?.href?.value;
    const sectionToScroll = document.querySelector(sectionId);
    const { offsetTop } = sectionToScroll;

    window.scrollTo(0, offsetTop - menuHeight - 90);
  }

  /** When the react are rendering the component, the clientHeight of the menu is not setted yet, so we use UseEffect
   * to set the clientHeight of him, because the effect only will be activated after the rendering of the component. */

  React.useEffect(() => {
    setMenuHeight(menuRef.current.clientHeight);
  }, []);

  return (
    <header id="header" ref={menuRef}>
      <div className="headerContainer">
        <div className="titleContainer">
          <FiCode fontSize={32} color="#f9f9f9" />
          <a onClick={scrollToTheSection} href="#apresentation">
            <h1 href="#apresentation" className="title">
              Portfólio
            </h1>
          </a>
          <BsCodeSlash fontSize={32} color="#f9f9f9" />
        </div>
        <div>
          <ul>
            <li>
              <a onClick={scrollToTheSection} href="#aboutMe">
                Sobre Mim
              </a>
            </li>
            <li>
              <a onClick={scrollToTheSection} href="#projects">
                Projetos
              </a>
            </li>
            {/* <li>
              <a href="#services">Serviços</a>
            </li> */}
            <li>
              <a onClick={scrollToTheSection} href="#skills">
                Minhas skills
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}

export { Header };
