"use client";

import { useState } from "react";
import Navbar from "../Navbar";
import OverlayMenu from "../OverlayMenu";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header>
      <Navbar onMenuOpen={() => setIsMenuOpen(true)} />
      <OverlayMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </header>
  );
}
