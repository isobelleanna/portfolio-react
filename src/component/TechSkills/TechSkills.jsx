import React from "react";
import "./TechSkills.scss";

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
          src="./img/git.png"
          alt=""
        />
        <img
          class="grid__item grid__icon grid__icon--html"
          src="./img/html.png"
          alt=""
        />
        <img
          class="grid__item grid__icon grid__icon--css"
          src="./img/css.png"
          alt=""
        />
        <p class="grid__label grid__item grid__label--git">Git</p>
        <p class="grid__label grid__item grid__label--html">HTML 5</p>
        <p class="grid__label grid__item grid__label--css">CSS3</p>
        <img
          class="grid__item grid__icon grid__icon--javascript"
          src="./img/javascript.png"
          alt=""
        />
        <img
          class="grid__item grid__icon grid__icon--scss"
          src="./img/scss.png"
          alt=""
        />
        <img
          class="grid__item grid__icon grid__icon--bem"
          src="./img/bem.png"
          alt=""
        />
        <p class="grid__label grid__item grid__label--javascript">Javascript</p>
        <p class="grid__label grid__item grid__label--scss">SCSS</p>
        <p class="grid__label grid__item grid__label--bem">BEM</p>
        <img
          class="grid__item grid__icon grid__icon--react"
          src="./img/react.png"
          alt=""
        />
        <img
          class="grid__item grid__icon grid__icon--java"
          src="./img/java.png"
          alt=""
        />
        <img
          class="grid__item grid__icon grid__icon--spring"
          src="./img/spring.png"
          alt=""
        />
        <p class="grid__label grid__item grid__label--react">React</p>
        <p class="grid__label grid__item grid__label--java">Java</p>
        <p class="grid__label grid__item grid__label--spring">Spring Boot</p>
      </div>
    </div>
  );
};

export default TechSkills;
