import { ClientShell, Footer} from "@/components";
import Image from "next/image";
import "./experience-page.css";

export const metadata = {
  title: "Activities & Recreation | Corbett Treat Resort",
  description:
    "Discover thrilling adventures and relaxing recreation at Corbett Treat Resort. From jungle safari in Jim Corbett National Park to pool table tennis, outdoor games.",
};

const ACTIVITIES = [
  {
    id: 1,
    label: "Safari",
    title: "7 Zones of Jungle Safari",
    desc: "Explore the wild heart of Jim Corbett National Park across 7 unique safari zones. Meet tigers, elephants, leopards, and beautiful wilderness environments.",
    image: "/assets/images/gallery/safari-gypsy-parked.jpeg",
  },
  {
    id: 2,
    label: "Swimming",
    title: "Luxury Swimming Pool",
    desc: "Unwind or swim laps in our crystal-clear resort pool surrounded by nature, tall trees, and fresh forest air.",
    image: "/assets/images/gallery/swimming-pool-sunset-view.jpeg",
  },
  {
    id: 3,
    label: "Cricket",
    title: "Lawn Cricket Ground",
    desc: "Gather your group or family for a friendly match on our spacious green cricket lawn, custom-made for active leisure.",
    image: "/assets/images/gallery/garden-lawn-exterior-1.jpeg",
  },
  {
    id: 4,
    label: "Volleyball",
    title: "Volleyball Court",
    desc: "Spike and serve on our dedicated outdoor volleyball court. Ideal for high-energy group activities and outdoor fun.",
    image: "/assets/images/gallery/sports-lawn-volleyball.jpeg",
  },
  {
    id: 5,
    label: "Badminton",
    title: "Badminton Court",
    desc: "Enjoy a fast-paced game of badminton under the clear skies, set against our beautifully landscaped gardens.",
    image: "/assets/images/gallery/garden-lawn-exterior-2.jpeg",
  },
  {
    id: 6,
    label: "Indoor Games",
    title: "Table Tennis & Board Games",
    desc: "Head over to our recreation room for table tennis, carrom, chess, and card games. Perfect for keeping children and adults entertained.",
    image: "/assets/images/gallery/indoor-games-room.jpeg",
  },
  {
    id: 7,
    label: "Play Area",
    title: "Kids&apos; Slides & Play Area",
    desc: "A safe, fun-filled outdoor play area with slides, swings, and activities, perfect for keeping young adventurers entertained.",
    image: "/assets/images/gallery/garden-kids-play-area.jpeg",
  },
  {
    id: 8,
    label: "Photography",
    title: "Wildlife Photography",
    desc: "Capture breathtaking frames of Jim Corbett&apos;s rich birdlife, deer, elephants, and rare flora in their pristine natural habitats.",
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
