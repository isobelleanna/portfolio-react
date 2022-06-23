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
    <div>
      <h3 class="title">Technical Skills</h3>
      <div class="techical-skill">
        <p class="techical-skill__p">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae,
          commodi facilis!
        </p>
      </div>
      <div class="tech-grid">
        <img
          class="grid__item grid__icon grid__icon--git"
          src={git}
          alt="git icon"
        />
        <img
          class="grid__item grid__icon grid__icon--html"
          src={html}
          alt="html icon"
        />
        <img
          class="grid__item grid__icon grid__icon--css"
          src={css}
          alt="css icon"
        />
        <p class="grid__label grid__item grid__label--git">Git</p>
        <p class="grid__label grid__item grid__label--html">HTML 5</p>
        <p class="grid__label grid__item grid__label--css">CSS3</p>
        <img
          class="grid__item grid__icon grid__icon--javascript"
          src={javaScript}
          alt="JavaScript icon"
        />
        <img
          class="grid__item grid__icon grid__icon--scss"
          src={scss}
          alt="scss icon"
        />
        <img
          class="grid__item grid__icon grid__icon--bem"
          src={bem}
          alt="bem icon"
        />
        <p class="grid__label grid__item grid__label--javascript">Javascript</p>
        <p class="grid__label grid__item grid__label--scss">SCSS</p>
        <p class="grid__label grid__item grid__label--bem">BEM</p>
        <img
          class="grid__item grid__icon grid__icon--react"
          src={react}
          alt="react icon"
        />
        <img
          class="grid__item grid__icon grid__icon--java"
          src={java}
          alt="java icon"
        />
        <img
          class="grid__item grid__icon grid__icon--spring"
          src={spring}
          alt="Spring Boot icon"
        />
        <p class="grid__label grid__item grid__label--react">React</p>
        <p class="grid__label grid__item grid__label--java">Java</p>
        <p class="grid__label grid__item grid__label--spring">Spring Boot</p>
      </div>
    </div>
  );
};

export default TechSkills;
