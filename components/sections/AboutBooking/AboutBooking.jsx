"use client";

import "./AboutBooking.css";
import Image from "next/image";
import { useState } from "react";
import Button from "../../Button";

const AboutBooking = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    contactNumber: "",
    emailAddress: "",
    checkIn: "",
    checkOut: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus("success");
      setFormData({ 
        firstName: "", lastName: "", contactNumber: "", 
        emailAddress: "", checkIn: "", checkOut: "" 
      });
      
      setTimeout(() => setSubmitStatus(null), 5000);
    }, 1500);
  };

  return (
    <section className="about-booking-section">
      <div className="about-booking-container">
        
        <div className="about-booking-image-wrapper">
          <Image
            src="/assets/images/restaurant-interior-1.jpeg"
            alt="Corbett Treat Resort Dining"
            fill
            sizes="(max-width: 992px) 100vw, 50vw"
            style={{ objectFit: "cover" }}
          />
        </div>

        <div className="about-booking-content">
          <h2 className="about-booking-heading">Experience Hospitality Like Never Before Book Now!</h2>
          <p className="about-booking-desc">
            Plan your perfect stay with ease — just fill out the form below and our team will get back to you with availability, pricing, and personalized assistance.
          </p>

          <form className="about-booking-form" onSubmit={handleSubmit}>
            <div className="about-booking-form-row">
              <div className="about-booking-form-group">
                <label htmlFor="firstName">First Name <span>*</span></label>
                <input type="text" id="firstName" name="firstName" value={formData.firstName} onChange={handleChange} required placeholder="First Name" />
              </div>
              <div className="about-booking-form-group">
                <label htmlFor="lastName">Last Name <span>*</span></label>
                <input type="text" id="lastName" name="lastName" value={formData.lastName} onChange={handleChange} required placeholder="Last Name" />
              </div>
            </div>

            <div className="about-booking-form-row">
              <div className="about-booking-form-group">
                <label htmlFor="contactNumber">Contact Number <span>*</span></label>
                <input type="tel" id="contactNumber" name="contactNumber" value={formData.contactNumber} onChange={handleChange} required placeholder="Contact Number" />
              </div>
              <div className="about-booking-form-group">
                <label htmlFor="emailAddress">Email Address <span>*</span></label>
                <input type="email" id="emailAddress" name="emailAddress" value={formData.emailAddress} onChange={handleChange} required placeholder="Email Address" />
              </div>
            </div>

            <div className="about-booking-form-row">
              <div className="about-booking-form-group">
                <label htmlFor="checkIn">Check In <span>*</span></label>
                <input type="date" id="checkIn" name="checkIn" value={formData.checkIn} onChange={handleChange} required />
              </div>
              <div className="about-booking-form-group">
                <label htmlFor="checkOut">Check Out <span>*</span></label>
                <input type="date" id="checkOut" name="checkOut" value={formData.checkOut} onChange={handleChange} required />
              </div>
            </div>

            <div className="about-booking-submit">
              <Button variant="primary" disabled={isSubmitting}>
                {isSubmitting ? "Sending..." : "Send Inquiry"}
              </Button>
            </div>

            {submitStatus === "success" && (
              <div className="about-booking-status success">
                Thank you! Your inquiry has been sent successfully. We will get back to you soon.
              </div>
            )}
          </form>
        </div>

      </div>
    </section>
  );
};

export default AboutBooking;
