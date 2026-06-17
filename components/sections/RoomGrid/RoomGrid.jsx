"use client";

import { useState } from "react";
import Image from "next/image";
import { 
  RiUserLine, 
  RiRulerLine, 
  RiHotelBedLine, 
  RiCompassLine, 
  RiCheckboxCircleLine,
  RiCloseLine,
  RiWhatsappLine
} from "react-icons/ri";
import { ROOMS_DATA } from "@/constants";
import "./RoomGrid.css";

export default function RoomGrid() {
  const [selectedRoom, setSelectedRoom] = useState(null);

  const getWhatsappUrl = (roomTitle) => {
    const message = `Hello Corbett Treat Resort, I would like to inquire about booking/reservations for the ${roomTitle}.`;
    return `https://wa.me/918057094258?text=${encodeURIComponent(message)}`;
  };

  return (
    <section className="rooms-section">
      <div className="rooms-container">
        <div className="rooms-intro">
          <h2>Find Your Perfect Sanctuary</h2>
          <p>
            Choose from our carefully curated range of deluxe rooms, premium suites, and family duplex cottages. Designed to provide unmatched luxury and tranquility in the lap of nature.
          </p>
        </div>

        <div className="rooms-list-grid">
          {ROOMS_DATA.map((room) => (
            <div key={room.id} className="room-card">
              <div className="room-card-image">
                <Image
                  src={room.image}
                  alt={room.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  style={{ objectFit: "cover" }}
                  className="room-img"
                  loading="lazy"
                />
                <div className="room-card-tag">{room.view}</div>
              </div>

              <div className="room-card-info">
                <h3 className="room-card-title">{room.title}</h3>
                <p className="room-card-description">{room.description}</p>

                <div className="room-specs-list">
                  <div className="spec-item">
                    <RiRulerLine className="spec-icon" />
                    <span>{room.size}</span>
                  </div>
                  <div className="spec-item">
                    <RiUserLine className="spec-icon" />
                    <span>{room.occupancy}</span>
                  </div>
                  <div className="spec-item">
                    <RiHotelBedLine className="spec-icon" />
                    <span>{room.bed}</span>
                  </div>
                  <div className="spec-item">
                    <RiCompassLine className="spec-icon" />
                    <span>{room.view}</span>
                  </div>
                </div>

                <div className="room-card-actions">
                  <button 
                    type="button" 
                    className="room-btn-secondary"
                    onClick={() => setSelectedRoom(room)}
                  >
                    View Details
                  </button>
                  <a 
                    href={getWhatsappUrl(room.title)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="room-btn-primary"
                  >
                    <RiWhatsappLine className="whatsapp-icon" />
                    Book Now
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Room Details Modal */}
      {selectedRoom && (
        <div 
          className="room-modal-overlay" 
          onClick={() => setSelectedRoom(null)}
          role="dialog"
          aria-modal="true"
        >
          <div 
            className="room-modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              type="button"
              className="room-modal-close"
              onClick={() => setSelectedRoom(null)}
              aria-label="Close details modal"
            >
              <RiCloseLine />
            </button>

            <div className="room-modal-grid">
              <div className="room-modal-image-wrapper">
                <Image
                  src={selectedRoom.image}
                  alt={selectedRoom.title}
                  fill
                  sizes="(max-width: 992px) 100vw, 50vw"
                  style={{ objectFit: "cover" }}
                />
              </div>

              <div className="room-modal-body">
                <h2>{selectedRoom.title}</h2>
                <span className="room-modal-subtitle">{selectedRoom.view} &bull; {selectedRoom.size}</span>
                <p className="room-modal-desc">{selectedRoom.description}</p>

                <div className="room-modal-specs">
                  <div className="modal-spec-block">
                    <strong>Bed Type</strong>
                    <span>{selectedRoom.bed}</span>
                  </div>
                  <div className="modal-spec-block">
                    <strong>Max Occupancy</strong>
                    <span>{selectedRoom.occupancy}</span>
                  </div>
                  <div className="modal-spec-block">
                    <strong>Room Size</strong>
                    <span>{selectedRoom.size}</span>
                  </div>
                </div>

                <div className="room-modal-amenities-section">
                  <h3>Key Amenities</h3>
                  <ul className="modal-amenities-list">
                    {selectedRoom.features.map((feature, idx) => (
                      <li key={idx}>
                        <RiCheckboxCircleLine className="check-icon" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="room-modal-actions">
                  <a 
                    href={getWhatsappUrl(selectedRoom.title)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="modal-book-btn"
                  >
                    <RiWhatsappLine className="whatsapp-icon" />
                    Book Room via WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
