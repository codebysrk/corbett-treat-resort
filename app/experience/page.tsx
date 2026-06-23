import { ClientShell, Footer} from "@/components";
import Image from "next/image";
import "./experience-page.css";

export const metadata = {
  title: "Activities & Recreation | Corbett Treat Resort",
  description:
    "Discover fun outdoor activities and relaxing games at Corbett Treat Resort. Book a jungle safari in Jim Corbett National Park, play pool, table tennis, and more.",
  alternates: {
    canonical: "/experience",
  },
};

const ACTIVITIES = [
  {
    id: 1,
    label: "Safari",
    title: "7 Zones of Jungle Safari",
    desc: "Explore Jim Corbett National Park across 7 different safari zones. See tigers, elephants, leopards, and beautiful forests.",
    image: "/assets/images/gallery/safari-gypsy-parked.jpeg",
  },
  {
    id: 2,
    label: "Swimming",
    title: "Luxury Swimming Pool",
    desc: "Relax or swim in our clean resort pool surrounded by tall trees and fresh forest air.",
    image: "/assets/images/gallery/swimming-pool-sunset-view.jpeg",
  },
  {
    id: 3,
    label: "Cricket",
    title: "Lawn Cricket Ground",
    desc: "Play a friendly cricket match with your family or friends on our big green lawn.",
    image: "/assets/images/gallery/garden-lawn-exterior-1.jpeg",
  },
  {
    id: 4,
    label: "Volleyball",
    title: "Volleyball Court",
    desc: "Play volleyball on our outdoor court. It is perfect for group games and outdoor fun.",
    image: "/assets/images/gallery/sports-lawn-volleyball.jpeg",
  },
  {
    id: 5,
    label: "Badminton",
    title: "Badminton Court",
    desc: "Enjoy a game of badminton under the clear sky, surrounded by our green gardens.",
    image: "/assets/images/gallery/garden-lawn-exterior-2.jpeg",
  },
  {
    id: 6,
    label: "Indoor Games",
    title: "Table Tennis & Board Games",
    desc: "Visit our indoor games room for table tennis, carrom, chess, and board games. Fun for both kids and adults.",
    image: "/assets/images/gallery/indoor-games-room.jpeg",
  },
  {
    id: 7,
    label: "Play Area",
    title: "Kids&apos; Slides & Play Area",
    desc: "A safe outdoor play area with slides, swings, and fun games to keep your children happy.",
    image: "/assets/images/gallery/garden-kids-play-area.jpeg",
  },
  {
    id: 8,
    label: "Photography",
    title: "Wildlife Photography",
    desc: "Take beautiful photos of Jim Corbett&apos;s birds, deer, elephants, and plants in the wild.",
    image: "/assets/images/gallery/safari-gypsy-front.jpeg",
  },
];

export default function ExperiencePage() {
  const whatsappUrl = `https://wa.me/918057094258?text=${encodeURIComponent("Hello Corbett Treat Resort, I would like to inquire about activities and safari bookings.")}`;

  return (
    <>
      <ClientShell />

      <main className="experience-page-main">
        {/* Hero */}
        <section className="experience-hero">
          <div className="experience-hero-bg">
            <Image
              src="/assets/images/gallery/safari-gypsy-parked.jpeg"
              alt="Jungle Safari Gypsy at Corbett"
              fill
              sizes="100vw"
              priority
              style={{ objectFit: "cover" }}
            />
            <div className="experience-hero-overlay" />
          </div>
          <div className="experience-hero-content">
            <span className="experience-hero-eyebrow">Adventures &amp; Fun</span>
            <h1 className="experience-hero-title">Activities &amp; Recreation</h1>
            <p className="experience-hero-desc">
              From adrenaline-pumping jungle safaris to peaceful outdoor sports and indoor recreation — find your perfect balance of adventure and relaxation.
            </p>
          </div>
        </section>

        {/* Activities List */}
        <section className="experience-list-section">
          <div className="experience-grid">
            {ACTIVITIES.map((act) => (
              <div className="experience-card" key={act.id}>
                <div className="experience-img-wrap">
                  <Image
                    src={act.image}
                    alt={act.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <span className="experience-badge">{act.label}</span>
                </div>
                <div className="experience-card-body">
                  <h3 className="experience-card-title">{act.title}</h3>
                  <p className="experience-card-desc">{act.desc}</p>
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
