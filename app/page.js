"use client";

import { useState, useEffect, useRef } from "react";

export default function Home() {
  const [preloaderActive, setPreloaderActive] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isNavbarScrolled, setIsNavbarScrolled] = useState(false);
  const [weatherText, setWeatherText] = useState("Loading...");
  const [menuScrolled, setMenuScrolled] = useState(false);

  const overlayNavRef = useRef(null);
  const overlayMenuRef = useRef(null);

  // Preloader timeout and weather API call on mount
  useEffect(() => {
    // Luxury feel minimum delay
    const timer = setTimeout(() => {
      setPreloaderActive(false);
    }, 800);

    // Weather API fetch
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
        // Fallback weather
        setWeatherText("28°C");
      }
    };

    fetchWeather();

    return () => clearTimeout(timer);
  }, []);

  // Navbar scroll styling trigger
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

  // Sync menu-open body scroll lock
  useEffect(() => {
    if (isMenuOpen) {
      document.documentElement.classList.add("menu-open");
    } else {
      document.documentElement.classList.remove("menu-open");
    }
    return () => {
      document.documentElement.classList.remove("menu-open");
    };
  }, [isMenuOpen]);

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
    <>
      {/* Luxurious Preloader */}
      <div className={`preloader ${!preloaderActive ? "fade-out" : ""}`}>
        <img
          src="/assets/images/corbett-treat-resort-corbett-tiger-reserve-1.png"
          alt="Loading"
          className="preloader-logo"
        />
        <div className="loader-line"></div>
      </div>

      {/* Navigation Bar */}
      <nav className={`navbar ${isNavbarScrolled ? "scrolled" : ""}`}>
        <div className="nav-left">
          <div className="top-left-text" id="weather-widget">
            <svg
              id="weather-icon"
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              style={{ marginRight: "5px", marginBottom: "-2px" }}
            >
              <circle cx="12" cy="12" r="5" />
              <line x1="12" y1="1" x2="12" y2="3" />
              <line x1="12" y1="21" x2="12" y2="23" />
              <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
              <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
              <line x1="1" y1="12" x2="3" y2="12" />
              <line x1="21" y1="12" x2="23" y2="12" />
              <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
              <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
            </svg>
            <span id="weather-text">{weatherText}</span>
          </div>
        </div>
        <a href="#" className="logo">
          <img
            src="/assets/images/corbett-treat-resort-corbett-tiger-reserve-1.png"
            alt="Corbett Treat Resort Logo"
          />
        </a>
        <div className="nav-right">
          <a href="#book" className="nav-book-btn">
            Book now
          </a>
          <div
            className="menu-btn"
            id="menu-toggle"
            onClick={() => setIsMenuOpen(true)}
          >
            <div className="hamburger">
              <span />
              <span />
              <span />
            </div>
            <span className="menu-text">Menu</span>
          </div>
        </div>
      </nav>

      {/* Full Screen Overlay Menu */}
      <div
        className={`overlay-menu ${isMenuOpen ? "active" : ""}`}
        ref={overlayMenuRef}
        onScroll={handleMenuScroll}
      >
        <div className="overlay-header">
          <a href="#" className="overlay-logo" onClick={() => setIsMenuOpen(false)}>
            <img
              src="/assets/images/corbett-treat-resort-corbett-tiger-reserve-1.png"
              alt="Logo"
            />
          </a>
          <div
            className="overlay-close"
            id="overlay-close"
            onClick={() => setIsMenuOpen(false)}
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
                <a href="#home" onClick={() => setIsMenuOpen(false)}>Home</a>
              </li>
              <li>
                <span className="link-num">02</span>
                <a href="#about" onClick={() => setIsMenuOpen(false)}>About</a>
              </li>
              <li>
                <span className="link-num">03</span>
                <a href="#accommodation" onClick={() => setIsMenuOpen(false)}>Accommodation</a>
              </li>
              <li>
                <span className="link-num">04</span>
                <a href="#dining" onClick={() => setIsMenuOpen(false)}>Dining</a>
              </li>
              <li>
                <span className="link-num">05</span>
                <a href="#experience" onClick={() => setIsMenuOpen(false)}>Experience</a>
              </li>
              <li>
                <span className="link-num">06</span>
                <a href="#wedding" onClick={() => setIsMenuOpen(false)}>Wedding</a>
              </li>
              <li>
                <span className="link-num">07</span>
                <a href="#meeting" onClick={() => setIsMenuOpen(false)}>Meeting &amp; Event</a>
              </li>
              <li>
                <span className="link-num">08</span>
                <a href="#gallery" onClick={() => setIsMenuOpen(false)}>Gallery</a>
              </li>
              <li>
                <span className="link-num">09</span>
                <a href="#blog" onClick={() => setIsMenuOpen(false)}>Blog</a>
              </li>
              <li>
                <span className="link-num">10</span>
                <a href="#contact" onClick={() => setIsMenuOpen(false)}>Contact</a>
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
              onClick={() => setIsMenuOpen(false)}
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

      {/* Hero Section */}
      <header className="hero">
        <div className="video-background">
          <video
            autoPlay
            loop
            muted
            playsInline
            poster="/assets/images/hero-image.png"
            preload="auto"
          >
            <source src="" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="video-overlay" />
        </div>

        <div className="hero-bottom-content">
          <div className="main-text">
            <span className="hero-eyebrow">LUXURY IN THE WILD</span>
            <h1 className="sans-title">
              Wake Up To The Wild.
              <br />
              Stay Wrapped In Luxury.
            </h1>
            <p>
              Nestled beside Jim Corbett National Park, experience premium stays,
              immersive nature, curated adventures and unforgettable hospitality.
            </p>
          </div>
          <div className="hero-action">
            <a href="#book" className="book-now-btn">
              Book Now
            </a>
          </div>
        </div>
      </header>
    </>
  );
}
