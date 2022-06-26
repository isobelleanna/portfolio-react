import React from "react";
import "./Nav.scss";
import menuIcon from "../../assets/image/menu-icon.png";

const Nav = () => {
  return (
    <div className="nav">
      <h1 className="nav__title">👩🏻‍💻 Isobelle Joyce</h1>
      <nav className="nav__bar">
        <div className="nav__bar--laptop">
          <button className="nav__button">Home</button>
          <button className="nav__button">About</button>
          <button className="nav__button">Projects</button>
          <button className="nav__button--active">Get in Touch</button>
        </div>
        <img className="nav__icon" src={menuIcon} alt="Menu icon" />
      </nav>
    </div>
  );
};

export default Nav;
