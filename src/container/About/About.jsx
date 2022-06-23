import React from "react";
import "./About.scss";
import headshot from "../../assets/image/portfolio-headshot.png";

const About = () => {
  return (
    <div className="about-me">
      <div className="container">
        <div className="title__about-me">
          <h3 className="title title__about-me">About Me</h3>
        </div>
        <div className="about-me__img">
          <img className="about-me__img" src={headshot} alt="headshot" />
        </div>
        <div className="about-me__p">
          <p className="about-me__p">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. At ea dolor
            nihil deleniti commodi ducimus delectus ipsa maxime voluptates
            debitis itaque quam, molestiae error nam velit pariatur dolore,
            veritatis ad.
          </p>
        </div>
        <div className="about-me__p2">
          <p className="about-me__p">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. At ea dolor
            nihil deleniti commodi ducimus delectus ipsa maxime voluptates
            debitis itaque quam.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
