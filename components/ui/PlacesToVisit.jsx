"use client";

import React from "react";
import Image from "next/image";
import "./PlacesToVisit.css";

const PlacesToVisit = () => {
  const attractions = [
    {
      id: 1,
      title: "Jungle Safari (7 Zones)",
      distance: "0 km (Starts at gates)",
      desc: "Explore the wilderness of Jim Corbett National Park. Home to Bengal tigers, elephants, and over 600 species of birds across Bijrani, Dhikala, Jhirna, and other safari zones.",
      image: "/assets/images/safari.webp"
    },
    {
      id: 2,
      title: "Garjiya Devi Temple",
      distance: "14 km from Resort",
      desc: "A sacred temple perched atop a huge rock in the middle of the scenic Kosi River. Visited by thousands of devotees and nature lovers for its spiritual vibe and stunning river views.",
      image: "/assets/images/garden-area.jpg" // fallback to beautiful outdoor image
    },
    {
      id: 3,
      title: "Corbett Waterfall",
      distance: "28 km from Resort",
      desc: "A mesmerizing 20m high waterfall surrounded by dense teak forests. Offers a peaceful atmosphere, clean freshwater, and lovely trails for birdwatching and photography.",
      image: "/assets/images/wild.jpg"
    }
  ];

  return (
    <section className="places-section" id="places-to-visit">
      <div className="places-container">
        
        <div className="places-header">
          <span className="places-subtitle">Nearby Attractions</span>
          <h2 className="places-title">Explore Ramnagar & Corbett</h2>
          <p className="places-desc">
            Discover the beauty beyond our forest resort boundaries. Explore iconic religious temples, waterfalls, and adventure activities.
          </p>
        </div>

        <div className="places-grid">
          {attractions.map((place) => (
            <div className="place-card" key={place.id}>
              <div className="place-image-wrapper">
                <Image 
                  src={place.image} 
                  alt={place.title} 
                  fill 
                  className="place-img"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <span className="place-distance">{place.distance}</span>
              </div>
              <div className="place-content">
                <h3 className="place-card-title">{place.title}</h3>
                <p className="place-card-desc">{place.desc}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default PlacesToVisit;
