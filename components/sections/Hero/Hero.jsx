"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { BOOK_NOW_URL } from "@/constants";
import "./Hero.css";

// Static data — component ke bahar define kiya taaki har render par re-create na ho
const SLIDE_CONTENT = [
  {
    title: "Welcome to Wilderness Luxury",
    desc: "Escape into the wilds and experience nature like never before at Corbett Treat Resort.",
  },
  {
    title: "Natural Swimming Pool",
    desc: "Unwind and rejuvenate at our refreshing natural pool surrounded by dense forest trees.",
  },
  {
    title: "Luxury Suites & Rooms",
    desc: "Rustic elegance meets modern luxury in our specially designed jungle-view rooms.",
  },
  {
    title: "Cozy Forest Cottages",
    desc: "Relax on the wooden decks and stargaze from your private, cozy jungle cottages.",
  },
];

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const videoRef = useRef(null);

  // Effect 1: Slide timer for image slides (1, 2, 3)
  useEffect(() => {
    if (currentSlide === 0) return; // Video slide — timer nahi chahiye

    const timer = setTimeout(() => {
      setCurrentSlide((prev) => (prev + 1) % SLIDE_CONTENT.length);
    }, 4000);

    return () => clearTimeout(timer); // Har case mein cleanup
  }, [currentSlide]);

  // Effect 2: Video play/reset — alag effect mein taaki DOM mutations React cycle se bahar rahein
  useEffect(() => {
    if (currentSlide !== 0) return;

    const video = videoRef.current;
    if (!video) return;

    video.currentTime = 0;
    video.play().catch((err) => console.log("Video play interrupted:", err));
  }, [currentSlide]);

  return (
    <div className="hero-container">
      {/* Dynamic Background Slides Section */}
      <section className="hero-video-section">
        <div className="hero-media-container">
          {/* Slide 0: Video (No loop attribute so onEnded triggers) */}
          <video
            ref={videoRef}
            className={`hero-media video-slide ${currentSlide === 0 ? "active" : ""}`}
            autoPlay
            muted
            playsInline
            preload="metadata"
            onEnded={() => setCurrentSlide(1)}
          >
            <source src="/assets/videos/wild-animal.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          {/* Slide 1: Resort Pool Image */}
          <div
            className={`hero-media image-slide ${currentSlide === 1 ? "active" : ""}`}
          >
            <Image
              src="/assets/images/swimming-pool.jpeg"
              alt="Natural Swimming Pool"
              fill
              style={{ objectFit: "cover" }}
              priority
            />
          </div>

          {/* Slide 2: Resort Room Image */}
          <div
            className={`hero-media image-slide ${currentSlide === 2 ? "active" : ""}`}
          >
            <Image
              src="/assets/images/room.jpg"
              alt="Luxury Suites & Rooms"
              fill
              style={{ objectFit: "cover" }}
            />
          </div>

          {/* Slide 3: Resort Exterior Image */}
          <div
            className={`hero-media image-slide ${currentSlide === 3 ? "active" : ""}`}
          >
            <Image
              src="/assets/images/garden-area.jpg"
              alt="Cozy Forest Cottages"
              fill
              style={{ objectFit: "cover" }}
            />
          </div>
        </div>

        <div className="hero-overlay"></div>

        {/* Overlay Content (Fades dynamically per slide) */}
        <div className="hero-content-wrapper">
          <div className="hero-content">
            {SLIDE_CONTENT.map((content, index) => (
              <div
                key={index}
                className={`calligraphy-wrapper ${currentSlide === index ? "active" : ""}`}
              >
                <h2 className="hero-slide-title">{content.title}</h2>
                <p className="hero-slide-desc">{content.desc}</p>
              </div>
            ))}
          </div>

          <a
            href={BOOK_NOW_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hero-booking-btn"
            style={{ textDecoration: "none" }}
          >
            Book Your Safari Stay
          </a>
        </div>
      </section>
    </div>
  );
};

export default Hero;
