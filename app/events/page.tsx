import { ClientShell, Footer, Button } from "@/components";
import Image from "next/image";
import { RiGroupLine } from "react-icons/ri";
import "./events-page.css";

export const metadata = {
  title: "Weddings, Meetings & Events | Corbett Treat Resort",
  description:
    "Host corporate events, summits, destination weddings, and milestone celebrations at Corbett Treat Resort, Jim Corbett. Scenic locations and top facilities.",
};

const EVENTS = [
  {
    id: "weddings",
    title: "Weddings",
    subtitle: "Nuptials In Nature",
    description:
      "Riverside mandaps, deep forest backdrops, and candle-lit wooden deck receptions. Say 'I do' surrounded by the wild beauty of Kumaon.",
    image: "/assets/images/events/wedding.jpg",
    capacity: "Up to 350 Guests",
  },
  {
    id: "corporate-groups",
    title: "Corporate Groups",
    subtitle: "Team Building & Seminars",
    description:
      "Executive board meetings, team-building outbound programs, and corporate retreats hosted in our modern pavilion with top projection and audio facilities.",
    image: "/assets/images/events/corporate-gathering.avif",
    capacity: "Up to 150 Attendees",
  },
  {
    id: "birthdays",
    title: "Birthday Parties",
    subtitle: "Milestones & Joy",
    description:
      "Blow out your candles under the starlit sky with custom themed decor, delightful cakes, and customized chef menus tailored for all age groups.",
    image: "/assets/images/events/birthday.png",
    capacity: "20 to 150 Guests",
  },
  {
    id: "kitty-parties",
    title: "Kitty Parties",
    subtitle: "Chic Socials & High Tea",
    description:
      "Unwind with your close circle with elegant garden setups, curated finger foods, refreshing mocktails, and exciting games in our lush green lawns.",
    image: "/assets/images/events/kitty-party.png",
    capacity: "15 to 50 Guests",
  },
  {
    id: "get-togethers",
    title: "Get Togethers",
    subtitle: "Reunions & Family Meets",
    description:
      "Gather your loved ones or old friends for nostalgic bonfire nights, live acoustic music, and cozy chats surrounded by the tranquil forest.",
    image: "/assets/images/events/get-together.png",
    capacity: "10 to 100 Guests",
  },
  {
    id: "dj-parties",
    title: "DJ Parties",
    subtitle: "Electric Forest Nights",
    description:
      "Dance the night away with professional sound systems, dynamic laser lighting, and a live DJ set under the night sky at our poolside or lawns.",
    image: "/assets/images/events/dj-party.png",
    capacity: "50 to 200 Guests",
  },
];

export default function EventsPage() {
  const getWhatsappUrl = (title) => {
    const message = `Hello Corbett Treat Resort, I would like to inquire about hosting a ${title} event at your resort.`;
    return `https://wa.me/918057094258?text=${encodeURIComponent(message)}`;
  };

  return (
    <>
      <ClientShell />

      <main className="events-page-main">
        {/* Hero */}
        <section className="events-hero">
          <div className="events-hero-bg">
            <Image
              src="/assets/images/events/wedding.jpg"
              alt="Destination Wedding Setup at Jim Corbett"
              fill
              sizes="100vw"
              priority
              style={{ objectFit: "cover" }}
            />
            <div className="events-hero-overlay" />
          </div>
          <div className="events-hero-content">
            <span className="events-hero-eyebrow">Host Your Event</span>
            <h1 className="events-hero-title">Meetings &amp; Events</h1>
            <p className="events-hero-desc">
              Make your weddings, corporate retreats, birthdays, kitty parties, get togethers, or private milestone
              celebrations truly unforgettable in the scenic wilderness of Jim Corbett.
            </p>
          </div>
        </section>

        {/* Events Grid */}
        <section className="events-list-section">
          <div className="events-page-grid">
            {EVENTS.map((event) => (
              <div className="events-card" key={event.id}>
                <div className="events-img-wrap">
                  <Image
                    src={event.image}
                    alt={event.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <div className="events-card-body">
                  <div className="events-card-text">
                    <span className="events-card-subtitle">
                      {event.subtitle}
                    </span>
                    <h3 className="events-card-title">{event.title}</h3>
                    <p className="events-card-desc">{event.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
