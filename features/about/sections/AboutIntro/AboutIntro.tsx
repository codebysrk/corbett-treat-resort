import "./AboutIntro.css";
import Image from "next/image";
import Button from "@/components/ui/Button";
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
            A Beautiful Stay Near the Forest
          </h2>
          <p className="about-intro-text">
            Built to help you enjoy the beauty of Jim Corbett National Park, <strong>Corbett Treat Resort</strong>{" "}
            is the perfect place for nature lovers. Located in the peaceful Dhela Village, our
            resort is very close to the safari gate, giving you a real jungle feeling right from your room.
          </p>
          <p className="about-intro-text">
            We offer modern services while keeping the nature around us safe. Wake up to the sounds of beautiful
            birds, enjoy starry skies, and go on exciting safaris knowing a comfortable room is ready for you.
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
