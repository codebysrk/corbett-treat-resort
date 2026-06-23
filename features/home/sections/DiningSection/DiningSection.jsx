"use client";

import React from "react";
import { RiTimeLine } from "react-icons/ri";
import Image from "next/image";
import "./DiningSection.css";


export default function DiningSection() {
  const getWhatsappUrl = () => {
    const message = `Hello Corbett Treat Resort, I would like to inquire about booking/reservations for the In-House Restaurant.`;
    return `https://wa.me/918057094258?text=${encodeURIComponent(message)}`;
  };

  return (
    <section id="dining" className="dining-section">
      <div className="dining-container">
        <div className="dining-split-layout">
          {/* Left Column: Image */}
          <div className="dining-image-pane">
            <Image
              src="/assets/images/Dining/restaurant-interior-2.jpeg"
              alt="In-House Restaurant"
              className="dining-main-image"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              style={{ objectFit: "cover" }}
            />
          </div>

          {/* Right Column: Info Summary */}
          <div className="dining-info-pane">
            <span className="dining-eyebrow">DINING EXPERIENCE</span>
            <h2 className="dining-heading-text">In-House Restaurant</h2>
            <p className="dining-subheading-text">Savor Kumaoni &amp; Global Flavors</p>
            <p className="dining-description-text">
              Enjoy delicious local food and international dishes at our in-house restaurant. With beautiful views of the green forests, we serve fresh multi-cuisine food, local herbs, and hot tandoor dishes prepared by our chefs.
            </p>

            <div className="dining-hours-badge">
              <RiTimeLine className="dining-hours-icon" />
              <span>TIMING: 07:00 AM - 11:00 PM</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
