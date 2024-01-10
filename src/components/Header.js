import React from "react";
import { NavLink } from "react-router-dom";
<link
  href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@300;400;500;600;700;800&display=swap"
  rel="stylesheet"
></link>;

const Header = () => {
  const clickStyle = { color: "blue" };
  return (
    <header>
      <div className="inner">
        <ul className="gnb">
          <li>
            <NavLink activeStyle={clickStyle} to="/">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink activeStyle={clickStyle} to="/about">
              About
            </NavLink>
          </li>

          <li>
            <NavLink activeStyle={clickStyle} to="/projects">
              Projects
            </NavLink>
          </li>
          <li>
            <NavLink activeStyle={clickStyle} to="/contact">
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
