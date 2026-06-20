"use client";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import "./Hero.css";
import Button from "@/components/ui/Button";
import { BOOK_NOW_URL } from "@/constants";

import Image from "next/image";

export default function Hero() {
  const containerRef = useRef(null);
  const videoRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0); // 0: video, 1: pool, 2: room, 3: garden

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

  // Slide transition effect once video finishes (currentSlide > 0)
  useEffect(() => {
    if (currentSlide === 0) return;

    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev === 3 ? 1 : prev + 1));
    }, 4000);

    return () => clearInterval(timer);
  }, [currentSlide]);

  return (
    <header className="hero" ref={containerRef}>
      <div className="video-background">
        {/* Video Slide (Slide 0) */}
        <video
          ref={videoRef}
          key={isMobile ? "mobile" : "desktop"}
          autoPlay
          muted
          playsInline
          poster="/assets/images/gallery/hero-poster.png"
          preload="auto"
          onEnded={() => setCurrentSlide(1)}
          className={`hero-media-element ${currentSlide === 0 ? "active" : ""}`}
        >
          <source
            src={
              isMobile
                ? "/assets/videos/corbett-vertical-hero-video.mp4"
                : "/assets/videos/wild-animal.mp4"
            }
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>

        {/* Image Slide 1: Swimming Pool */}
        <div className={`hero-media-element image-slide ${currentSlide === 1 ? "active" : ""}`}>
          <Image
            src="/assets/images/gallery/swimming-pool.jpeg"
            alt="Natural Swimming Pool"
            fill
            sizes="100vw"
            priority
            style={{ objectFit: "cover" }}
          />
        </div>

        {/* Image Slide 2: Room */}
        <div className={`hero-media-element image-slide ${currentSlide === 2 ? "active" : ""}`}>
          <Image
            src="/assets/images/gallery/room.jpg"
            alt="Luxury Room"
            fill
            sizes="100vw"
            style={{ objectFit: "cover" }}
          />
        </div>

        {/* Image Slide 3: Outer Green Area */}
        <div className={`hero-media-element image-slide ${currentSlide === 3 ? "active" : ""}`}>
          <Image
            src="/assets/images/gallery/garden-area.jpg"
            alt="Outer Green Area"
            fill
            sizes="100vw"
            style={{ objectFit: "cover" }}
          />
        </div>

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
