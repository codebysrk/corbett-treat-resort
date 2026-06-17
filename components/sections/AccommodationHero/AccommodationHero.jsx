import Image from "next/image";
import "./AccommodationHero.css";

const AccommodationHero = () => {
  return (
    <section className="accommodation-hero">
      <div className="accommodation-hero-bg">
        <Image
          src="/assets/images/bedroom-suite-2.jpeg"
          alt="Corbett Treat Resort Premium Suite"
          fill
          priority
          loading="eager"
          style={{ objectFit: "cover" }}
          sizes="100vw"
        />
      </div>
      <div className="accommodation-hero-overlay" />
      <div className="accommodation-hero-content">
        <span className="accommodation-hero-subtitle">OUR ACCOMMODATIONS</span>
        <h1 className="accommodation-hero-title">Luxurious Retreats</h1>
        <div className="accommodation-hero-divider" />
        <p className="accommodation-hero-desc">
          Experience the perfect blend of modern comfort and natural wilderness.
        </p>
      </div>
    </section>
  );
};

export default AccommodationHero;
