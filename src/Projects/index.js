import React from "react";
import "./styles.css";
import Card from "./Card";

import Dogs from "../images/dogs.png";
import Originsix from "../images/originsix.png";
import AnimaisFantasticos from "../images/animaisfantasticos.png";

const Projects = () => {
  return (
    <div className="projects">
      <h2>Projetos</h2>
      <div className="cardsGrid">
        <Card
          href="https://voteprogramablz.github.io/dogsorigamid/"
          image={Dogs}
          alt={
            "Foto do layout do site 'Dogs'. A tela está dividida ao meio, com uma foto de um cachorro de touca na primeira metade e um formulário para cadastro na segunda metade."
          }
          title="Dogs"
          subtitle="Tecnologias: React JS."
        />
        <Card
          href="https://voteprogramablz.github.io/OriginSix/"
          image={Originsix}
          alt={
            "Foto do layout do site 'Origin Six', onde é mostrado a área: sobre nós do site."
          }
          title="Origin Six"
          subtitle="Tecnologias: HTML, CSS e JS."
        />
        <Card
          href="https://voteprogramablz.github.io/animais-fantasticos/"
          image={AnimaisFantasticos}
          alt={
            "Foto de um cachorro da raça pug, usando um suéter e olhando muito fofo para a tela"
          }
          title="Animais Fantásticos"
          subtitle="Tecnologias: HTML, CSS e JS."
        />
      </div>
    </div>
  );
};

export default Projects;
