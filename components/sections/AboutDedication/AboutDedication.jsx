import "./AboutDedication.css";
import Image from "next/image";

const AboutDedication = () => {
  return (
    <section className="about-dedication-section">
      <div className="about-dedication-container">
        
        <div className="about-dedication-content">
          <span className="about-dedication-subtitle">Unmatched Resort Experience</span>
          <h2 className="about-dedication-heading">
            We are dedicated to crafting unforgettable memories, whether you are here for peaceful reflection or outdoor adventure.
          </h2>
          <p className="about-dedication-text">
            Every detail at Corbett Treat Resort is curated to elevate your holiday. From our nature-inspired architectural layout to the organic ingredients in our dining hall, we commit to premium standards of service. We believe in providing a seamless blend of wild nature and cozy luxury.
          </p>
        </div>

        <div className="about-dedication-image">
          <Image
            src="/assets/images/bedroom-suite-2.jpeg"
            alt="Corbett Treat Resort Bedroom Suite"
            fill
            sizes="(max-width: 992px) 100vw, 50vw"
            style={{ objectFit: "cover" }}
          />
        </div>

      </div>
    </section>
  );
};

export default AboutDedication;
