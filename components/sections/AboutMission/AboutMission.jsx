import "./AboutMission.css";
import Image from "next/image";

const AboutMission = () => {
  return (
    <section className="about-mission-section">
      <div className="about-mission-container">
        
        <div className="about-mission-block">
          <h3 className="about-mission-heading">Our Mission</h3>
          <p className="about-mission-text">
            Our mission is to create memorable and meaningful experiences for every guest by offering warm hospitality, comfortable stays, and nature-inspired activities. We aim to provide a perfect blend of relaxation, adventure, and personalized service that connects our guests with the beauty of Corbett.
          </p>
        </div>

        <div className="about-mission-image">
          <Image
            src="/assets/images/cottage-exterior-dusk.jpeg"
            alt="Corbett Treat Resort Cottage"
            fill
            sizes="(max-width: 992px) 100vw, 33vw"
            style={{ objectFit: "cover" }}
          />
        </div>

        <div className="about-mission-block">
          <h3 className="about-mission-heading">Our Vision</h3>
          <p className="about-mission-text">
            Our vision is to be the most loved nature resort in Jim Corbett—known for exceptional service, sustainable practices, and unforgettable guest experiences. We strive to inspire travelers to reconnect with nature while enjoying world-class comfort and care.
          </p>
        </div>

      </div>
    </section>
  );
};

export default AboutMission;
