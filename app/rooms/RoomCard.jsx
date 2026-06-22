"use client";

import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components";

const WHATSAPP_NUMBER = "918057094258";

function getWhatsappUrl(roomName) {
  const message = `Hello Corbett Treat Resort, I would like to inquire about booking the ${roomName}.`;
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export default function RoomCard({ room }) {
  const [activeImage, setActiveImage] = useState(room.image);

  return (
    <article className="room-detail-card" id={room.id}>
      {/* Image Pane */}
      <div className="room-card-image-pane">
        <Image
          src={activeImage}
          alt={room.name}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="room-card-main-img"
          style={{ objectFit: "cover" }}
        />
        <div className="room-card-gallery-strip">
          {room.gallery.map((img, i) => (
            <div 
              key={i} 
              className={`room-card-thumb-wrapper ${activeImage === img ? "active" : ""}`}
              onClick={() => setActiveImage(img)}
            >
              <Image
                src={img}
                alt={`${room.name} view ${i + 1}`}
                fill
                sizes="60px"
                style={{ objectFit: "cover" }}
                className="room-card-thumb"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Info Pane */}
      <div className="room-card-info">
        <span className="room-card-type-badge">{room.type}</span>
        <h2 className="room-card-name">{room.name}</h2>
        <p className="room-card-desc">{room.description}</p>

        <div className="room-card-specs">
          <div className="room-spec-item">
            <span className="room-spec-label">Bed</span>
            <span className="room-spec-value">{room.bed}</span>
          </div>
          <div className="room-spec-item">
            <span className="room-spec-label">View</span>
            <span className="room-spec-value">{room.view}</span>
          </div>
          <div className="room-spec-item">
            <span className="room-spec-label">Size</span>
            <span className="room-spec-value">{room.size}</span>
          </div>
          <div className="room-spec-item">
            <span className="room-spec-label">Guests</span>
            <span className="room-spec-value">{room.guests}</span>
          </div>
        </div>

        <div className="room-card-amenities">
          {room.amenities.map((a, i) => (
            <span key={i} className="room-amenity-tag">
              {a}
            </span>
          ))}
        </div>

      </div>
    </article>
  );
}
