"use client";

import { useState } from "react";
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
import "./ContactSection.css";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    checkIn: "",
    checkOut: "",
    guests: "1",
    children: "0",
    mealPlan: "no_meal",
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

      // Format meal plan
      const mealPlanLabels = {
        "no_meal": "No Meal",
        "2_meals": "2 Meals (Breakfast + Dinner)",
        "3_meals": "3 Meals (Breakfast + Lunch + Dinner)"
      };
      const selectedMealPlan = mealPlanLabels[formData.mealPlan] || "No Meal";

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
Meal Plan: ${selectedMealPlan}

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
        mealPlan: "no_meal",
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
      <section className="contact-details-section">
        <div className="contact-details-container">
          <div className="contact-layout-wrapper">
            
            {/* Left Column - Large Image */}
            <div className="contact-image-column">
              <img 
                src="/assets/images/gallery/garden-lawn-exterior-1.jpeg" 
                alt="Corbett Treat Resort Guests" 
                className="contact-hero-image"
              />
            </div>

            {/* Right Column - Form */}
            <div className="contact-form-column">
              <span className="contact-eyebrow">GET IN TOUCH</span>
              <h2 className="contact-heading">
                Connect With Us for a <br />
                <em>Perfect Stay</em> You & Family
              </h2>

              <form className="contact-inquiry-form" onSubmit={handleSubmit} noValidate>
                
                {/* Row 1: Name & Phone */}
                <div className="form-grid-2col">
                  <div className="form-input-group">
                    <label className="form-field-label">Full Name *</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. John Doe"
                      className={`form-field ${errors.name ? "error-border" : ""}`}
                    />
                    {errors.name && <span className="field-error-msg">{errors.name}</span>}
                  </div>

                  <div className="form-input-group">
                    <label className="form-field-label">Your Phone *</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="e.g. (+91) 8123 456 789"
                      className={`form-field ${errors.phone ? "error-border" : ""}`}
                    />
                    {errors.phone && <span className="field-error-msg">{errors.phone}</span>}
                  </div>
                </div>

                {/* Row 2: Email & Meal Option */}
                <div className="form-grid-2col">
                  <div className="form-input-group">
                    <label className="form-field-label">Your Email *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="e.g. hello@solenne.com"
                      className={`form-field ${errors.email ? "error-border" : ""}`}
                    />
                    {errors.email && <span className="field-error-msg">{errors.email}</span>}
                  </div>

                  <div className="form-input-group">
                    <label className="form-field-label">Meal Option</label>
                    <select
                      name="mealPlan"
                      value={formData.mealPlan}
                      onChange={handleChange}
                      className="form-field select-field"
                    >
                      <option value="no_meal">No Meal</option>
                      <option value="2_meals">2 Meals (Breakfast + Dinner)</option>
                      <option value="3_meals">3 Meals (Breakfast + Lunch + Dinner)</option>
                    </select>
                  </div>
                </div>

                {/* Row 3: Check-in & Check-out */}
                <div className="form-grid-2col">
                  <div className="form-input-group">
                    <label className="form-field-label">Check-in Date *</label>
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
                    <label className="form-field-label">Check-out Date *</label>
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

                {/* Row 4: Guests & Children */}
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

                {/* Row 5: Message */}
                <div className="form-input-group">
                  <label className="form-field-label">Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Write your message here..."
                    rows={2}
                    className={`form-field textarea-field ${errors.message ? "error-border" : ""}`}
                  />
                  {errors.message && <span className="field-error-msg">{errors.message}</span>}
                </div>

                {/* Submit Button */}
                <div className="form-submit-wrapper">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="form-submit-btn-pill"
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                    <span className="submit-icon-circle">
                      <RiSendPlaneFill className="submit-icon" />
                    </span>
                  </button>
                </div>

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
    </>
  );
};

export default ContactSection;
