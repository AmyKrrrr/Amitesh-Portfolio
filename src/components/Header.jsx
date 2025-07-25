import React from "react";
import "./Header.css";
import ShinyText from "./ShinyText";

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <ShinyText text="AmyScript" className="custom-class" />
      </div>
      <nav className="nav">
        <ul>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#skills">Skills</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
