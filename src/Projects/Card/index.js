import React from "react";
import "../styles.css";

const Card = ({ href, image, alt, title, subtitle }) => {
  return (
    <a href={href} target="_blank" rel="noreferrer" className="cardContainer">
      <div>
        <div>
          <div className="imageWrapper">
            <img src={image} alt={alt} />
          </div>
          <h3>{title}</h3>
          <p>{subtitle}</p>
        </div>
      </div>
    </a>
  );
};

export default Card;
