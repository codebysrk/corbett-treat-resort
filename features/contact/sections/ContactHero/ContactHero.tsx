import Image from "next/image";

export default function ContactHero() {
  return (
    <section className="cp-hero">
      <Image
        src="/assets/images/gallery/cottage-exterior-dusk.jpeg"
        alt="Corbett Treat Resort at dusk"
        fill
        priority
        className="cp-hero-bg"
      />
      <div className="cp-hero-overlay" />
      <div className="cp-hero-content">
        <span className="cp-hero-eyebrow">Contact Us</span>
        <h1 className="cp-hero-title">Get In Touch</h1>
        <p className="cp-hero-desc">
          Planning a getaway or have a special request? Our team is here to
          help you craft the perfect stay.
        </p>
      </div>
    </section>
  );
}
