import React from "react";
import "./Card.scss";

const Card = ({
  cardClass,
  cardTitle,
  cardStack,
  cardImage,
  cardContent,
  codeLink,
  liveLink,
}) => {
  return (
    <div className={cardClass}>
      <img className="card__img" src={cardImage} alt={cardTitle} />
      <h4 className="card__title">{cardStack}</h4>
      <h2 className="card__stack">{cardTitle}</h2>
      <p className="card__content">{cardContent}</p>
      <div className="links">
        <a className="links__code" href={codeLink}>
          <h5 className="links__title">Code</h5>
          <i className="fa-solid fa-code links__i"></i>
        </a>
        <a className="links__live" href={liveLink}>
          <h5 className="links__title">Preview</h5>
          <i className="fa-solid fa-eye links__i"></i>
        </a>
      </div>
    </div>
  );
};

export default Card;
