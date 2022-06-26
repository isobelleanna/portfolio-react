import React from "react";
import "./Nav.scss";
import menuIcon from "../../assets/image/menu-icon.png";
import whiteCross from "../../assets/image/white-cross.png";

const Nav = ({ toggleMenu, handleMenuToggle }) => {
  return (
    <div className="nav">
      <h1 className="nav__title">👩🏻‍💻 Isobelle Joyce</h1>
      <nav className="nav__bar">
        <div className="nav__bar--laptop">
          <a className="nav__button" href="#home">
            Home
          </a>
          <a className="nav__button" href="#about">
            About
          </a>
          <a className="nav__button" href="#projects">
            Projects
          </a>
          <a className="nav__button--active" href="#footer">
            Get in Touch
          </a>
        </div>
        {toggleMenu ? (
          <div className="nav-bar__mobile">
            <img
              className="nav-bar__mobile--cross"
              src={whiteCross}
              alt="white-cross"
              onClick={handleMenuToggle}
            />
            <h1 className="nav-bar__mobile--item">Isobelle Joyce</h1>
            <hr />
            <a
              className="nav-bar__mobile--item"
              href="#home"
              onClick={handleMenuToggle}
            >
              Home
            </a>
            <a
              className="nav-bar__mobile--item"
              href="#about"
              onClick={handleMenuToggle}
            >
              About
            </a>
            <a
              className="nav-bar__mobile--item"
              href="#projects"
              onClick={handleMenuToggle}
            >
              Projects
            </a>
            <a
              className="nav-bar__mobile--item"
              href="#footer"
              onClick={handleMenuToggle}
            >
              Get in Touch
            </a>
          </div>
        ) : (
          <img
            className="nav__icon"
            src={menuIcon}
            alt="Menu icon"
            onClick={handleMenuToggle}
          />
        )}
      </nav>
    </div>
  );
};

export default Nav;
