"use client";

import Image from "next/image";
import "./Preloader.css";


export default function Preloader({ active }: { active: boolean }) {
  return (
    <div
      className={`preloader ${!active ? "fade-out" : ""}`}
      role="status"
      aria-label="Loading Corbett Treat Resort"
      aria-live="polite"
    >
      <Image
        src="/resort-logo.svg"
        alt="Corbett Treat Resort Logo"
        width={150}
        height={150}
        priority
        className="preloader-logo"
      />
      <div className="loader-line" aria-hidden="true" />
    </div>
  );
}
