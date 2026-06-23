"use client";

import { RiMenu3Line } from "react-icons/ri";
import "./Hamburger.css";


interface HamburgerProps {
  onClick: () => void;
  scrolled: boolean;
}

export default function Hamburger({ onClick, scrolled }: HamburgerProps) {
  return (
    <button
      type="button"
      className={`menu-btn ${scrolled ? "scrolled" : ""}`}
      id="menu-toggle"
      onClick={onClick}
      aria-label="Open navigation menu"
      aria-expanded="false"
    >
      <span className="hamburger" aria-hidden="true">
        <RiMenu3Line />
      </span>
      <span className="menu-text">Menu</span>
    </button>
  );
}
