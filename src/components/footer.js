// Footer.js

import React from "react";
import { FaInstagram, FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="app-footer">
    <div className="footer-arrange">
      <div className="footer-left">
        <p>Creator:</p>
        <div className="footer-logo">
          <a href="https://ajnasnb.me" target="_blank" rel="noopener noreferrer">
            <img
              src="https://ajnasnb.me/static/media/logo%20ajnas.67d11bb77dae75343f93.png"
              alt="Ajnas N B Logo"
            />
          </a>
          <p className="creator-name">
            <a href="https://ajnasnb.me">Ajnas N B</a>
          </p>
        </div>
      </div>
      <div className="footer-right">
        <div className="social-links">
          <a href="https://instagram.com/_a.jnas" target="_blank" rel="noopener noreferrer">
            <FaInstagram size={"30px"} color="#e45848" />
          </a>
          <a href="https://www.twitter.com/AjnasNB" target="_blank" rel="noopener noreferrer">
            <FaTwitter size={"30px"} color="white" />
          </a>
          <a href="https://www.linkedin.com/in/ajnasnb" target="_blank" rel="noopener noreferrer">
            <FaLinkedin size={"30px"} color="Blue" />
          </a>
          <a href="https://www.github.com/AjnasNB" target="_blank" rel="noopener noreferrer">
            <FaGithub size={"30px"} color="#160000" />
          </a>
        </div>
      </div>
      </div>
      <div className="footer-description">
        SQLMagic is a software designed to convert natural language queries into SQL queries,
        making database interaction more accessible and intuitive.
      </div>
    </footer>
  );
};

export default Footer;
