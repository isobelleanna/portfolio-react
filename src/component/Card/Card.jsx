import React from "react";

const Card = () => {
  return (
    <div className="card">
      <img className="card__img" src="./img/project-img.png" alt="" />
      <h4 className="card__h4">REACT</h4>
      <h2 className="card__h2">PUNK API</h2>
      <p className="card__p">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit aperiam
        veritatis iste odio, quas error vel nulla laboriosam quia, facere,
        impedit nisi rerum repudiandae! Autem asperiores cumque fuga facere
        maiores!
      </p>
      <div className="links">
        <h5 className="links__h5">Code</h5>
        <i className="fa-solid fa-code links__i"></i>
        <h5 className="links__h5">Preview</h5>
        <i className="fa-solid fa-eye links__i"></i>
      </div>
    </div>
  );
};

export default Card;
