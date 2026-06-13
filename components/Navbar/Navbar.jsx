"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { RiSunLine } from "react-icons/ri";
import "./Navbar.css";
import Hamburger from "../Hamburger";
import Button from "../Button";

export default function Navbar({ onMenuOpen }) {
  const [isNavbarScrolled, setIsNavbarScrolled] = useState(false);
  const [weatherText, setWeatherText] = useState("Loading...");

  // Weather API fetch — Jim Corbett coordinates
  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const res = await fetch(
          "https://api.open-meteo.com/v1/forecast?latitude=29.4066404&longitude=79.0045796&current_weather=true",
        );
        const data = await res.json();
        if (data?.current_weather) {
          const temp = Math.round(data.current_weather.temperature);
          setWeatherText(`${temp}°C`);
        }
      } catch {
        // Fallback to local average if API fails
        setWeatherText("28°C");
      }
    };
    fetchWeather();
  }, []);

  // Navbar scroll listener — changes appearance after a slight scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsNavbarScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`navbar ${isNavbarScrolled ? "scrolled" : ""}`}>
      <div className="nav-left">
        <div className="top-left-text" id="weather-widget">
          <RiSunLine id="weather-icon" aria-hidden="true" />
          <span id="weather-text">{weatherText}</span>
        </div>
      </div>

      {/* Logo — Link to homepage for correct scroll-to-top + SEO */}
      <Link href="/" className="logo" aria-label="Corbett Treat Resort — Home">
        <Image
          src="/assets/images/resort-logo.png"
          alt="Corbett Treat Resort Logo"
          width={120}
          height={80}
          priority
          style={{ width: "auto" }}
          className="logo-img"
        />
      </Link>

      <div className="nav-right">
        <Button
          href="#book"
          variant="primary"
          size="small"
          className="nav-book-btn"
        >
          Book now
        </Button>
        <Hamburger onClick={onMenuOpen} scrolled={isNavbarScrolled} />
      </div>
    </nav>
  );
}
