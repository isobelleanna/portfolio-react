import React from "react";
import "./Home.scss";

const Home = () => {
  return (
    <div>
      <div className="intro" id="home">
        <h2 className="intro__h2">Hey! I'm Isobelle</h2>
        <p className="intro__p">A Junior Software Developer based in the Uk.</p>
        <a className="intro__button" href="#projects">
          Take a look at my work
        </a>
      </div>
    </div>
  );
};

export default Home;
