import Image from "next/image";

export default function ExperienceHero() {
  return (
    <section className="experience-hero">
      <div className="experience-hero-bg">
        <Image
          src="/assets/images/gallery/safari-gypsy-parked.jpeg"
          alt="Jungle Safari Gypsy at Corbett"
          fill
          sizes="100vw"
          priority
          style={{ objectFit: "cover" }}
        />
        <div className="experience-hero-overlay" />
      </div>
      <div className="experience-hero-content">
        <span className="experience-hero-eyebrow">Adventures &amp; Fun</span>
        <h1 className="experience-hero-title">Activities &amp; Recreation</h1>
        <p className="experience-hero-desc">
          From adrenaline-pumping jungle safaris to peaceful outdoor sports and indoor recreation — find your perfect balance of adventure and relaxation.
        </p>
      </div>
    </section>
  );
}
