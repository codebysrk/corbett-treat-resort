"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { BOOK_NOW_URL } from "@/constants";
import { Button, Counter } from "@/components";
import "./AboutSection.css";

/* ─── Decorative Mountain Sketch (SVG sub-component) ─── */
const MountainSketch = () => (
  <svg
    className="about-mountain-svg"
    viewBox="0 0 900 700"
    fill="none"
    stroke="#3d4f2a"
    strokeWidth="1"
    strokeLinecap="round"
    strokeLinejoin="round"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    {/* Clouds */}
    <g opacity="0.55">
      <path d="M40 90 q30 -25 70 -10 q20 -20 55 -10 q30 -15 60 5" />
      <path d="M180 70 q40 -20 80 -5" />
      <path d="M520 50 q40 -25 90 -10 q30 -15 70 0 q25 -10 50 5" />
      <path d="M700 90 q30 -15 70 -5 q25 -15 60 0" />
      <path d="M820 40 q20 -10 60 0" />
    </g>

    {/* Mountain range */}
    <g opacity="0.7">
      <path d="M0 420 L120 280 L180 340 L260 220 L360 360 L430 290 L520 380 L610 250 L720 360 L820 300 L900 380" />
      <path d="M260 220 L300 270 M280 250 L320 295" opacity="0.6" />
      <path d="M610 250 L640 290 M625 270 L660 300" opacity="0.6" />
      {/* Secondary range */}
      <path
        d="M0 470 L90 400 L160 440 L240 380 L330 450 L420 400 L500 460 L600 400 L700 470 L800 420 L900 470"
        opacity="0.55"
      />
    </g>

    {/* Foreground brush strokes */}
    <g opacity="0.45">
      <path d="M0 540 q60 -15 130 0 q70 15 150 -5 q80 -20 170 5 q90 25 180 -10 q90 -25 180 5 q40 12 90 0" />
      <path d="M40 580 q80 -10 160 5 q90 20 180 -10 q90 -25 180 5 q90 25 180 -10 q40 -12 90 0" />
      <path d="M0 620 q80 -8 170 6 q100 16 200 -6 q120 -22 230 6 q70 18 130 -2" />
    </g>

    {/* Vertical hatch lines */}
    <g opacity="0.35">
      {Array.from({ length: 14 }).map((_, i) => (
        <path
          key={i}
          d={`M${120 + i * 55} ${500 + (i % 3) * 8} l-6 ${60 + (i % 4) * 10}`}
        />
      ))}
    </g>
  </svg>
);

/* ─── Experience Badge Sub-Component ─── */
const ExperienceBadge = () => (
  <div className="about-experience-badge">
    <span className="about-badge-number">
      10<sup>+</sup>
    </span>
    <span className="about-badge-text">
      YEARS OF
      <br />
      EXPERIENCE
    </span>
  </div>
);

/* ═══════════════════════════════════════════════════════════
   MAIN COMPONENT — AboutSection
   ═══════════════════════════════════════════════════════════ */
