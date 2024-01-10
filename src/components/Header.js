import React, { useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  const line = useRef(null);
  const gnb = useRef(null);

  useEffect(() => {
    const firstItem = gnb.current.querySelector("li");
    if (firstItem) {
      const { right, width } = firstItem.getBoundingClientRect();
      line.current.style.right = `${right}px`;
      line.current.style.width = `${width}px`;
    }
  }, []);

  const lineMove = (e) => {
    line.current.classList.add("on");

    const elRight = e.target.getBoundingClientRect().right;
    const elBottom = e.target.getBoundingClientRect().bottom;
    const parentLeft = e.target.closest(".gnb").getBoundingClientRect().right;
    const parentBottom = e.target
      .closest(".gnb")
      .getBoundingClientRect().bottom;

    const moveLeft = parentLeft - elRight;
    const moveTop = parentBottom - elBottom;

    line.current.style.right = `${moveLeft}px`;
    line.current.style.bottom = `${moveTop}px`;

    const elWidth = e.target.getBoundingClientRect().width;

    line.current.style.width = `${elWidth}px`;
  };

  const handleMouseLeave = () => {
    line.current.classList.remove("on");
    line.current.style.width = "0";
    line.current.style.right = "0";
    line.current.style.bottom = "0";
  };

  return (
    <header>
      <div className="inner">
        <ul ref={gnb} className="gnb" onMouseLeave={handleMouseLeave}>
          <li className="line" ref={line}></li>
          <li onMouseEnter={lineMove}>
            <NavLink to="/">Home</NavLink>
          </li>
          <li onMouseEnter={lineMove}>
            <NavLink to="/about">About</NavLink>
          </li>
          <li onMouseEnter={lineMove}>
            <NavLink to="/projects">Projects</NavLink>
          </li>
          <li onMouseEnter={lineMove}>
            <NavLink to="/contact">Contact</NavLink>
          </li>
        </ul>
        <div className="totalMenuBtn"></div>
        <ul className="totalMenuConts">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
          <li>
            <NavLink to="/projects">Projects</NavLink>
          </li>
          <li>
            <NavLink to="/contact">Contact</NavLink>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
