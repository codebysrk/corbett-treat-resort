"use client";

import Image from "next/image";
import { Button } from "@/components";
import "./RoomsShowcase.css";

export default function RoomsShowcase() {
  return (
    <section className="accommodation" id="rooms">
      <div className="accommodation-split-container">
        
        {/* Left Column: Room Interior + Info */}
        <div className="accommodation-left-col">
          <div className="accommodation-left-image-wrap">
            <Image
              src="/assets/images/gallery/bedroom-suite-2.jpeg"
              alt="Elegant Bedroom Suite Interior"
              fill
              sizes="(max-width: 992px) 100vw, 50vw"
              priority
              style={{ objectFit: "cover" }}
            />
          </div>
          <div className="accommodation-left-content">
            <h2 className="accommodation-title-serif">Elegant Accommodations</h2>
            <p className="accommodation-desc-text">
              Make a corner of Jim Corbett your own in exquisite resort accommodations, 
              from scenic garden-view cottages to luxurious premium family suites.
            </p>
            <div className="accommodation-action">
              <Button href="/rooms" variant="outline" className="accommodation-btn-outline">
                Browse Rooms
              </Button>
            </div>
          </div>
        </div>

        {/* Right Column: Portrait Balcony/Garden Seating View */}
        <div className="accommodation-right-col">
          <div className="accommodation-right-image-wrap">
            <Image
              src="/assets/images/gallery/cottage-exterior-1.jpeg"
              alt="Scenic Cottage Porch Seating"
              fill
              sizes="(max-width: 992px) 100vw, 50vw"
              style={{ objectFit: "cover" }}
            />
          </div>
        </div>

      </div>
    </section>
  );
}
