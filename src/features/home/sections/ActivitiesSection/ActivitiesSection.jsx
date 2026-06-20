"use client";

import React, { useRef, useEffect } from 'react';
import Image from 'next/image';
import './ActivitiesSection.css';

const ActivitiesSection = () => {
  const scrollRef = useRef(null);

  const activities = [
    {
      id: 1,
      label: "Safari",
      title: "7 Zones of Jungle Safari",
      image: "/assets/images/safari.webp",
    },
    {
      id: 2,
      label: "Pool",
      title: "Luxury Swimming Pool",
      image: "/assets/images/gallery/swimming-pool.jpeg",
    },
    {
      id: 3,
      label: "Cricket",
      title: "Lawn Cricket Ground",
      image: "/assets/images/cricket.png",
    },
    {
      id: 4,
      label: "Volleyball",
      title: "Volleyball Court",
      image: "/assets/images/gallery/garden-area.jpg",
    },
    {
      id: 5,
      label: "Badminton",
      title: "Badminton Court",
      image: "/assets/images/wild.jpg",
    },
    {
      id: 6,
      label: "Indoor Games",
      title: "Table Tennis & More",
      image: "/assets/images/indoor_games.png",
    },
    {
      id: 7,
      label: "Kids Zone",
      title: "Kids Slides & Play Area",
      image: "/assets/images/slides.png",
    },
  ];

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    // Convert vertical wheel scroll to horizontal scroll
    const handleWheel = (e) => {
      if (e.deltaY === 0) return;
      
      const canScrollLeft = el.scrollLeft > 0;
      const canScrollRight = el.scrollLeft < el.scrollWidth - el.clientWidth - 1;
      
      // If horizontal scrolling is possible in the desired direction, scroll horizontally
      if ((e.deltaY < 0 && canScrollLeft) || (e.deltaY > 0 && canScrollRight)) {
        e.preventDefault();
        el.scrollLeft += e.deltaY * 1.2;
      }
    };

    // Grab to scroll (Desktop drag-to-scroll)
    let isDown = false;
    let startX;
    let scrollLeft;

    const handleMouseDown = (e) => {
      isDown = true;
      el.classList.add('dragging');
      startX = e.pageX - el.offsetLeft;
      scrollLeft = el.scrollLeft;
    };

    const handleMouseLeave = () => {
      isDown = false;
      el.classList.remove('dragging');
    };

    const handleMouseUp = () => {
      isDown = false;
      el.classList.remove('dragging');
    };

    const handleMouseMove = (e) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - el.offsetLeft;
      const walk = (x - startX) * 2; // scroll-speed multiplier
      el.scrollLeft = scrollLeft - walk;
    };

    el.addEventListener('wheel', handleWheel, { passive: false });
    el.addEventListener('mousedown', handleMouseDown);
    el.addEventListener('mouseleave', handleMouseLeave);
    el.addEventListener('mouseup', handleMouseUp);
    el.addEventListener('mousemove', handleMouseMove);

    return () => {
      el.removeEventListener('wheel', handleWheel);
      el.removeEventListener('mousedown', handleMouseDown);
      el.removeEventListener('mouseleave', handleMouseLeave);
      el.removeEventListener('mouseup', handleMouseUp);
      el.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <section className="act-section" id="adventure-activities">

      {/* Left text column */}
      <div className="act-intro">
        <span className="act-eyebrow">At The Resort</span>
        <h2 className="act-heading">
          Adventures<br />& Recreation
        </h2>
        <p className="act-body">
          From the thrill of a jungle safari to leisurely afternoons by the pool — every moment at Corbett Treat is crafted to create memories that last a lifetime.
        </p>
        <div className="act-count">
          <span className="act-number">07</span>
          <span className="act-count-label">Experiences</span>
        </div>
      </div>

      {/* Horizontal scroll cards strip */}
      <div className="act-strip-wrapper" ref={scrollRef}>
        <div className="act-strip">
          {activities.map((act) => (
            <div className="act-card" key={act.id}>
              <Image
                src={act.image}
                alt={act.title}
                fill
                className="act-card-img"
                sizes="280px"
              />
              <div className="act-card-overlay" />
              <div className="act-card-content">
                <span className="act-card-label">{act.label}</span>
                <h3 className="act-card-title">{act.title}</h3>
              </div>
              <div className="act-card-number">0{act.id}</div>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
};

export default ActivitiesSection;
