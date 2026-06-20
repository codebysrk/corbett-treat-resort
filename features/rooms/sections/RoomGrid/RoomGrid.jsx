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
    <section className="rg-section">
      <div className="rg-container">
        <div className="rg-intro">
          <span className="rg-subtitle">Your Relaxing Sanctuary</span>
          <h2 className="rg-heading">Find Your Perfect <em>Retreat</em></h2>
          <p className="rg-intro-text">
            Choose from our carefully curated range of Deluxe Rooms, Premium Rooms, and Family Rooms. Designed to provide unmatched luxury and tranquility in the lap of nature.
          </p>
        </div>

        <div className="rg-list">
          {ROOMS_DATA.map((room) => (
            <div key={room.id} className="rg-card">
              <div className="rg-card-image-wrapper">
                <Image
                  src={room.image}
                  alt={room.title}
                  fill
                  sizes="(max-width: 992px) 100vw, 50vw"
                  style={{ objectFit: "cover" }}
                  className="rg-img"
                  loading="lazy"
                />
              </div>

              <div className="rg-card-info">
                <h3 className="rg-card-title">{room.title}</h3>
                <p className="rg-card-description">{room.description}</p>

                {/* <div className="rg-specs-list">
                  <div className="rg-spec-item">
                    <RiRulerLine className="rg-spec-icon" />
                    <span>{room.size}</span>
                  </div>
                  <div className="rg-spec-item">
                    <RiUserLine className="rg-spec-icon" />
                    <span>{room.occupancy}</span>
                  </div>
                  <div className="rg-spec-item">
                    <RiHotelBedLine className="rg-spec-icon" />
                    <span>{room.bed}</span>
                  </div>
                  <div className="rg-spec-item">
                    <RiCompassLine className="rg-spec-icon" />
                    <span>{room.view}</span>
                  </div>
                </div> */}

                {/* <div className="rg-card-actions">
                  <button 
                    type="button" 
                    className="rg-btn-secondary"
                    onClick={() => setSelectedRoom(room)}
                  >
                    View Details
                  </button>
                  <a 
                    href={getWhatsappUrl(room.title)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rg-btn-primary"
                  >
                    <RiWhatsappLine className="rg-whatsapp-icon" />
                    Book via WhatsApp
                  </a>
                </div> */}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Room Details Modal */}
      {selectedRoom && (
        <div 
          className="rg-modal-overlay" 
          onClick={() => setSelectedRoom(null)}
          role="dialog"
          aria-modal="true"
        >
          <div 
            className="rg-modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              type="button"
              className="rg-modal-close"
              onClick={() => setSelectedRoom(null)}
              aria-label="Close details modal"
            >
              <RiCloseLine />
            </button>

            <div className="rg-modal-grid">
              <div className="rg-modal-image-wrapper">
                <Image
                  src={selectedRoom.image}
                  alt={selectedRoom.title}
                  fill
                  sizes="(max-width: 992px) 100vw, 50vw"
                  style={{ objectFit: "cover" }}
                  className="rg-modal-img"
                />
              </div>

              <div className="rg-modal-body">
                <h2 className="rg-modal-title">{selectedRoom.title}</h2>
                <span className="rg-modal-subtitle">{selectedRoom.view} &bull; {selectedRoom.size}</span>
                <p className="rg-modal-desc">{selectedRoom.description}</p>

                <div className="rg-modal-specs">
                  <div className="rg-modal-spec-block">
                    <strong>Bed Type</strong>
                    <span>{selectedRoom.bed}</span>
                  </div>
                  <div className="rg-modal-spec-block">
                    <strong>Max Occupancy</strong>
                    <span>{selectedRoom.occupancy}</span>
                  </div>
                  <div className="rg-modal-spec-block">
                    <strong>Room Size</strong>
                    <span>{selectedRoom.size}</span>
                  </div>
                </div>

                <div className="rg-modal-amenities-section">
                  <h3>Key Amenities</h3>
                  <ul className="rg-modal-amenities-list">
                    {selectedRoom.features.map((feature, idx) => (
                      <li key={idx}>
                        <RiCheckboxCircleLine className="rg-check-icon" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="rg-modal-actions">
                  <a 
                    href={getWhatsappUrl(selectedRoom.title)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rg-modal-book-btn"
                  >
                    <RiWhatsappLine className="rg-whatsapp-icon" />
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
