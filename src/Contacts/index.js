import React from "react";
import "./styles.css";

import { FiSmile, FiMail, FiInstagram } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";

const Contacts = () => {
  return (
    <div className="contacts">
      <div className="infoWrapper">
        <div className="iconContainer">
          <FiSmile className="icon" />
        </div>
        <h3 className="infoTitle">Meu nome</h3>
        <p className="infoSubtitle">André Melo</p>
      </div>

      <div className="infoWrapper">
        <div className="iconContainer">
          <FiMail className="icon" />
        </div>
        <h3 className="infoTitle">E-mail</h3>
        <p className="infoSubtitle">andrermelo1@hotmail.com</p>
      </div>

      <div className="infoWrapper">
        <div className="iconContainer">
          <FiInstagram className="icon" />
        </div>
        <h3 className="infoTitle">Instagram</h3>
        <p className="infoSubtitle">@andre._.dev</p>
      </div>

      <div className="infoWrapper">
        <div className="iconContainer">
          <FaWhatsapp className="icon" />
        </div>
        <h3 className="infoTitle">Whats App</h3>
        <p className="infoSubtitle">(41) 9 8755-5234</p>
      </div>
    </div>
  );
};

export default Contacts;
