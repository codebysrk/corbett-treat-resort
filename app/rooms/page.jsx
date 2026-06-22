import { ClientShell, Footer, Button } from "@/components";
import Image from "next/image";
import RoomCard from "./RoomCard";
import "./rooms-page.css";

export const metadata = {
  title: "Rooms & Suites | Corbett Treat Resort",
  description:
    "Explore our handpicked collection of Deluxe Rooms, Premium Rooms and Family Cottages at Corbett Treat Resort, nestled in the heart of Jim Corbett National Park.",
};

const ROOMS = [
  {
    id: "deluxe-room",
    name: "Deluxe Room",
    type: "Deluxe",
    description:
      "Elegant, cozy, and perfectly appointed for couples or solo travelers seeking a peaceful retreat amidst the Corbett wilderness. Features warm wooden accents, plush bedding, and a private garden-facing balcony.",
    image: "/assets/images/gallery/bedroom-suite-1.jpeg",
    gallery: [
      "/assets/images/gallery/bedroom-suite-1.jpeg",
      "/assets/images/gallery/bedroom-suite-3.jpeg",
      "/assets/images/gallery/bathroom-interior.jpeg",
    ],
    bed: "King Size Bed",
    view: "Garden View",
    size: "350 sq. ft.",
    guests: "2 Adults + 1 Child",
    amenities: [
      "Air Conditioning",
      "Flat-screen TV",
      "Mini Bar",
      "Tea/Coffee Maker",
      "Complimentary Wi-Fi",
      "Daily Housekeeping",
    ],
  },
  {
    id: "premium-room",
    name: "Premium Room",
    type: "Premium",
    description:
      "Spacious layout with premium furniture, modern bathroom amenities, and a beautiful view overlooking the resort pool and manicured gardens. The ideal upgrade for discerning travelers.",
    image: "/assets/images/gallery/bedroom-suite-2.jpeg",
    gallery: [
      "/assets/images/gallery/bedroom-suite-2.jpeg",
      "/assets/images/gallery/bedroom-suite-4.jpeg",
      "/assets/images/gallery/bathroom-interior.jpeg",
    ],
    bed: "Premium King Bed",
    view: "Pool & Garden View",
    size: "500 sq. ft.",
    guests: "3 Adults",
    amenities: [
      "Private Balcony",
      "Air Conditioning",
      "Smart TV",
      "Mini Fridge",
      "Electronic Safe",
      "Luxury Toiletries",
    ],
  },
  {
    id: "family-room",
    name: "Family Cottage",
    type: "Family & Couple",
    description:
      "A gorgeous duplex cottage offering maximum space, privacy, and scenic nature views. Ideal for families and groups looking for an immersive forest-lodge experience with all modern comforts.",
    image: "/assets/images/gallery/cottages-numbered-exterior.jpeg",
    gallery: [
      "/assets/images/gallery/cottages-numbered-exterior.jpeg",
      "/assets/images/gallery/duplex-villa-exterior.jpeg",
      "/assets/images/gallery/bedroom-suite-3.jpeg",
    ],
    bed: "2 King Beds (Duplex)",
    view: "Panoramic Nature View",
    size: "850 sq. ft.",
    guests: "4 Adults + 2 Children",
    amenities: [
      "Duplex Layout",
      "Private Balcony & Sit-out",
      "2 Bathrooms",
      "Air Conditioning",
      "2 Smart TVs",
      "In-room Dining",
    ],
  },
];

const WHATSAPP_NUMBER = "918057094258";

function getWhatsappUrl(roomName) {
  const message = `Hello Corbett Treat Resort, I would like to inquire about booking the ${roomName}.`;
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export default function RoomsPage() {
  return (
    <>
      <ClientShell />

      <main className="rooms-page-main">
        {/* Hero */}
        <section className="rooms-hero">
          <div className="rooms-hero-bg">
            <Image
              src="/assets/images/gallery/bedroom-suite-2.jpeg"
              alt="Luxury room at Corbett Treat Resort"
              fill
              sizes="100vw"
              priority
              style={{ objectFit: "cover" }}
            />
            <div className="rooms-hero-overlay" />
          </div>
          <div className="rooms-hero-content">
            <span className="rooms-hero-eyebrow">Our Accommodations</span>
            <h1 className="rooms-hero-title">Rooms &amp; Suites</h1>
            <p className="rooms-hero-desc">
              Each stay combines rustic charm with premium comfort — private
              balconies, lush views, and the sounds of the Corbett wilderness
              right at your doorstep.
            </p>
          </div>
        </section>

        {/* Room Cards */}
        <section className="rooms-list-section">
          <div className="rooms-list-grid">
            {ROOMS.map((room) => (
              <RoomCard key={room.id} room={room} />
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
