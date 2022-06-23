import React from "react";
import "./Home.scss";

const Home = () => {
  return (
    <div>
      <div className="intro">
        <h2 className="intro__h2">Hey! I'm Isobelle</h2>
        <p className="intro__p">A Junior Software Developer based in the Uk.</p>
        <button type="button" className="intro__button">
          Take a look at my work
        </button>
      </div>
    </div>
  );
};

export default Home;
