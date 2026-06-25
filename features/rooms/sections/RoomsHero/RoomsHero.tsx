import Image from "next/image";

export default function RoomsHero() {
  return (
    <section className="rooms-hero">
      <div className="rooms-hero-bg">
        <Image
          src="/assets/images/gallery/bedroom-suite-2.jpeg"
          alt="Luxury room at Corbett Treat Resort"
          fill
          sizes="100vw"
          priority
          style={{ objectFit: "cover" }}
        />
        <div className="rooms-hero-overlay" />
      </div>
      <div className="rooms-hero-content">
        <span className="rooms-hero-eyebrow">Our Accommodations</span>
        <h1 className="rooms-hero-title">Rooms &amp; Suites</h1>
        <p className="rooms-hero-desc">
          Each stay combines rustic charm with premium comfort — private
          balconies, lush views, and the sounds of the Corbett wilderness
          right at your doorstep.
        </p>
      </div>
    </section>
  );
}
