import "./AboutMission.css";
import Image from "next/image";

const AboutMission = () => {
  return (
    <section className="about-mission-section">
      <div className="about-mission-container">
        
        <div className="about-mission-block">
          <h3 className="about-mission-heading">Our Mission</h3>
          <p className="about-mission-text">
            Our mission is to make sure you have a wonderful stay by offering warm hospitality, comfortable rooms, and fun outdoor activities. We aim to provide the perfect mix of rest, adventure, and friendly service that connects you with the beauty of Corbett.
          </p>
        </div>

        <div className="about-mission-image">
          <Image
            src="/assets/images/gallery/cottage-exterior-dusk.jpeg"
            alt="Corbett Treat Resort Cottage"
            fill
            sizes="(max-width: 992px) 100vw, 33vw"
            style={{ objectFit: "cover" }}
            loading="eager"
          />
        </div>

        <div className="about-mission-block">
          <h3 className="about-mission-heading">Our Vision</h3>
          <p className="about-mission-text">
            Our vision is to be the most loved nature resort in Jim Corbett—known for excellent service, green practices, and beautiful guest experiences. We strive to help travelers relax close to nature while enjoying comfortable rooms and care.
          </p>
        </div>

      </div>
    </section>
  );
};

export default AboutMission;
