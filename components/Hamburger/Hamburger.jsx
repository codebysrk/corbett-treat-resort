"use client";

import { RiMenu3Line } from "react-icons/ri";
import "./Hamburger.css";

export default function Hamburger({ onClick, scrolled }) {
  return (
    <div
      className={`menu-btn ${scrolled ? "scrolled" : ""}`}
      id="menu-toggle"
      onClick={onClick}
    >
      <div className="hamburger">
        <RiMenu3Line />
      </div>
      <span className="menu-text">Menu</span>
    </div>
  );
}
