"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { Button } from "@/components";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./ActivitiesSection.css";

export default function ActivitiesSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // Heading reveal
      gsap.fromTo(
        ".act-heading",
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".act-heading",
            start: "top 88%",
            toggleActions: "play none none none",
          },
        }
      );

      // Eyebrow reveal
      gsap.fromTo(
        ".act-eyebrow",
        { opacity: 0, y: -20, letterSpacing: "0.15em" },
        {
          opacity: 1,
          y: 0,
          letterSpacing: "0.3em",
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".act-eyebrow",
            start: "top 90%",
            toggleActions: "play none none none",
          },
        }
      );

      // Body text & Button reveal
      gsap.fromTo(
        [".act-body", ".act-action-btn"],
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          stagger: 0.1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".act-body",
            start: "top 92%",
            toggleActions: "play none none none",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="act-section" id="experience" ref={sectionRef}>
      <div className="act-container">
        <div className="act-split-layout">
          {/* Left Column: Image */}
          <div className="act-image-pane">
            <Image
              src="/assets/images/activity/playing-kids.jpeg"
              alt="Kids playing in resort garden playground"
              width={650}
              height={450}
              className="act-main-image"
              style={{ objectFit: "cover", width: "100%", height: "100%", borderRadius: "8px" }}
              priority={true}
            />
          </div>

          {/* Right Column: Info & Summary */}
          <div className="act-info-pane">
            <span className="act-eyebrow">Activities &amp; Recreation</span>
            <h2 className="act-heading">
              Adventures <em>&amp;</em> Recreation
            </h2>
            <p className="act-body">
              Enjoy exciting activities for all ages, including Swimming Pool, Volleyball, Cricket,
              Badminton, Table Tennis, Kids&apos; Slides, Jungle Safari, and Wildlife
              Photography—perfect for fun, adventure, and relaxation during your stay.
            </p>

            <div className="act-action-btn">
              <Button href="/experience" variant="primary" size="large">
                Explore All Activities
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
