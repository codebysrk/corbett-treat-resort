"use client";

import { useState, useEffect } from "react";
import { RiSunLine } from "react-icons/ri";
import "./Navbar.css";
import Hamburger from "../Hamburger";

export default function Navbar({ onMenuOpen }) {
  const [isNavbarScrolled, setIsNavbarScrolled] = useState(false);
  const [weatherText, setWeatherText] = useState("Loading...");

  // Weather API fetch
  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const res = await fetch(
          "https://api.open-meteo.com/v1/forecast?latitude=29.3948&longitude=79.1278&current_weather=true"
        );
        const data = await res.json();
        if (data && data.current_weather) {
          const temp = Math.round(data.current_weather.temperature);
          setWeatherText(`${temp}°C`);
        }
      } catch (error) {
        setWeatherText("28°C");
      }
    };
    fetchWeather();
  }, []);

  // Navbar scroll listener
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= window.innerHeight - 80) {
        setIsNavbarScrolled(true);
      } else {
        setIsNavbarScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`navbar ${isNavbarScrolled ? "scrolled" : ""}`}>
      <div className="nav-left">
        <div className="top-left-text" id="weather-widget">
          <RiSunLine id="weather-icon" />
          <span id="weather-text">{weatherText}</span>
        </div>
      </div>
      <a href="#" className="logo">
        <img
          src="/assets/images/resort-logo.png"
          alt="Corbett Treat Resort Logo"
        />
      </a>
      <div className="nav-right">
        <a href="#book" className="nav-book-btn">
          Book now
        </a>
        <Hamburger onClick={onMenuOpen} scrolled={isNavbarScrolled} />
      </div>
    </nav>
  );
}
