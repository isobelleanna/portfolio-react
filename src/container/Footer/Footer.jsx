import React from "react";
import "./Footer.scss";
import LinkedIn from "../../assets/image/linked-in.png";
import GitHub from "../../assets/image/git-hub.png";

const Footer = () => {
  return (
    <footer className="footer" id="footer">
      <div className="footer__icons">
        <a href="https://github.com/isobelleanna">
          <img
            className="footer__img footer__img--git-hub"
            src={GitHub}
            alt="GitHub icon"
          />
        </a>
        <a href="https://www.linkedin.com/in/isobelle-joyce-65505012b/">
          <img
            className="footer__img footer__img--linked-in"
            src={LinkedIn}
            alt="LinkedIn icon"
          />
        </a>
      </div>
      <h2 className="footer__h2">isobellejoyce6@gmail.com</h2>
    </footer>
  );
};

export default Footer;
