"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Button } from "@/components";
import { 
  RiCompass3Line, 
  RiFireLine, 
  RiMapPinLine, 
  RiRestaurantLine, 
  RiPlantLine, 
  RiEmotionHappyLine, 
  RiWifiLine, 
  RiDropLine, 
  RiCarLine, 
  RiHeartLine, 
  RiSendPlane2Line, 
  RiDiceLine 
} from "react-icons/ri";
import { FaBinoculars, FaSwimmingPool } from "react-icons/fa";

const ICON_MAP = {
  safari: <FaBinoculars />,
  pool: <FaSwimmingPool />,
  bonfire: <RiFireLine />,
  village: <RiMapPinLine />,
  trekking: <RiCompass3Line />,
  dining: <RiRestaurantLine />,
  garden: <RiPlantLine />,
  play: <RiEmotionHappyLine />,
  wifi: <RiWifiLine />,
  hotwater: <RiDropLine />,
  parking: <RiCarLine />,
  pet: <RiHeartLine />,
  taxi: <RiSendPlane2Line />,
  games: <RiDiceLine />,
};

const FACILITIES = [
  {
    id: 1,
    title: "Jungle Safari",
    tag: "WILDERNESS",
    description: "Personalized open-jeep reserve tracking with certified naturalists.",
    iconKey: "safari",
  },
  {
    id: 2,
    title: "Swimming Pool",
    tag: "RELAX",
    description: "Crystalline turquoise pool with comfortable bespoke sun loungers.",
    iconKey: "pool",
  },
  {
    id: 3,
    title: "Bonfire Nights",
    tag: "ACOUSTIC",
    description: "Evening acoustic musical gatherings under starry jungle skies.",
    iconKey: "bonfire",
  },
  {
    id: 4,
    title: "Village Excursions",
    tag: "CULTURAL",
    description: "Immersive Kumaoni cultural walks led by community elders.",
    iconKey: "village",
  },
  {
    id: 5,
    title: "Trekking",
    tag: "ADVENTURE",
    description: "Thrilling nature walks through guided Himalayan foothill trails.",
    iconKey: "trekking",
  },
  {
    id: 6,
    title: "In-House Dining",
    tag: "BESPOKE",
    description: "Aromatic multi-cuisine masterworks and authentic local flavors.",
    iconKey: "dining",
  },
  {
    id: 7,
    title: "Children's Play Area",
    tag: "FAMILY",
    description: "Safe, scenic outdoor recreation playground for boutique guests.",
    iconKey: "play",
  },
  {
    id: 8,
    title: "Free WiFi",
    tag: "CONNECTED",
    description: "High-capacity remote-ready satellite internet connectivity.",
    iconKey: "wifi",
  },
  {
    id: 9,
    title: "Hot Water",
    tag: "",
    description: "Seamless 24/7 solar-heated thermal showers.",
    iconKey: "hotwater",
  },
  {
    id: 10,
    title: "Parking",
    tag: "",
    description: "Spacious, secure resort gated parking under round-the-clock patrol.",
    iconKey: "parking",
  },
  {
    id: 11,
    title: "Pet Friendly",
    tag: "",
    description: "Warm hospitality welcoming your beloved four-legged companions.",
    iconKey: "pet",
  },
  {
    id: 12,
    title: "Taxi Assistance",
    tag: "",
    description: "Seamless luxury shuttle bookings and local railway transit.",
    iconKey: "taxi",
  },
  {
    id: 13,
    title: "Indoor Games",
    tag: "",
    description: "Leisure lounge featuring billiards, carrom, board chess, and table tennis.",
    iconKey: "games",
  },
];

