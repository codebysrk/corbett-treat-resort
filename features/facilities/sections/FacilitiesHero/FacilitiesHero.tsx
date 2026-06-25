import Image from "next/image";

export default function FacilitiesHero() {
  return (
    <section className="facilities-hero">
      <div className="facilities-hero-bg">
        <Image
          src="/assets/images/gallery/swimming-pool.jpeg"
          alt="Resort Swimming Pool Area"
          fill
          sizes="100vw"
          priority
          style={{ objectFit: "cover" }}
        />
        <div className="facilities-hero-overlay" />
      </div>
      <div className="facilities-hero-content">
        <span className="facilities-hero-eyebrow">Luxury Comforts</span>
        <h1 className="facilities-hero-title">Resort Facilities</h1>
        <p className="facilities-hero-desc">
          Experience the best of Corbett with premium amenities designed for families, couples, and groups seeking comfort in nature.
        </p>
      </div>
    </section>
  );
}
