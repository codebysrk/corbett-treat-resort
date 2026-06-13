"use client";

import "./Preloader.css";

export default function Preloader({ active }) {
  return (
    <div className={`preloader ${!active ? "fade-out" : ""}`}>
      <img
        src="/assets/images/resort-logo.png"
        alt="Loading"
        className="preloader-logo"
      />
      <div className="loader-line"></div>
    </div>
  );
}
