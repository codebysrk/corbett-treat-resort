"use client";

import Image from "next/image";
import { Button } from "@/components";
import "./RoomsShowcase.css";

export default function RoomsShowcase() {
  return (
    <section className="accommodation" id="rooms">
      <div className="accommodation-split-container">
        
        {/* Left Image (Room Interior) */}
        <div className="accommodation-left-image-wrap">
          <Image
            src="/assets/images/gallery/bedroom-suite-2.jpeg"
            alt="Elegant Bedroom Suite Interior"
            fill
            sizes="(max-width: 768px) 45vw, (max-width: 992px) 50vw, 60vw"
            priority
            style={{ objectFit: "cover" }}
          />
        </div>

        {/* Right Image (Balcony/Garden View) */}
        <div className="accommodation-right-image-wrap">
          <Image
            src="/assets/images/gallery/cottage-exterior-1.jpeg"
            alt="Scenic Cottage Porch Seating"
            fill
            sizes="(max-width: 768px) 55vw, (max-width: 992px) 50vw, 40vw"
            style={{ objectFit: "cover" }}
          />
        </div>

        {/* Content Box (Heading + Desc + Button) */}
        <div className="accommodation-left-content">
          <h2 className="accommodation-title-serif">Comfortable Rooms &amp; Cottages</h2>
          <p className="accommodation-desc-text">
            Enjoy your stay in Jim Corbett in our beautiful resort rooms, 
            from garden-view cottages to premium family suites.
          </p>
          <div className="accommodation-action">
            <Button href="/rooms" variant="outline" className="accommodation-btn-outline">
              Browse Rooms
            </Button>
          </div>
        </div>

      </div>
    </section>
  );
}
