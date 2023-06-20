import React from "react";
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from "react-icons/ai";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-content">
        <ul style={{ listStyleType: "none" }}>
          <li>
            <b>ngedeppp</b>
          </li>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <Link to="https://dnea07.github.io/portfolio-devina-nathania/">
              <a>My Portfolio</a>
            </Link>
          </li>
        </ul>
        <ul style={{ listStyleType: "none" }}>
          <li>
            <b>My Projects</b>
          </li>
          <li>
            <a href="/">Project 1</a>
          </li>
          <li>
            <a href="/">Project 2</a>
          </li>
          <li>Project 3</li>
        </ul>
        <div style={{ marginTop: "1rem" }}>
          <b>Ikuti Saya</b>
          <div className="d-flex" style={{ marginTop: "1rem" }}>
            <a href="https://www.instagram.com/dnea07">
              <AiFillInstagram size={42} color="rgb(164, 70, 253)" />
            </a>
            <a href="https://github.com/dnea07">
              <AiFillGithub size={42} color="rgb(164, 70, 253)" />
            </a>
            <a href="https://www.linkedin.com/in/dnea07/">
              <AiFillLinkedin size={42} color="rgb(164, 70, 253)" />
            </a>
          </div>
        </div>
        <img
          src={require("../assets/deplargeicon.png")}
          alt="Click N Collect"
          style={{ height: 200, objectFit: "scale-down" }}
        />
      </div>
      <div className="footer-credit">© 2023 made by ngedeppp with love ❤️</div>
    </div>
  );
};

export default Footer;
