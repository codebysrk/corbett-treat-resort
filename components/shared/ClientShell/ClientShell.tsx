"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Preloader, Header, FloatingContact } from "@/components";

export default function ClientShell() {
  const [preloaderActive, setPreloaderActive] = useState(true);
  const [preloaderMounted, setPreloaderMounted] = useState(true);
  const pathname = usePathname();

  useEffect(() => {
    // Hide preloader immediately on mount (hydration complete)
    setPreloaderActive(false);
    // Allow time for CSS fade-out transition (e.g., 800ms) before unmounting
    const unmountTimer = setTimeout(() => setPreloaderMounted(false), 800);
    return () => {
      clearTimeout(unmountTimer);
    };
  }, []);

  // Global GSAP ScrollTrigger Animations Sweep on route changes
  useEffect(() => {
    if (preloaderActive) return;

    gsap.registerPlugin(ScrollTrigger);

    // Give a small delay to make sure Next.js fully updates the DOM
    const timer = setTimeout(() => {
      // Clear existing scroll triggers to prevent duplication
      ScrollTrigger.getAll().forEach((t) => t.kill());

      const ctx = gsap.context(() => {
        // 1. Section Title / Main Heading Reveal
        const headings = Array.from(
          document.querySelectorAll(
            "h1, h2, .about-heading, .amenities-title, .section-title, .gallery-hero-title, .rooms-hero-title, .dining-hero-title, .experience-hero-title, .events-hero-title"
          )
        ).filter((el) => !el.closest(".act-section"));

        headings.forEach((heading) => {
          gsap.fromTo(
            heading,
            { opacity: 0, y: 40 },
            {
              opacity: 1,
              y: 0,
              duration: 1.2,
              ease: "power3.out",
              scrollTrigger: {
                trigger: heading,
                start: "top 88%",
                toggleActions: "play none none none",
              },
            }
          );
        });

        // 2. Subtitles / Eyebrow Labels
        const labels = Array.from(
          document.querySelectorAll(
            ".about-label, .amenities-subtitle, .gallery-hero-subtitle, .facilities-hero-eyebrow, .section-eyebrow, .dining-hero-eyebrow, .experience-hero-eyebrow, .rooms-hero-eyebrow"
          )
        ).filter((el) => !el.closest(".act-section"));

        labels.forEach((label) => {
          gsap.fromTo(
            label,
            { opacity: 0, y: -20, letterSpacing: "0.1em" },
            {
              opacity: 1,
              y: 0,
              letterSpacing: "0.25em",
              duration: 1,
              ease: "power2.out",
              scrollTrigger: {
                trigger: label,
                start: "top 90%",
                toggleActions: "play none none none",
              },
            }
          );
        });

        // 3. Staggered Grid Cards (Aesthetic reveal)
        const gridContainers = Array.from(
          document.querySelectorAll(
            ".amenities-grid, .rooms-grid, .facilities-grid, .events-grid, .activities-grid, .dining-grid"
          )
        ).filter((el) => !el.closest(".act-section"));

        gridContainers.forEach((container) => {
          const cards = container.children;
          if (cards.length > 0) {
            gsap.fromTo(
              cards,
              { opacity: 0, y: 50, scale: 0.96 },
              {
                opacity: 1,
                y: 0,
                scale: 1,
                duration: 0.8,
                stagger: 0.08,
                ease: "power2.out",
                scrollTrigger: {
                  trigger: container,
                  start: "top 85%",
                  toggleActions: "play none none none",
                },
              }
            );
          }
        });

        // 4. Parallax Image scale-down effects
        const images = Array.from(
          document.querySelectorAll(
            ".about-image-stack img, .dining-img-wrap img, .facility-img-wrap img, .room-image img, .hero-bg img, .accommodation-left-image-wrap img, .accommodation-right-image-wrap img"
          )
        ).filter((el) => !el.closest(".act-section"));

        images.forEach((img) => {
          gsap.fromTo(
            img,
            { scale: 1.12 },
            {
              scale: 1,
              scrollTrigger: {
                trigger: img,
                start: "top bottom",
                end: "bottom top",
                scrub: true,
              },
            }
          );
        });

        // 5. Description Paragraphs fade
        const paragraphs = Array.from(
          document.querySelectorAll(
            ".about-body-text p, .amenities-description, .facilities-hero-desc, .dining-hero-desc, .experience-hero-desc, .rooms-hero-desc, .accommodation-desc-text"
          )
        ).filter((el) => !el.closest(".act-section"));

        paragraphs.forEach((p) => {
          gsap.fromTo(
            p,
            { opacity: 0, y: 20 },
            {
              opacity: 1,
              y: 0,
              duration: 1,
              ease: "power2.out",
              scrollTrigger: {
                trigger: p,
                start: "top 92%",
                toggleActions: "play none none none",
              },
            }
          );
        });
      }, document.body);

      // Refresh ScrollTrigger to ensure position math matches DOM layout
      ScrollTrigger.refresh();
    }, 150);

    return () => clearTimeout(timer);
  }, [pathname, preloaderActive]);

  return (
    <>
      {preloaderMounted && <Preloader active={preloaderActive} />}
      <Header />
      <FloatingContact />
    </>
  );
}
