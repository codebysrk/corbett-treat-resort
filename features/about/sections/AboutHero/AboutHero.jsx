import Image from "next/image";
import "./AboutHero.css";

const AboutHero = () => {
  return (
    <section className="about-hero">
      <div className="about-hero-bg">
        <Image
          src="/assets/images/gallery/main-building-exterior.jpeg"
          alt="Corbett Treat Resort Main Building"
          fill
          priority
          style={{ objectFit: "cover" }}
          sizes="100vw"
        />
      </div>
      <div className="about-hero-content">
        <h1 className="about-hero-title">Our Resort</h1>
      </div>
    </section>
  );
};

export default AboutHero;
