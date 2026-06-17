"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import Image from "next/image";
import { 
   RiCloseLine, 
   RiArrowLeftSLine, 
   RiArrowRightSLine, 
   RiZoomInLine,
   RiZoomOutLine,
   RiRestartLine
} from "react-icons/ri";
import { ALL_GALLERY_IMAGES } from "@/constants";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import "./GalleryGrid.css";
import gsap from "gsap";

const CATEGORIES = [
  { id: "all", label: "ALL" },
  { id: "rooms", label: "ROOMS" },
  { id: "resort", label: "EXTERIORS" },
  { id: "nature", label: "NATURE" },
  { id: "dining", label: "DINING" },
  { id: "pool", label: "POOL" },
  { id: "safari", label: "SAFARI" }
];

export default function GalleryGrid() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [lightboxIndex, setLightboxIndex] = useState(null);
  const [scale, setScale] = useState(1);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [mounted, setMounted] = useState(false);
  
  const containerRef = useRef(null);
  const itemsRef = useRef([]);
  const dragStart = useRef({ x: 0, y: 0 });

  const filteredImages = activeCategory === "all" 
    ? ALL_GALLERY_IMAGES 
    : ALL_GALLERY_IMAGES.filter(img => img.category === activeCategory);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(".filter-btn", 
        { y: 20, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.05,
          ease: "power2.out"
        }
      );
      
      const validItems = itemsRef.current.filter(Boolean);
      if (validItems.length > 0) {
        gsap.fromTo(
          validItems,
          { y: 50, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.7,
            stagger: 0.1,
            ease: "power2.out"
          }
        );
      }
    }, containerRef);
    
    return () => ctx.revert();
  }, [mounted]);

  // Animation when category changes
  useEffect(() => {
    const validItems = itemsRef.current.filter(Boolean);
    if (validItems.length > 0) {
      gsap.fromTo(
        validItems,
        { scale: 0.9, opacity: 0 },
        { scale: 1, opacity: 1, duration: 0.5, stagger: 0.05, ease: "power2.out", overwrite: true }
      );
    }
  }, [activeCategory, filteredImages.length]);


  const closeLightbox = () => {
    setLightboxIndex(null);
  };


  const nextImage = useCallback(() => {
    setLightboxIndex((prevIndex) => {
      if (prevIndex === null) return null;
      return (prevIndex + 1) % filteredImages.length;
    });
  }, [filteredImages.length]);

  const prevImage = useCallback(() => {
    setLightboxIndex((prevIndex) => {
      if (prevIndex === null) return null;
      return (prevIndex - 1 + filteredImages.length) % filteredImages.length;
    });
  }, [filteredImages.length]);


  useEffect(() => {
    const handleKeyDown = (e) => {
      if (lightboxIndex === null) return;
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowRight") nextImage();
      if (e.key === "ArrowLeft") prevImage();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightboxIndex, nextImage, prevImage]);


  useEffect(() => {
    if (lightboxIndex !== null) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    setScale(1);
    setPosition({ x: 0, y: 0 });
    setIsDragging(false);
    return () => {
      document.body.style.overflow = "";
    };
  }, [lightboxIndex]);

  const handleStart = (clientX, clientY) => {
    if (scale <= 1) return;
    setIsDragging(true);
    dragStart.current = { x: clientX - position.x, y: clientY - position.y };
  };

  const handleMouseDown = (e) => {
    if (scale <= 1) return;
    e.preventDefault();
    handleStart(e.clientX, e.clientY);
  };

  const handleTouchStart = (e) => {
    if (e.touches.length === 1) {
      handleStart(e.touches[0].clientX, e.touches[0].clientY);
    } else if (e.touches.length === 2) {
      const dist = Math.hypot(
        e.touches[0].clientX - e.touches[1].clientX,
        e.touches[0].clientY - e.touches[1].clientY
      );
      e.currentTarget.dataset.pinchDist = dist;
    }
  };

  const handleMove = (clientX, clientY) => {
    const newX = clientX - dragStart.current.x;
    const newY = clientY - dragStart.current.y;
    
    const maxOffset = (scale - 1) * 250;
    setPosition({
      x: Math.max(-maxOffset, Math.min(maxOffset, newX)),
      y: Math.max(-maxOffset, Math.min(maxOffset, newY))
    });
  };

  const handleMouseMove = (e) => {
    if (scale <= 1 || !isDragging) return;
    handleMove(e.clientX, e.clientY);
  };

  const handleTouchMove = (e) => {
    if (e.touches.length === 1 && isDragging) {
      handleMove(e.touches[0].clientX, e.touches[0].clientY);
    } else if (e.touches.length === 2 && e.currentTarget.dataset.pinchDist) {
      const initialDist = parseFloat(e.currentTarget.dataset.pinchDist);
      const currentDist = Math.hypot(
        e.touches[0].clientX - e.touches[1].clientX,
        e.touches[0].clientY - e.touches[1].clientY
      );
      const factor = currentDist / initialDist;
      setScale(prev => Math.max(1, Math.min(4, prev * factor)));
      e.currentTarget.dataset.pinchDist = currentDist;
    }
  };

  const handleEnd = () => {
    setIsDragging(false);
  };

  const handleWheel = (e) => {
    e.preventDefault();
    const zoomIntensity = 0.15;
    const delta = e.deltaY < 0 ? 1 : -1;
    setScale(prev => {
      const nextScale = Math.max(1, Math.min(4, prev + delta * zoomIntensity));
      if (nextScale === 1) {
        setPosition({ x: 0, y: 0 });
      }
      return nextScale;
    });
  };

  const handleDoubleClick = (e) => {
    e.stopPropagation();
    if (scale > 1) {
      setScale(1);
      setPosition({ x: 0, y: 0 });
    } else {
      setScale(2.5);
      const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
      const clickX = e.clientX - left - width / 2;
      const clickY = e.clientY - top - height / 2;
      setPosition({ x: -clickX * 1.5, y: -clickY * 1.5 });
    }
  };

  return (
    <div className="gallery-grid-wrapper" ref={containerRef}>
      
      <div className="gallery-filter-tabs">
        {CATEGORIES.map((cat) => (
          <button
            key={cat.id}
            className={`filter-btn ${activeCategory === cat.id ? "active" : ""}`}
            onClick={() => {
              setActiveCategory(cat.id);
              setLightboxIndex(null);
            }}
          >
            {cat.label}
          </button>
        ))}
      </div>

      
      {mounted ? (
        <ResponsiveMasonry
          columnsCountBreakPoints={{ 350: 2, 750: 3, 992: 3, 1200: 5 }}
        >
          <Masonry gutter="1rem">
            {filteredImages.map((image, index) => (
              <div 
                key={image.src + activeCategory} 
                className="gallery-grid-item"
                ref={(el) => (itemsRef.current[index] = el)}
                onClick={() => setLightboxIndex(index)}
              >
                <div className="gallery-grid-img-container">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    width={500}
                    height={350}
                    style={{ width: "100%", height: "auto", display: "block" }}
                    className="gallery-grid-img"
                    loading={index < 6 ? "eager" : "lazy"}
                    priority={index < 6}
                  />
                  <div className="gallery-grid-hover-overlay">
                    <span className="zoom-icon">
                      <RiZoomInLine />
                    </span>
                    <p className="hover-caption">{image.alt}</p>
                  </div>
                </div>
              </div>
            ))}
          </Masonry>
        </ResponsiveMasonry>
      ) : (
        <div style={{ minHeight: "600px" }} />
      )}

      
      {lightboxIndex !== null && (
        <div className="lightbox-overlay" onClick={closeLightbox}>
          <div className="lightbox-toolbar" onClick={(e) => e.stopPropagation()}>
            <button 
              className="toolbar-btn" 
              onClick={() => setScale(prev => Math.min(4, prev + 0.4))}
              aria-label="Zoom in"
            >
              <RiZoomInLine />
            </button>
            <button 
              className="toolbar-btn" 
              onClick={() => {
                setScale(prev => {
                  const nextScale = Math.max(1, prev - 0.4);
                  if (nextScale === 1) setPosition({ x: 0, y: 0 });
                  return nextScale;
                });
              }}
              aria-label="Zoom out"
            >
              <RiZoomOutLine />
            </button>
            <button 
              className="toolbar-btn" 
              onClick={() => {
                setScale(1);
                setPosition({ x: 0, y: 0 });
              }}
              aria-label="Reset zoom"
            >
              <RiRestartLine />
            </button>
            <button 
              className="toolbar-btn close-btn" 
              onClick={closeLightbox}
              aria-label="Close lightbox"
            >
              <RiCloseLine />
            </button>
          </div>

          <button 
            className="lightbox-nav prev" 
            onClick={(e) => {
              e.stopPropagation();
              prevImage();
            }}
            aria-label="Previous image"
          >
            <RiArrowLeftSLine />
          </button>

          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <div 
              className="lightbox-image-container"
              onMouseDown={handleMouseDown}
              onMouseMove={handleMouseMove}
              onMouseUp={handleEnd}
              onMouseLeave={handleEnd}
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleEnd}
              onWheel={handleWheel}
              onDoubleClick={handleDoubleClick}
              style={{ overflow: "hidden" }}
            >
              <Image
                src={filteredImages[lightboxIndex].src}
                alt={filteredImages[lightboxIndex].alt}
                fill
                sizes="(max-width: 768px) 90vw, (max-width: 1200px) 80vw, 900px"
                className="lightbox-img"
                style={{
                  transform: `translate(${position.x}px, ${position.y}px) scale(${scale})`,
                  cursor: scale > 1 ? (isDragging ? "grabbing" : "grab") : "zoom-in",
                  transition: isDragging ? "none" : "transform 0.15s ease-out"
                }}
                priority
              />
            </div>
            <div className="lightbox-caption">
              <span>{filteredImages[lightboxIndex].alt}</span>
              <span className="lightbox-counter">
                {lightboxIndex + 1} / {filteredImages.length}
              </span>
            </div>
          </div>

          <button 
            className="lightbox-nav next" 
            onClick={(e) => {
              e.stopPropagation();
              nextImage();
            }}
            aria-label="Next image"
          >
            <RiArrowRightSLine />
          </button>
        </div>
      )}
    </div>
  );
}
