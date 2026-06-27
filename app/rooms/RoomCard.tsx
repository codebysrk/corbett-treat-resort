"use client";

import { useState } from "react";
import Image from "next/image";

import { Room } from "@/lib/types";

export default function RoomCard({ room }: { room: Room }) {
  const [activeImage, setActiveImage] = useState(room.image);

  return (
    <article className="room-detail-card" id={room.id}>
      
      <div className="room-card-image-pane">
        <div className="room-card-main-img-wrapper">
          <div className="room-card-main-img-container">
            <Image
              src={activeImage}
              alt={room.name}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="room-card-main-img"
              style={{ objectFit: "cover" }}
              priority={room.id === "deluxe-room"}
            />
          </div>
          
          
          <div className="room-card-bottom-right-img">
            <Image
              src="/assets/images/gallery/cottage-exterior-1.jpeg"
              alt="Corbett Treat Resort Cottage Exterior"
              fill
              sizes="150px"
              style={{ objectFit: "cover" }}
            />
          </div>
        </div>

        
        <div className="room-card-gallery-strip-below" role="group" aria-label="Room image gallery">
          {room.gallery.map((img, i) => (
            <button 
              key={i} 
              type="button"
              className={`room-card-thumb-wrapper-below ${activeImage === img ? "active" : ""}`}
              onClick={() => setActiveImage(img)}
              aria-label={`View ${room.name} image ${i + 1}`}
              aria-current={activeImage === img ? "true" : "false"}
            >
              <Image
                src={img}
                alt=""
                fill
                sizes="64px"
                style={{ objectFit: "cover" }}
                className="room-card-thumb"
              />
            </button>
          ))}
        </div>
      </div>

      
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
