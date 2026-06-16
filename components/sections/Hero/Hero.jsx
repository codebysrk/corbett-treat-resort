"use client";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import "./Hero.css";
import Button from "../../Button";
import { BOOK_NOW_URL } from "@/constants";

export default function Hero() {
  const containerRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Detect mobile device layout
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Run on mount
    checkMobile();

    // Listen to viewport changes
    window.addEventListener("resize", checkMobile);

    const ctx = gsap.context(() => {
      gsap.fromTo(
        [".hero-eyebrow", ".hero-title", ".main-text p", ".hero-action"],
        {
          opacity: 0,
          y: 40,
        },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          stagger: 0.15,
          ease: "power3.out",
          delay: 0.2,
        }
      );
    }, containerRef);

    return () => {
      ctx.revert();
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  return (
    <header className="hero" ref={containerRef}>
      <div className="video-background">
        <video
          key={isMobile ? "mobile" : "desktop"}
          autoPlay
          loop
          muted
          playsInline
          poster="/assets/images/hero-poster.png"
          preload="auto"
        >
          <source
            src={
              isMobile
                ? "/assets/videos/corbett-vertical-hero-video.mp4"
                : " "
            }
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
        <div className="video-overlay" />
      </div>

      <div className="hero-bottom-content">
        <div className="main-text">
          <span className="hero-eyebrow">LUXURY IN THE WILD</span>
          <h1 className="hero-title">
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
          <Button
            href={BOOK_NOW_URL}
            target="_blank"
            rel="noopener noreferrer"
            variant="primary"
            className="story-cta-btn"
          >
            Book Now
          </Button>
        </div>
      </div>
    </header>
  );
}
