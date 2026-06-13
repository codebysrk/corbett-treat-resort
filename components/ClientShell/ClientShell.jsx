"use client";

import { useState, useEffect } from "react";
import { Preloader, Navbar, OverlayMenu, FloatingContact } from "@/components";

/**
 * ClientShell — Client-side state wrapper
 *
 * Kya: Preloader aur Menu state yahan isolate kiya hai.
 * Kyun: `page.jsx` ko "use client" nahi chahiye tha sirf state ke liye.
 *       Sirf yeh wrapper client-side hai, baaki saare page/section
 *       Server Components hain — faster initial load aur better performance.
 * Benefit: React Server Components ka full benefit milega baaki sections ko.
 */
export default function ClientShell() {
  const [preloaderActive, setPreloaderActive] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Preloader minimum delay — luxury feel ke liye
  useEffect(() => {
    const timer = setTimeout(() => setPreloaderActive(false), 800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Preloader active={preloaderActive} />
      <Navbar onMenuOpen={() => setIsMenuOpen(true)} />
      <OverlayMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
      <FloatingContact />
    </>
  );
}