const AboutSection = () => {
  const [isMuted, setIsMuted] = useState(true);
  const [isFading, setIsFading] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  // Fade out slightly before the video ends
  const handleTimeUpdate = (e: React.SyntheticEvent<HTMLVideoElement>) => {
    const video = e.target as HTMLVideoElement;
    if (video.duration) {
      const timeRemaining = video.duration - video.currentTime;
      // Start fading out when 0.4 seconds remain
      if (timeRemaining < 0.4 && !isFading) {
        setIsFading(true);
      }
    }
  };

  // When video ends, restart from beginning and fade back in
  const handleEnded = (e: React.SyntheticEvent<HTMLVideoElement>) => {
    const video = e.target as HTMLVideoElement;
    video.currentTime = 0;
    video
      .play()
      .then(() => {
        // Small delay to ensure the video actually began playing first frame
        setTimeout(() => {
          setIsFading(false);
        }, 50);
      })
      .catch((err) => {
        console.log("Autoplay error on loop:", err);
        setIsFading(false);
      });
  };

  return (
    <section className="about-section" id="about">
      {/* Decorative mountain sketch background */}
      <MountainSketch />

      {/* Bottom decorative wash */}
      <div className="about-bottom-wash" aria-hidden="true" />

      {/* Grid: Text + Images */}
      <div className="about-grid">
        {/* ─── Left: Text Content ─── */}
        <div className="about-text-col">
          <span className="about-label">About Us</span>

          <h2 className="about-heading">
            A Warm Welcome,
            <br />
            Every Time
          </h2>

          <div className="about-body-text">
            <p>
              Corbett Treat Resort is a beautiful resort located in the
              peaceful village Dhela, near the famous Jim
              Corbett National Park. Designed for guests looking for both
              fun and comfort, the resort combines modern amenities with
              the natural beauty of the forest.
            </p>
            <p>
              Whether you are planning a family holiday, romantic trip,
              wildlife safari, destination wedding, or corporate event,
              Corbett Treat Resort offers comfortable rooms, delicious food,
              exciting jungle safaris, and friendly service. Surrounded by green
              forests and wild animals, you can easily relax and enjoy your
              stay close to nature.
            </p>
            <p>
              From early morning bird songs and exciting safaris to
              relaxing evenings by the pool and bonfires under the
              stars, we make sure you have a wonderful stay in Jim Corbett.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="about-cta-row">
            <Button
              href={BOOK_NOW_URL}
              target="_blank"
              rel="noopener noreferrer"
              variant="primary"
            >
              Get Your Reservation
            </Button>
            <Link href="/about" className="about-btn-learn">
              <span className="about-btn-learn-text">Learn More</span>
            </Link>
          </div>
        </div>

        {/* ─── Right: Image Stack ─── */}
        <div className="about-image-stack">
          {/* Back Image (Pool / Resort) */}
          <div className="about-img-back">
            <Image
              src="/assets/images/gallery/swimming-pool-side-view.jpeg"
              alt="Resort pool with scenic mountain view"
              fill
              sizes="(max-width: 48rem) 60vw, 35vw"
              style={{ objectFit: "cover" }}
            />
            <ExperienceBadge />
          </div>

          {/* Front Video (Jungle / Safari) with Autoplay */}
          <div className="about-img-front">
            <video
              ref={videoRef}
              className={`about-video-player ${isFading ? "is-fading" : ""}`}
              src="/assets/videos/corbett-vertical-hero-video.mp4"
              autoPlay
              muted={isMuted}
              playsInline
              onClick={() => setIsMuted(!isMuted)}
              onTimeUpdate={handleTimeUpdate}
              onEnded={handleEnded}
              style={{ cursor: "pointer" }}
            />
            {/* Small mute/unmute control indicator overlay */}
            <button
              className="about-mute-indicator-btn"
              onClick={() => setIsMuted(!isMuted)}
              aria-label={isMuted ? "Unmute video" : "Mute video"}
            >
              {isMuted ? (
                <svg
                  viewBox="0 0 24 24"
                  className="about-mute-icon"
                  fill="currentColor"
                >
                  <path d="M16.5 12c0-1.77-1.02-3.29-2.5-4.03v2.21l2.45 2.45c.03-.21.05-.42.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51C20.63 14.91 21 13.5 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06c1.38-.31 2.63-.95 3.69-1.81L19.73 21 21 19.73l-9-9L4.27 3zM12 4L9.91 6.09 12 8.18V4z" />
                </svg>
              ) : (
                <svg
                  viewBox="0 0 24 24"
                  className="about-mute-icon"
                  fill="currentColor"
                >
                  <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* ─── Stats Counter Bar ─── */}
      <div className="about-stats-bar">
        {[
          { label: "Guests Served", value: "5.0k+" },
          { label: "Team Members", value: "50+" },
          { label: "Rooms & Suites", value: "24+" },
          { label: "Customer Satisfaction", value: "99%" },
        ].map((stat) => (
          <div key={stat.label} className="about-stat-item">
            <span className="about-stat-label">{stat.label}</span>
            <span className="about-stat-value">
              <Counter value={stat.value} />
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AboutSection;
