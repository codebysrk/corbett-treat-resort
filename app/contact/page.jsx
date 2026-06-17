"use client";

import { useState } from "react";
import Image from "next/image";
import { ClientShell, Footer } from "@/components";
import {
  RiMapPinLine,
  RiPhoneLine,
  RiMailLine,
  RiTimeLine,
  RiLeafLine,
  RiSendPlaneFill,
  RiInstagramLine,
  RiFacebookCircleLine,
  RiYoutubeLine
} from "react-icons/ri";
import { CONTACT_PHONES, RESORT_ADDRESS, CONTACT_EMAIL, SOCIAL_LINKS } from "@/constants";
import "./contact-page.css";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    checkIn: "",
    checkOut: "",
    guests: "1",
    children: "0",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success', 'error', or null
  const [errorMessage, setErrorMessage] = useState("");
  const [errors, setErrors] = useState({});
  const [toast, setToast] = useState({ show: false, message: "", type: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const validate = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (formData.email.trim()) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email)) {
        newErrors.email = "Please enter a valid email address";
      }
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else {
      const cleanPhone = formData.phone.replace(/\D/g, "");
      if (cleanPhone.length < 10) {
        newErrors.phone = "Phone number must be at least 10 digits";
      }
    }

    if (!formData.checkIn) {
      newErrors.checkIn = "Check-in date is required";
    } else {
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      const checkInDate = new Date(formData.checkIn);
      if (checkInDate < today) {
        newErrors.checkIn = "Check-in cannot be in the past";
      }
    }

    if (!formData.checkOut) {
      newErrors.checkOut = "Check-out date is required";
    } else if (formData.checkIn) {
      const checkInDate = new Date(formData.checkIn);
      const checkOutDate = new Date(formData.checkOut);
      if (checkOutDate <= checkInDate) {
        newErrors.checkOut = "Check-out must be after check-in";
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitStatus(null);
    setErrorMessage("");
    setToast({ show: false, message: "", type: "" });

    if (!validate()) {
      return;
    }

    setIsSubmitting(true);

    try {
      // Helper function to format date from YYYY-MM-DD to DD-MM-YYYY
      const formatDateToDDMMYYYY = (dateStr) => {
        if (!dateStr) return "";
        const [year, month, day] = dateStr.split("-");
        return `${day}-${month}-${year}`;
      };

      const formattedCheckIn = formatDateToDDMMYYYY(formData.checkIn);
      const formattedCheckOut = formatDateToDDMMYYYY(formData.checkOut);

      // Format guests count
      const guestsCount = `${formData.guests} Adults` + (formData.children !== "0" ? `, ${formData.children} Children` : "");

      // Generate WhatsApp message format as requested
      const messageText = `🏨 New Booking Inquiry

Hello, I would like to check availability for my stay.

Guest Details:
Name: ${formData.name}
Mobile: ${formData.phone}
Email: ${formData.email || "Not provided"}

Stay Details:
Check-in: ${formattedCheckIn}
Check-out: ${formattedCheckOut}
Guests: ${guestsCount}

Customer Message:
${formData.message || "No special requirements"}

Please share room availability, pricing, and booking details.

Thank you.`;

      // Open WhatsApp in a new tab using international format for the resort's number
      const whatsappUrl = `https://wa.me/918057094258?text=${encodeURIComponent(messageText)}`;
      window.open(whatsappUrl, "_blank");

      setSubmitStatus("success");
      setToast({
        show: true,
        message: "Opening WhatsApp to send your inquiry...",
        type: "success",
      });

      // Reset form data after redirect
      setFormData({
        name: "",
        email: "",
        phone: "",
        checkIn: "",
        checkOut: "",
        guests: "1",
        children: "0",
        message: ""
      });
      setErrors({});

      setTimeout(() => {
        setToast((prev) => ({ ...prev, show: false }));
      }, 5000);
    } catch (error) {
      setSubmitStatus("error");
      const err = error.message || "Something went wrong. Please try again.";
      setErrorMessage(err);
      setToast({
        show: true,
        message: err,
        type: "error",
      });

      setTimeout(() => {
        setToast((prev) => ({ ...prev, show: false }));
      }, 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

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

        {/* Contact Info + Form Section */}
        <section className="contact-details-section">
          <div className="contact-details-container">
            <div className="contact-details-flex">
              {/* Left Column - Contact Info */}
              <div className="contact-info-column">
                <h3 className="resort-title">CORBETT TREAT RESORT</h3>
                <div className="resort-leaf-icon">
                  <RiLeafLine />
                </div>
                <p className="resort-description">
                  Experience the untamed beauty of Jim Corbett National Park while enjoying unmatched luxury, warm hospitality, and unforgettable moments.
                </p>

                <div className="contact-info-divider" />

                <div className="contact-info-list">
                  {/* Visit Us */}
                  <div className="info-list-item">
                    <div className="info-list-icon-wrapper">
                      <RiMapPinLine className="info-list-icon" />
                    </div>
                    <div className="info-list-text">
                      <p className="info-list-label">Visit Us</p>
                      <p className="info-list-val">{RESORT_ADDRESS}</p>
                    </div>
                  </div>

                  {/* Call Us */}
                  <div className="info-list-item">
                    <div className="info-list-icon-wrapper">
                      <RiPhoneLine className="info-list-icon" />
                    </div>
                    <div className="info-list-text">
                      <p className="info-list-label">Call Us</p>
                      {CONTACT_PHONES.map((phone, idx) => (
                        <p key={idx} className="info-list-val">
                          <a href={phone.href} className="contact-link">
                            {phone.label}
                          </a>
                        </p>
                      ))}
                    </div>
                  </div>

                  {/* Email Us */}
                  <div className="info-list-item">
                    <div className="info-list-icon-wrapper">
                      <RiMailLine className="info-list-icon" />
                    </div>
                    <div className="info-list-text">
                      <p className="info-list-label">Email Us</p>
                      <p className="info-list-val">
                        <a href={`mailto:${CONTACT_EMAIL}`} className="contact-link">
                          {CONTACT_EMAIL}
                        </a>
                      </p>
                    </div>
                  </div>

                  {/* We're Open */}
                  <div className="info-list-item">
                    <div className="info-list-icon-wrapper">
                      <RiTimeLine className="info-list-icon" />
                    </div>
                    <div className="info-list-text">
                      <p className="info-list-label">We're Open</p>
                      <p className="info-list-val">24/7 – Always here for you</p>
                    </div>
                  </div>
                </div>

                <div className="contact-socials-wrapper">
                  <p className="socials-title">Follow Us</p>
                  <div className="socials-icons-flex">
                    {SOCIAL_LINKS.map((link) => {
                      let Icon = null;
                      if (link.platform === "instagram") Icon = RiInstagramLine;
                      else if (link.platform === "facebook") Icon = RiFacebookCircleLine;
                      else if (link.platform === "youtube") Icon = RiYoutubeLine;
                      
                      return (
                        <a
                          key={link.platform}
                          href={link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="social-icon-link"
                          aria-label={link.label}
                        >
                          {Icon && <Icon className="social-icon" />}
                        </a>
                      );
                    })}
                  </div>
                </div>
              </div>

              {/* Vertical Divider */}
              <div className="contact-column-divider" />

              {/* Right Column - Form */}
              <div className="contact-form-column">
                <h3 className="form-column-title">SEND US AN INQUIRY</h3>
                <div className="form-column-title-underline" />

                <form className="contact-inquiry-form" onSubmit={handleSubmit} noValidate>
                  <div className="form-grid-2col">
                    <div className="form-input-group">
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Full Name"
                        className={`form-field ${errors.name ? "error-border" : ""}`}
                      />
                      {errors.name && <span className="field-error-msg">{errors.name}</span>}
                    </div>

                    <div className="form-input-group">
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Email Address"
                        className={`form-field ${errors.email ? "error-border" : ""}`}
                      />
                      {errors.email && <span className="field-error-msg">{errors.email}</span>}
                    </div>
                  </div>

                  <div className="form-input-group">
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Phone Number"
                      className={`form-field ${errors.phone ? "error-border" : ""}`}
                    />
                    {errors.phone && <span className="field-error-msg">{errors.phone}</span>}
                  </div>

                  <div className="form-grid-2col">
                    <div className="form-input-group">
                      <label className="form-field-label">Check-in Date</label>
                      <input
                        type="date"
                        name="checkIn"
                        value={formData.checkIn}
                        onChange={handleChange}
                        className={`form-field date-field ${errors.checkIn ? "error-border" : ""}`}
                      />
                      {errors.checkIn && <span className="field-error-msg">{errors.checkIn}</span>}
                    </div>

                    <div className="form-input-group">
                      <label className="form-field-label">Check-out Date</label>
                      <input
                        type="date"
                        name="checkOut"
                        value={formData.checkOut}
                        onChange={handleChange}
                        className={`form-field date-field ${errors.checkOut ? "error-border" : ""}`}
                      />
                      {errors.checkOut && <span className="field-error-msg">{errors.checkOut}</span>}
                    </div>
                  </div>

                  <div className="form-grid-2col">
                    <div className="form-input-group">
                      <label className="form-field-label">Adults (12+ yrs)</label>
                      <select
                        name="guests"
                        value={formData.guests}
                        onChange={handleChange}
                        className="form-field select-field"
                      >
                        <option value="1">1 Adult</option>
                        <option value="2">2 Adults</option>
                        <option value="3">3 Adults</option>
                        <option value="4">4 Adults</option>
                        <option value="5">5 Adults</option>
                        <option value="6+">6+ Adults</option>
                      </select>
                    </div>

                    <div className="form-input-group">
                      <label className="form-field-label">Children (0-11 yrs)</label>
                      <select
                        name="children"
                        value={formData.children}
                        onChange={handleChange}
                        className="form-field select-field"
                      >
                        <option value="0">0 Children</option>
                        <option value="1">1 Child</option>
                        <option value="2">2 Children</option>
                        <option value="3">3 Children</option>
                        <option value="4">4 Children</option>
                        <option value="5+">5+ Children</option>
                      </select>
                    </div>
                  </div>

                  <div className="form-input-group">
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Message"
                      rows={6}
                      className={`form-field textarea-field ${errors.message ? "error-border" : ""}`}
                    />
                    {errors.message && <span className="field-error-msg">{errors.message}</span>}
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="form-submit-btn"
                  >
                    <RiSendPlaneFill className="submit-icon" />
                    {isSubmitting ? "Sending Inquiry..." : "Send Inquiry"}
                  </button>

                  {submitStatus === "success" && (
                    <div className="status-banner success-banner">
                      Thank you! Your message has been sent successfully. We will get back to you soon.
                    </div>
                  )}

                  {submitStatus === "error" && (
                    <div className="status-banner error-banner">
                      {errorMessage}
                    </div>
                  )}
                </form>
              </div>
            </div>
          </div>
        </section>

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

      {/* Toast Notification Container */}
      <div className="toast-container">
        <div className={`toast-notification ${toast.type} ${toast.show ? "show" : ""}`}>
          <div className="toast-content">{toast.message}</div>
          <button
            type="button"
            className="toast-close"
            onClick={() => setToast((prev) => ({ ...prev, show: false }))}
          >
            &times;
          </button>
        </div>
      </div>

      <Footer />
    </>
  );
}
