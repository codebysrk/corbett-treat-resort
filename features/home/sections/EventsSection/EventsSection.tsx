"use client";

import React from "react";
import Image from "next/image";
import "./EventsSection.css";

const eventTypes = [
  {
    id: "weddings",
    title: "Weddings",
    subtitle: "Nuptials In Nature",
    description:
      "Pristine riverside mandaps, deep forest backdrops, and candle-lit wooden deck receptions. Say 'I do' surrounded by wild Kumaon beauty.",
    image: "/assets/images/events/wedding.jpg",
  },
  {
    id: "corporate-groups",
    title: "Corporate Groups",
    subtitle: "Team Building & Seminars",
    description:
      "Elite executive gatherings, team brainstorming escapes, and corporate summits in a glass-front pavilion with state-of-the-art facilities.",
    image: "/assets/images/events/corporate-gathering.avif",
  },
  {
    id: "birthdays",
    title: "Birthday Parties",
    subtitle: "Milestones & Joy",
    description:
      "Blow out your candles under the starlit sky with custom themed decor, delightful cakes, and customized chef menus tailored for all age groups.",
    image: "/assets/images/events/birthday.png",
  },
  {
    id: "kitty-parties",
    title: "Kitty Parties",
    subtitle: "Chic Socials & High Tea",
    description:
      "Unwind with your close circle with elegant garden setups, curated finger foods, refreshing mocktails, and exciting games in our lush green lawns.",
    image: "/assets/images/events/kitty-party.png",
  },
  {
    id: "get-togethers",
    title: "Get Togethers",
    subtitle: "Reunions & Family Meets",
    description:
      "Gather your loved ones or old friends for nostalgic bonfire nights, live acoustic music, and cozy chats surrounded by the tranquil forest.",
    image: "/assets/images/events/get-together.png",
  },
  {
    id: "dj-parties",
    title: "DJ Parties",
    subtitle: "Electric Forest Nights",
    description:
      "Dance the night away with professional sound systems, dynamic laser lighting, and a live DJ set under the night sky at our poolside or lawns.",
    image: "/assets/images/events/dj-party.png",
  },
];

export default function EventsSection() {
  const getWhatsappUrl = (eventTitle: string) => {
    const message = `Hello Corbett Treat Resort, I would like to inquire about hosting a ${eventTitle} event at your resort.`;
    return `https://wa.me/918057094258?text=${encodeURIComponent(message)}`;
  };

  return (
    <section id="events" className="events-section">
      <div className="events-container">
        
        <div className="events-header">
          <h2 className="events-title">Unforgettable Events</h2>
          <p className="events-intro">
            Jim Corbett&apos;s premier event destination. Host weddings, summits, birthdays, kitty parties, or
            milestones in gorgeous wilderness settings.
          </p>
        </div>

        
        <div className="events-grid">
          {eventTypes.map((event) => (
            <div key={event.id} className="event-simple-card">
              
              <div className="event-image-wrap">
                <Image
                  src={event.image}
                  alt={event.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  style={{ objectFit: "cover" }}
                />
              </div>

              
              <div className="event-content-wrap">
                <span className="event-subtitle">{event.subtitle}</span>
                <h3 className="event-card-heading">{event.title}</h3>
                <p className="event-card-desc">{event.description}</p>
                <div style={{ marginTop: "1rem" }}>
                  <a
                    href={getWhatsappUrl(event.title)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="event-inquire-link"
                    style={{
                      display: "inline-block",
                      fontSize: "0.8rem",
                      fontWeight: "600",
                      color: "var(--primary-gold-dark, #a88e68)",
                      textTransform: "uppercase",
                      letterSpacing: "0.1em",
                      textDecoration: "none",
                      borderBottom: "1px solid var(--primary-gold, #c8ae86)",
                      paddingBottom: "2px",
                      transition: "color 0.3s ease, border-color 0.3s ease"
                    }}
                    onMouseEnter={(e: React.MouseEvent<HTMLAnchorElement>) => {
                      const target = e.currentTarget;
                      target.style.color = "var(--text-dark, #2a211b)";
                      target.style.borderColor = "var(--text-dark, #2a211b)";
                    }}
                    onMouseLeave={(e: React.MouseEvent<HTMLAnchorElement>) => {
                      const target = e.currentTarget;
                      target.style.color = "var(--primary-gold-dark, #a88e68)";
                      target.style.borderColor = "var(--primary-gold, #c8ae86)";
                    }}
                  >
                    Inquire Now &rarr;
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
