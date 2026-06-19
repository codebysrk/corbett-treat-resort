"use client";

import { useState, useEffect } from "react";
import ResortLogo from "../ui/ResortLogo";
import Link from "next/link";
import "./Header.css";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { label: "Home", href: "/" },
    { label: "Rooms", href: "/accommodation" },
    { label: "Dining", href: "/dining" },
    { label: "Adventure Activities", href: "/#adventure-activities" },
    { label: "Places to Visit", href: "/#places-to-visit" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ];
  return (
    <header className="header-root">
      {/* Dynamic Header Bar class */}
      <div className={`header-bar ${isScrolled ? "scrolled" : ""}`}>
        {/* Mobile Hamburger Button (Left on mobile, hidden on Desktop) */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="menu-trigger"
          aria-label="Toggle Menu"
        >
          {isOpen ? (
            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>

        {/* Left Menu (Desktop only) */}
        <nav className="desktop-nav left-nav">
          {menuItems.slice(0, 3).map((item) => (
            <Link key={item.label} href={item.href} className="nav-link">
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Center Logo Area */}
        <div className="logo-center-wrapper">
          <div className="logo-absolute">
            <Link href="/">
              <ResortLogo />
            </Link>
          </div>
        </div>

        {/* Right Menu (Desktop only) */}
        <nav className="desktop-nav right-nav">
          {menuItems.slice(3).map((item, index) => (
            <Link key={index} href={item.href} className="nav-link">
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Placeholder element on right for mobile balance */}
        <div className="mobile-spacer"></div>
      </div>

      {/* Mobile Drawer Navigation overlay */}
      {isOpen && (
        <div className="drawer-overlay" onClick={() => setIsOpen(false)} />
      )}

      {/* Mobile Drawer Menu */}
      <div className={`drawer-panel ${isOpen ? "open" : ""}`}>
        <div className="drawer-content">
          {/* Menu Drawer Header */}
          <div className="drawer-header">
            <span className="drawer-title">MENU</span>
            <button onClick={() => setIsOpen(false)} className="drawer-close">
              <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          {/* Links List */}
          <nav className="drawer-nav">
            {menuItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="drawer-link"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
