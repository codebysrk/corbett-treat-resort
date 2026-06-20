import "./AboutIntro.css";
import Image from "next/image";
import Button from "./Button";
import { FaPlay } from "react-icons/fa";
import { WHATSAPP } from "@/constants";

const AboutIntro = () => {
  const whatsappUrl = `https://wa.me/${WHATSAPP.number}?text=Hello%20Corbett%20Treat%20Resort,%20I%20would%20like%20to%20inquire%20about%20hosting%20a%20wedding/event%20at%20your%20resort.`;
  return (
    <section className="about-intro-section">
      <div className="about-intro-container">
        <div className="about-intro-video">
          <Image
            src="/assets/images/gallery/resort-service-building.jpeg"
            alt="Corbett Treat Resort Video Thumbnail"
            fill
            className="about-intro-video-bg"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
          <div className="about-intro-play">
            <FaPlay style={{ marginLeft: "4px" }} />
          </div>
        </div>

        <div className="about-intro-content">
          <h2 className="about-intro-heading">
            A Sanctuary of Comfort & Wilderness
          </h2>
          <p className="about-intro-text">
            Established with a vision to connect travelers to the untamed beauty
            of Jim Corbett National Park, <strong>Corbett Treat Resort</strong>{" "}
            stands as a premier destination for nature enthusiasts and luxury
            seekers alike. Nestled in the quiet hamlet of Dhela Village, our
            resort shares a direct boundary with the reserve, offering an
            immersive jungle experience right from your balcony.
          </p>
          <p className="about-intro-text">
            Here, we blend modern hospitality with a deep respect for the local
            ecosystem. Wake up to the melodies of exotic birds, enjoy evenings
            illuminated by starry skies, and embark on thrilling safaris knowing
            a luxurious haven awaits your return.
          </p>
          <div className="about-intro-action">
            <Button href={whatsappUrl} variant="primary">
              Connect With Us
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutIntro;
