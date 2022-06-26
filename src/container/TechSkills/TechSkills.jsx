import React from "react";
import "./TechSkills.scss";
import git from "../../assets/image/git.png";
import html from "../../assets/image/html.png";
import css from "../../assets/image/css.png";
import javaScript from "../../assets/image/javascript.png";
import scss from "../../assets/image/scss.png";
import bem from "../../assets/image/bem.png";
import react from "../../assets/image/react.png";
import java from "../../assets/image/java.png";
import spring from "../../assets/image/spring.png";

const TechSkills = () => {
  return (
    <div className="tech">
      <h3 className="title">Technical Skills</h3>
      <div className="techical-skill">
        <p className="techical-skill__p">
          Below is a list of my current skills.
        </p>
      </div>
      <div className="tech-grid">
        <img
          className="grid__item grid__icon grid__icon--git"
          src={git}
          alt="git icon"
        />
        <img
          className="grid__item grid__icon grid__icon--html"
          src={html}
          alt="html icon"
        />
        <img
          className="grid__item grid__icon grid__icon--css"
          src={css}
          alt="css icon"
        />
        <p className="grid__label grid__item grid__label--git">Git</p>
        <p className="grid__label grid__item grid__label--html">HTML 5</p>
        <p className="grid__label grid__item grid__label--css">CSS3</p>
        <img
          className="grid__item grid__icon grid__icon--javascript"
          src={javaScript}
          alt="JavaScript icon"
        />
        <img
          className="grid__item grid__icon grid__icon--scss"
          src={scss}
          alt="scss icon"
        />
        <img
          className="grid__item grid__icon grid__icon--bem"
          src={bem}
          alt="bem icon"
        />
        <p className="grid__label grid__item grid__label--javascript">
          Javascript
        </p>
        <p className="grid__label grid__item grid__label--scss">SCSS</p>
        <p className="grid__label grid__item grid__label--bem">BEM</p>
        <img
          className="grid__item grid__icon grid__icon--react"
          src={react}
          alt="react icon"
        />
        <img
          className="grid__item grid__icon grid__icon--java"
          src={java}
          alt="java icon"
        />
        <img
          className="grid__item grid__icon grid__icon--spring"
          src={spring}
          alt="Spring Boot icon"
        />
        <p className="grid__label grid__item grid__label--react">React</p>
        <p className="grid__label grid__item grid__label--java">Java</p>
        <p className="grid__label grid__item grid__label--spring">
          Spring Boot
        </p>
      </div>
    </div>
  );
};

export default TechSkills;
