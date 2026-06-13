"use client";

import { useState, useEffect, useRef } from "react";
import { RiWhatsappLine, RiPhoneLine } from "react-icons/ri";
import { CONTACT_PHONES, WHATSAPP } from "@/constants";
import "./FloatingContact.css";

/**
 * FloatingContact — Fixed Call & WhatsApp buttons
 *
 * Kya: Hardcoded phone numbers → constants se import kiye.
 * Kyun: Ek jagah update karo, poore app mein reflect hoga.
 * Benefit: DRY principle, maintainability.
 *
 * Hero section mein yeh buttons hidden rehte hain (scroll > 300px par show hote hain).
 */
const FloatingContact = () => {
  const [showCallDropdown, setShowCallDropdown] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const dropdownRef = useRef(null);

  // WhatsApp URL with preset message
  const whatsappUrl = `https://wa.me/${WHATSAPP.number}?text=${encodeURIComponent(WHATSAPP.presetMessage)}`;

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowCallDropdown(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Show/hide based on scroll position (hidden in Hero section)
  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 300;
      setIsScrolled(scrolled);
      if (!scrolled) setShowCallDropdown(false);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`floating-contact-container ${isScrolled ? "visible" : ""}`}
      ref={dropdownRef}
    >
      {/* Call Dropdown Menu */}
      {showCallDropdown && (
        <div className="call-dropdown-menu" role="menu">
          {CONTACT_PHONES.map((phone) => (
            <a
              key={phone.href}
              href={phone.href}
              className="dropdown-item"
              role="menuitem"
              onClick={() => setShowCallDropdown(false)}
            >
              <RiPhoneLine className="dropdown-icon" aria-hidden="true" />
              <span>{phone.label}</span>
            </a>
          ))}
        </div>
      )}

      {/* Call Toggle Button */}
      <button
        onClick={() => setShowCallDropdown(!showCallDropdown)}
        className={`floating-btn floating-call-btn ${showCallDropdown ? "active" : ""}`}
        aria-label="Call Reservations"
        aria-expanded={showCallDropdown}
        aria-haspopup="menu"
        title="Call Reservations"
      >
        <RiPhoneLine aria-hidden="true" />
      </button>

      {/* WhatsApp Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="floating-btn floating-wa-btn"
        aria-label="Message on WhatsApp"
        title="Message on WhatsApp"
      >
        <RiWhatsappLine aria-hidden="true" />
        <span className="pulse-glow" aria-hidden="true" />
      </a>
    </div>
  );
};

export default FloatingContact;
