"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components";
import "./RoomsShowcase.css";

const ROOMS = [
  {
    id: "deluxe-room",
    title: "DELUXE ROOM",
    image: "/assets/images/gallery/bedroom-suite-1.jpeg",
  },
  {
    id: "premium-room",
    title: "PREMIUM ROOM",
    image: "/assets/images/gallery/bedroom-suite-2.jpeg",
  },
  {
    id: "family-room",
    title: "FAMILY COTTAGE",
    image: "/assets/images/gallery/cottages-numbered-exterior.jpeg",
  },
];

export default function RoomShowcase() {
  return (
    <section className="accommodation" id="rooms">
      <div className="accommodation-header">
        <div>
          <h2>Comfort and Space Combined</h2>
          <p>
            Relish the charm of our spacious rooms and separate houses, blending
            modern elegance with the tranquility of the surrounding forest park
            and natural oasis.
          </p>
        </div>
      </div>

      <div className="rooms-grid">
        {ROOMS.map((room) => (
          <Link
            key={room.id}
            href={`/rooms#${room.id}`}
            className="room-card"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <article>
              <div className="image-wrapper">
                <Image
                  src={room.image}
                  alt={room.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  style={{ objectFit: "cover" }}
                />
              </div>
              <h3>{room.title}</h3>
            </article>
          </Link>
        ))}
      </div>

      <div className="accommodation-bottom">
        <Button href="/rooms" variant="primary" size="medium">
          Explore
        </Button>
      </div>
    </section>
  );
}
