"use client";

import Image from "next/image";
import { ClientShell, Footer, ContactSection } from "@/components";
import { RiMapPinLine } from "react-icons/ri";
import "./contact-page.css";

export default function ContactPage() {
  return (
    <>
      <ClientShell />

      <main className="contact-page-main">
        {/* Hero Section */}
        <section className="contact-hero-section">
          <Image
            src="/assets/images/cottage-exterior-dusk.jpeg"
            alt="Corbett Treat Resort Cottage Dusk View"
            fill
            priority
            className="contact-hero-img"
          />
          <div className="contact-hero-overlay" />

          <div className="contact-hero-content">
            <p className="contact-hero-subtitle">Contact Us</p>
            <h1 className="contact-hero-title-main">We'd Love to</h1>
            <h2 className="contact-hero-title-sub">Hear From You</h2>
            <div className="contact-hero-divider" />
            <p className="contact-hero-desc">
              Planning a getaway or have a special request?
              <br />
              Our team is here to help you with the perfect stay.
            </p>
          </div>
        </section>

        {/* Contact Info + Form Section from reusable component */}
        <ContactSection />

        {/* Map Section */}
        <section className="contact-map-section">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3455.518883204992!2d79.03541817547167!3d29.356269975231735!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390a7b4588e3a241%3A0x6440b8a2113337ab!2sCorbett%20Treat%20Resort!5e0!3m2!1sen!2sin!4v1718600000000!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Corbett Treat Resort Location Map"
            className="map-iframe"
          />
          {/* Location Card Overlay */}
          <div className="map-overlay-card">
            <div className="card-flex-align">
              <div className="card-icon-circle">
                <RiMapPinLine className="card-icon" />
              </div>
              <div className="card-info-text">
                <p className="card-title">Corbett Treat Resort</p>
                <p className="card-address">
                  Village Dhela, Jim Corbett National Park,
                  <br />
                  Ramnagar, Uttarakhand 244715
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
