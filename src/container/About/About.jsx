import React from "react";
import "./About.scss";
import headshot from "../../assets/image/portfolio-headshot.png";

const About = () => {
  return (
    <div className="about-me" id="about">
      <div className="about-me__content">
        <div className="title__about-me">
          <h3 className="title title__about-me">About Me</h3>
        </div>

        <img
          className="about-me__img"
          src={headshot}
          alt="headshot of Isobelle"
        />
        <div className="about-me__p">
          <p className="about-me__p">
            I am currently training as a full stack developer with _nology.
          </p>
        </div>
        <div className="about-me__p2">
          <p className="about-me__p">
            I have a degree in Production Arts and design and previously worked
            as a wardrobe supervisor on cruise ships.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
