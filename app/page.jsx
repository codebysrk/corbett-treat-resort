"use client";

import { useState, useEffect } from "react";
import { Preloader, Navbar, OverlayMenu, Hero, Story } from "@/components";

export default function Home() {
  const [preloaderActive, setPreloaderActive] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Preloader minimum delay (for luxury feel)
  useEffect(() => {
    const timer = setTimeout(() => {
      setPreloaderActive(false);
    }, 800);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* Preloader Component */}
      <Preloader active={preloaderActive} />

      {/* Navigation Bar Component */}
      <Navbar onMenuOpen={() => setIsMenuOpen(true)} />

      {/* Full Screen Overlay Menu Component */}
      <OverlayMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />

      {/* Hero Banner Section Component */}
      <Hero />

      {/* Our Story Section Component */}
      <Story />
    </>
  );
}
