"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ROOMS_DATA } from "@/constants";
import { RiWhatsappLine, RiArrowRightLine } from "react-icons/ri";
import "./RoomsShowcase.css";

const RoomCard = ({ room, index }) => {
  const isEven = index % 2 === 0;

  const getWhatsappUrl = (roomTitle) => {
    const message = `Hello Corbett Treat Resort, I would like to inquire about booking/reservations for the ${roomTitle}.`;
    return `https://wa.me/918057094258?text=${encodeURIComponent(message)}`;
  };

  return (
    <div className={`rs-room-card ${isEven ? "rs-layout-normal" : "rs-layout-reversed"}`}>
      <div className="rs-room-image-wrapper">
        <Image
          src={room.image}
          alt={room.title}
          fill
          sizes="(max-width: 992px) 100vw, 55vw"
          className="rs-room-image"
          priority={index === 0}
        />
      </div>

      <div className="rs-room-content">
        <div className="rs-room-header">
          <h3 className="rs-room-title">{room.title}</h3>
        </div>

        <p className="rs-room-description">{room.description}</p>

        {/* <div className="rs-room-amenities">
          {room.features && room.features.slice(0, 4).map((amenity) => (
            <span className="rs-amenity-tag" key={amenity}>
              {amenity}
            </span>
          ))}
          {room.features && room.features.length > 4 && (
             <span className="rs-amenity-tag">+{room.features.length - 4} More</span>
          )}
        </div> */}

        {/* <div className="rs-room-actions">
          <a
            href={getWhatsappUrl(room.title)}
            target="_blank"
            rel="noopener noreferrer"
            className="rs-book-btn"
          >
            <RiWhatsappLine className="rs-whatsapp-icon" />
            Book via WhatsApp
          </a>
        </div> */}
      </div>
    </div>
  );
};

const RoomsShowcase = () => {
  return (
    <section className="rs-section" id="rooms">
      <div className="rs-container">
        
        <div className="rs-heading-wrapper">
          <span className="rs-subtitle">Luxury Accommodations</span>
          <h2 className="rs-heading">
            Rooms & <em>Suites</em>
          </h2>
          <p className="rs-intro">
            Experience the perfect harmony of nature and luxury in our thoughtfully designed rooms and suites, providing a relaxing sanctuary.
          </p>
        </div>

        <div className="rs-list">
          {ROOMS_DATA.map((room, index) => (
            <RoomCard key={room.id} room={room} index={index} />
          ))}
        </div>

        <div className="rs-footer">
          <Link href="/accommodation" className="rs-view-all-btn">
            Explore All Rooms
            <RiArrowRightLine className="rs-arrow-icon" />
          </Link>
        </div>

      </div>
    </section>
  );
};

export default RoomsShowcase;