export default function FacilitiesClient() {
  const containerRef = useRef(null);
  const whatsappUrl = `https://wa.me/918057094258?text=${encodeURIComponent("Hello Corbett Treat Resort, I would like to inquire about booking a stay and using your resort facilities.")}`;

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // 1. Hero Content Entrance Animations
      gsap.fromTo(
        ".facilities-hero-eyebrow",
        { opacity: 0, y: -20, letterSpacing: "0.2em" },
        { 
          opacity: 1, 
          y: 0, 
          letterSpacing: "0.4em", 
          duration: 1.2, 
          ease: "power3.out" 
        }
      );

      gsap.fromTo(
        ".facilities-hero-title",
        { opacity: 0, y: 35 },
        { 
          opacity: 1, 
          y: 0, 
          duration: 1.2, 
          delay: 0.15,
          ease: "power3.out" 
        }
      );

      gsap.fromTo(
        ".facilities-hero-desc",
        { opacity: 0, y: 25 },
        { 
          opacity: 1, 
          y: 0, 
          duration: 1.2, 
          delay: 0.3,
          ease: "power3.out" 
        }
      );

      // Hero background parallax scale effect on scroll
      gsap.fromTo(
        ".facilities-hero-bg img",
        { scale: 1.15 },
        {
          scale: 1,
          scrollTrigger: {
            trigger: ".facilities-hero",
            start: "top top",
            end: "bottom top",
            scrub: true
          }
        }
      );

      // 2. Facility Cards ScrollTrigger Reveal
      gsap.fromTo(
        ".facility-card",
        { 
          opacity: 0, 
          y: 60,
          scale: 0.96
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          stagger: 0.06,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".facilities-grid",
            start: "top 85%",
            toggleActions: "play none none none",
          }
        }
      );

      // 3. CTA Button ScrollTrigger Reveal
      gsap.fromTo(
        ".inquire-btn-container",
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".inquire-btn-container",
            start: "top 90%",
            toggleActions: "play none none none",
          }
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  // Custom interactive GSAP hover animations
  const handleMouseEnter = (e) => {
    const card = e.currentTarget;
    const icon = card.querySelector(".facility-icon");
    const iconBg = card.querySelector(".facility-icon-container");

    gsap.to(card, { 
      y: -8, 
      boxShadow: "0 15px 35px rgba(30, 61, 47, 0.12)", 
      borderColor: "#c8ae86", 
      duration: 0.35, 
      ease: "power2.out" 
    });

    gsap.to(icon, { 
      rotate: 360, 
      scale: 1.25, 
      color: "#1e3d2f", 
      duration: 0.5, 
      ease: "back.out(1.8)" 
    });

    gsap.to(iconBg, { 
      backgroundColor: "#c8ae86", 
      duration: 0.35, 
      ease: "power2.out" 
    });
  };

  const handleMouseLeave = (e) => {
    const card = e.currentTarget;
    const icon = card.querySelector(".facility-icon");
    const iconBg = card.querySelector(".facility-icon-container");

    gsap.to(card, { 
      y: 0, 
      boxShadow: "0 0px 0px rgba(0, 0, 0, 0)", 
      borderColor: "#eae6df", 
      duration: 0.35, 
      ease: "power2.out" 
    });

    gsap.to(icon, { 
      rotate: 0, 
      scale: 1, 
      color: "#5b564c", 
      duration: 0.5, 
      ease: "power2.out" 
    });

    gsap.to(iconBg, { 
      backgroundColor: "#f6f4ee", 
      duration: 0.35, 
      ease: "power2.out" 
    });
  };

  return (
    <div ref={containerRef}>
      <section className="facilities-list-section">
        <div className="facilities-grid">
          {FACILITIES.map((fac) => (
            <div 
              className="facility-card" 
              key={fac.id}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              style={{ cursor: "pointer" }}
            >
              <div className="facility-icon-container">
                <span className="facility-icon">
                  {ICON_MAP[fac.iconKey]}
                </span>
              </div>
              <div className="facility-card-body">
                <div className="facility-card-header">
                  <h3 className="facility-card-title">{fac.title}</h3>
                  {fac.tag && (
                    <span className="facility-card-tag">{fac.tag}</span>
                  )}
                </div>
                <p className="facility-card-desc">{fac.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="inquire-btn-container" style={{ textAlign: "center", marginTop: "4rem" }}>
          <Button
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            variant="primary"
            size="large"
          >
            Inquire For Booking
          </Button>
        </div>
      </section>
    </div>
  );
}
