"use client";

import { useState, useEffect, useRef } from "react";
import "./OverlayMenu.css";

export default function OverlayMenu({ isOpen, onClose }) {
  const [menuScrolled, setMenuScrolled] = useState(false);
  const overlayNavRef = useRef(null);
  const overlayMenuRef = useRef(null);

  // Sync menu-open body scroll lock
  useEffect(() => {
    if (isOpen) {
      document.documentElement.classList.add("menu-open");
    } else {
      document.documentElement.classList.remove("menu-open");
    }
    return () => {
      document.documentElement.classList.remove("menu-open");
    };
  }, [isOpen]);

  // Handle scroll event inside overlay menu to hide the bounce arrow
  const handleMenuScroll = () => {
    const menuScroll = overlayMenuRef.current ? overlayMenuRef.current.scrollTop : 0;
    const navScroll = overlayNavRef.current ? overlayNavRef.current.scrollTop : 0;
    if (menuScroll > 40 || navScroll > 40) {
      setMenuScrolled(true);
    } else {
      setMenuScrolled(false);
    }
  };

  return (
    <div
      className={`overlay-menu ${isOpen ? "active" : ""}`}
      ref={overlayMenuRef}
      onScroll={handleMenuScroll}
    >
      <div className="overlay-header">
        <a href="#" className="overlay-logo" onClick={onClose}>
          <img
            src="/assets/images/resort-logo.png"
            alt="Logo"
          />
        </a>
        <div
          className="overlay-close"
          id="overlay-close"
          onClick={onClose}
        >
          <span />
          <span />
        </div>
      </div>

      <div className="overlay-body">
        <div
          className="overlay-nav"
          ref={overlayNavRef}
          onScroll={handleMenuScroll}
        >
          <ul className="overlay-links">
            <li>
              <span className="link-num">01</span>
              <a href="#home" onClick={onClose}>Home</a>
            </li>
            <li>
              <span className="link-num">02</span>
              <a href="#about" onClick={onClose}>About</a>
            </li>
            <li>
              <span className="link-num">03</span>
              <a href="#accommodation" onClick={onClose}>Accommodation</a>
            </li>
            <li>
              <span className="link-num">04</span>
              <a href="#dining" onClick={onClose}>Dining</a>
            </li>
            <li>
              <span className="link-num">05</span>
              <a href="#experience" onClick={onClose}>Experience</a>
            </li>
            <li>
              <span className="link-num">06</span>
              <a href="#wedding" onClick={onClose}>Wedding</a>
            </li>
            <li>
              <span className="link-num">07</span>
              <a href="#meeting" onClick={onClose}>Meeting &amp; Event</a>
            </li>
            <li>
              <span className="link-num">08</span>
              <a href="#gallery" onClick={onClose}>Gallery</a>
            </li>
            <li>
              <span className="link-num">09</span>
              <a href="#blog" onClick={onClose}>Blog</a>
            </li>
            <li>
              <span className="link-num">10</span>
              <a href="#contact" onClick={onClose}>Contact</a>
            </li>
          </ul>
        </div>
        <div className="overlay-info">
          <div className="overlay-info-block">
            <h4>Visit Us</h4>
            <p>
              Village Dhela, Jim Corbett National Park,
              <br />
              Ramnagar, Uttarakhand 244715
            </p>
          </div>
          <div className="overlay-info-block">
            <h4>Reservations</h4>
            <p>
              <a href="tel:+918057094258">+91 80570 94258</a>
              <br />
              <a href="tel:+919818922066">+91 98189 22066</a>
            </p>
          </div>
          <a
            href="#book"
            className="overlay-cta"
            onClick={onClose}
          >
            Book Your Stay &rarr;
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div
        className={`overlay-scroll-indicator ${menuScrolled ? "fade-out" : ""}`}
        id="overlay-scroll-indicator"
      >
        <svg
          className="scroll-arrow"
          width="25"
          height="35"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </div>
    </div>
  );
}
