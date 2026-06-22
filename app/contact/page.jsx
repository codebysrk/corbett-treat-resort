"use client";

import Image from "next/image";
import { ClientShell, Footer } from "@/components";
import {
  RiMapPinLine,
  RiPhoneLine,
  RiMailLine,
  RiTimeLine,
  RiInstagramLine,
  RiFacebookCircleLine,
  RiYoutubeLine,
  RiArrowRightUpLine,
} from "react-icons/ri";
import { CONTACT_PHONES, RESORT_ADDRESS, CONTACT_EMAIL, SOCIAL_LINKS } from "@/constants";
import "./contact-page.css";

export default function ContactPage() {
  const socialIconMap = {
    instagram: RiInstagramLine,
    facebook: RiFacebookCircleLine,
    youtube: RiYoutubeLine,
  };

  return (
    <>
      <ClientShell />

      <main className="cp-main">
        {/* ── Hero Section ── */}
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

        {/* ── Quick Info Strip ── */}
        <section className="cp-info-strip">
          <div className="cp-info-strip-inner">
            <div className="cp-info-card">
              <div className="cp-info-icon-wrap">
                <RiMapPinLine />
              </div>
              <div>
                <h3 className="cp-info-label">Our Location</h3>
                <p className="cp-info-value">{RESORT_ADDRESS}</p>
              </div>
            </div>

            <div className="cp-info-divider" />

            <div className="cp-info-card">
              <div className="cp-info-icon-wrap">
                <RiPhoneLine />
              </div>
              <div>
                <h3 className="cp-info-label">Call Us</h3>
                {CONTACT_PHONES.map((p, i) => (
                  <a key={i} href={p.href} className="cp-info-value cp-info-link">
                    {p.label}
                  </a>
                ))}
              </div>
            </div>

            <div className="cp-info-divider" />

            <div className="cp-info-card">
              <div className="cp-info-icon-wrap">
                <RiMailLine />
              </div>
              <div>
                <h3 className="cp-info-label">Email Us</h3>
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="cp-info-value cp-info-link"
                >
                  {CONTACT_EMAIL}
                </a>
              </div>
            </div>

            <div className="cp-info-divider" />

            <div className="cp-info-card">
              <div className="cp-info-icon-wrap">
                <RiTimeLine />
              </div>
              <div>
                <h3 className="cp-info-label">Front Desk</h3>
                <p className="cp-info-value">24 / 7 Available</p>
              </div>
            </div>
          </div>
        </section>

        {/* ── Social & Map Section ── */}
        <section className="cp-map-social-section">
          <div className="cp-map-social-inner">
            {/* Social CTA */}
            <div className="cp-social-panel">
              <span className="cp-social-eyebrow">Stay Connected</span>
              <h2 className="cp-social-heading">Follow Us on Social Media</h2>
              <p className="cp-social-desc">
                Stay updated with latest events, offers &amp; behind-the-scenes
                moments from Corbett Treat Resort.
              </p>

              <div className="cp-social-links">
                {SOCIAL_LINKS.map((link) => {
                  const Icon = socialIconMap[link.platform];
                  return (
                    <a
                      key={link.label}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="cp-social-link-card"
                    >
                      <div className="cp-social-link-icon">
                        {Icon && <Icon />}
                      </div>
                      <span className="cp-social-link-label">{link.label}</span>
                      <RiArrowRightUpLine className="cp-social-link-arrow" />
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Google Map */}
            <div className="cp-map-panel">
              <div className="cp-map-frame">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3455.518883204992!2d79.03541817547167!3d29.356269975231735!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390a7b4588e3a241%3A0x6440b8a2113337ab!2sCorbett%20Treat%20Resort!5e0!3m2!1sen!2sin!4v1718600000000!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Corbett Treat Resort Location Map"
                />
              </div>
              {/* Location Chip */}
              <div className="cp-map-chip">
                <RiMapPinLine className="cp-map-chip-icon" />
                <div>
                  <p className="cp-map-chip-title">Corbett Treat Resort</p>
                  <p className="cp-map-chip-addr">
                    Village Dhela, Jim Corbett National Park, Ramnagar,
                    Uttarakhand 244715
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
