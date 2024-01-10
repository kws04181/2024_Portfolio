import React from "react";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <ul className="center">
        <li className="info">
          <h1 className="logo">
            <NavLink to="/">KimSeongWon</NavLink>
            <span>.</span>
          </h1>
          <p>We are a digital agency based on Korea.</p>
        </li>
        <li className="link"></li>
        <li className="legal"></li>
        <li className="contactMe"></li>
        <li className="copy"></li>
      </ul>
    </div>
  );
};

export default Footer;
