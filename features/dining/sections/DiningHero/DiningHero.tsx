import Image from "next/image";

export default function DiningHero() {
  return (
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
  );
}
