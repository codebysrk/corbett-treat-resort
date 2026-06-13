"use client";

import { RiMenu3Line } from "react-icons/ri";
import "./Hamburger.css";

/**
 * Hamburger Menu Toggle Button
 *
 * Kya: `<div>` → `<button>` semantic HTML fix kiya.
 * Kyun: `<div>` keyboard accessible nahi hota — Tab se focus nahi milta,
 *       Enter key se trigger nahi hota. `<button>` yeh sab natively handle karta hai.
 * Benefit: Screen readers correctly "menu button" announce karenge.
 */
export default function Hamburger({ onClick, scrolled }) {
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
