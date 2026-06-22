import { ClientShell, Footer, Button } from "@/components";
import Image from "next/image";
import "./dining-page.css";

export const metadata = {
  title: "Dining | Corbett Treat Resort",
  description:
    "Savor fine Kumaoni & Global flavors at the In-House Restaurant of Corbett Treat Resort. Traditional pahadi delicacies, live tandoor and scenic views.",
};

export default function DiningPage() {
  const whatsappUrl = `https://wa.me/918057094258?text=${encodeURIComponent("Hello Corbett Treat Resort, I would like to inquire about booking/reservations for the In-House Restaurant.")}`;

  return (
    <>
      <ClientShell />

      <main className="dining-page-main">
        {/* Hero */}
        <section className="dining-hero">
          <div className="dining-hero-bg">
            <Image
              src="/assets/images/gallery/restaurant-interior-1.jpeg"
              alt="In-House Restaurant Dining Room"
              fill
              sizes="100vw"
              priority
              style={{ objectFit: "cover" }}
            />
            <div className="dining-hero-overlay" />
          </div>
          <div className="dining-hero-content">
            <span className="dining-hero-eyebrow">Culinary Delights</span>
            <h1 className="dining-hero-title">Dining Experience</h1>
            <p className="dining-hero-desc">
              Experience Uttarakhand&apos;s rich culinary traditions and fine multi-cuisine
              dishes, framed by the beautiful Sal forests of Jim Corbett.
            </p>
          </div>
        </section>

        {/* Details Section */}
        <section className="dining-content-section">
          <div className="dining-details-grid">
            {/* Gallery Pane */}
            <div className="dining-gallery-strip">
              <div className="dining-gallery-image large">
                <Image
                  src="/assets/images/gallery/restaurant-interior-2.jpeg"
                  alt="Elegant Table Setting"
                  fill
                  sizes="(max-width: 992px) 100vw, 50vw"
                />
              </div>
              <div className="dining-gallery-image">
                <Image
                  src="/assets/images/gallery/restaurant-dining-table.jpeg"
                  alt="Delicious Dishes"
                  fill
                  sizes="(max-width: 992px) 50vw, 25vw"
                />
              </div>
              <div className="dining-gallery-image">
                <Image
                  src="/assets/images/gallery/swimming-pool-sunset-view.jpeg"
                  alt="Resort Outdoor Dining"
                  fill
                  sizes="(max-width: 992px) 50vw, 25vw"
                />
              </div>
            </div>

            {/* Info Pane */}
            <div className="dining-info-block">
              <h2 className="dining-info-title">The In-House Restaurant</h2>
              <p className="dining-info-desc">
                From fresh regional produce to authentic pahadi spices, dining at Corbett
                Treat Resort is a celebration of local ingredients and global techniques.
                Enjoy our warm interior dining hall or take your meal poolside as dusk settles
                over the Kumaon forest.
              </p>

              <div className="dining-features-list">
                <div className="dining-feature-item">
                  <span className="dining-feature-number">01</span>
                  <div className="dining-feature-content">
                    <h4>Traditional Kumaoni Cuisine</h4>
                    <p>Delight in authentic regional specialties prepared with organic local herbs, hand-churned buttermilk, and traditional recipes.</p>
                  </div>
                </div>

                <div className="dining-feature-item">
                  <span className="dining-feature-number">02</span>
                  <div className="dining-feature-content">
                    <h4>Global Multi-Cuisine Menu</h4>
                    <p>A broad selection of Continental, Asian, and classic Indian favorites crafted to perfection by our expert culinary team.</p>
                  </div>
                </div>

                <div className="dining-feature-item">
                  <span className="dining-feature-number">03</span>
                  <div className="dining-feature-content">
                    <h4>Live Tandoor & Grill</h4>
                    <p>Sizzling skewers, charred fresh cottage cheese, and hot buttery tandoori breads baked fresh right in our clay ovens.</p>
                  </div>
                </div>
              </div>

              <div className="dining-meta-info">
                <div className="dining-meta-item">
                  <span className="dining-meta-label">Hours</span>
                  <span className="dining-meta-value">07:00 AM - 11:00 PM</span>
                </div>
                <div className="dining-meta-item">
                  <span className="dining-meta-label">Service</span>
                  <span className="dining-meta-value">Buffet &amp; A La Carte</span>
                </div>
              </div>

              <Button
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                variant="primary"
                size="large"
              >
                Inquire For Reservations
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
