import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import './GallerySection.css';

const GallerySection = () => {
  return (
    <section className="gallery-section">
      <div className="gallery-container">
        
        <div className="gallery-header">
          <span className="gallery-subtitle">Captured Moments</span>
          <h2 className="gallery-title">The Resort Experience</h2>
          <p className="gallery-description">
            Glimpses of luxury, nature, and unforgettable memories waiting for you at Corbett Treat Resort.
          </p>
        </div>

        <div className="gallery-layout">
          
          {/* Column 1 */}
          <div className="gallery-col col-1">
            <div className="gallery-img-wrapper">
              <Image src="/assets/images/gallery/resort-pathway-hedges.jpeg" alt="Resort Pathway" fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 20vw" className="gallery-img" />
            </div>
          </div>

          {/* Column 2 */}
          <div className="gallery-col col-2">
            <div className="gallery-img-wrapper">
              <Image src="/assets/images/gallery/bedroom-suite-1.jpeg" alt="Premium Bedroom" fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 20vw" className="gallery-img" />
            </div>
            <div className="gallery-img-wrapper">
              <Image src="/assets/images/gallery/swimming-pool-corner-view.jpeg" alt="Swimming Pool Corner" fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 20vw" className="gallery-img" />
            </div>
          </div>

          {/* Column 3 (Center Tall) */}
          <div className="gallery-col col-3">
            <div className="gallery-img-wrapper tall">
              <Image src="/assets/images/gallery/garden-area.jpg" alt="Resort Garden View" fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 20vw" className="gallery-img" />
            </div>
          </div>

          {/* Column 4 */}
          <div className="gallery-col col-4">
            <div className="gallery-img-wrapper">
              <Image src="/assets/images/gallery/safari-gypsy-parked.jpeg" alt="Jungle Safari Gypsy" fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 20vw" className="gallery-img" />
            </div>
            <div className="gallery-img-wrapper">
              <Image src="/assets/images/gallery/restaurant-interior-1.jpeg" alt="Fine Dining" fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 20vw" className="gallery-img" />
            </div>
          </div>

          {/* Column 5 */}
          <div className="gallery-col col-5">
            <div className="gallery-img-wrapper">
              <Image src="/assets/images/gallery/swimming-pool.jpeg" alt="Swimming Pool" fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 20vw" className="gallery-img" />
            </div>
          </div>

        </div>

        {/* See More Button */}
        <div className="gallery-footer">
          <Link href="/gallery" className="btn-see-more" style={{ textDecoration: "none" }}>
            SEE MORE
          </Link>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
