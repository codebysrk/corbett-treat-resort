"use client";

import { useState, useEffect, useRef } from "react";

// Types
interface BookingPayload {
  name: string;
  phone: string;
  email: string;
  checkIn: string;
  checkOut: string;
  roomType: string;
  adults: number;
  children: number;
  childrenAges: number[];
  specialRequest: string;
}

interface ValidationErrors {
  name?: string;
  phone?: string;
  email?: string;
  checkIn?: string;
  checkOut?: string;
  childrenAges?: string[];
}

// Reusable Counter Component
interface CounterProps {
  label: string;
  value: number;
  min: number;
  onChange: (value: number) => void;
  disabled?: boolean;
}

function GuestCounter({ label, value, min, onChange, disabled }: CounterProps) {
  return (
    <div className="counter-container">
      <span className="counter-label">{label}</span>
      <div className="counter-controls">
        <button
          type="button"
          onClick={() => onChange(Math.max(min, value - 1))}
          disabled={disabled || value <= min}
          className="counter-btn"
        >
          −
        </button>
        <span className="counter-value">{value}</span>
        <button
          type="button"
          onClick={() => onChange(value + 1)}
          disabled={disabled}
          className="counter-btn"
        >
          +
        </button>
      </div>
    </div>
  );
}

// Custom Date Range Picker Component
interface DateRangePickerProps {
  checkIn: string;
  checkOut: string;
  onChange: (checkIn: string, checkOut: string) => void;
  disabled?: boolean;
}

function CustomDateRangePicker({ checkIn, checkOut, onChange, disabled }: DateRangePickerProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [currentDate, setCurrentDate] = useState(new Date());
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();

  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const firstDayIndex = new Date(year, month, 1).getDay();

  const handlePrevMonth = () => {
    setCurrentDate(new Date(year, month - 1, 1));
  };

  const handleNextMonth = () => {
    setCurrentDate(new Date(year, month + 1, 1));
  };

  const handleDayClick = (day: number) => {
    const selectedDate = new Date(year, month, day);
    const dateStr = selectedDate.toISOString().split("T")[0]; // YYYY-MM-DD

    if (!checkIn || (checkIn && checkOut)) {
      onChange(dateStr, "");
    } else {
      const checkInDate = new Date(checkIn);
      if (selectedDate > checkInDate) {
        onChange(checkIn, dateStr);
        setIsOpen(false);
      } else {
        onChange(dateStr, "");
      }
    }
  };

  const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  const daysArray = Array.from({ length: daysInMonth }, (_, i) => i + 1);
  const emptyCells = Array.from({ length: firstDayIndex }, (_, i) => i);

  const isDateInRange = (day: number) => {
    if (!checkIn || !checkOut) return false;
    const thisDate = new Date(year, month, day);
    return thisDate > new Date(checkIn) && thisDate < new Date(checkOut);
  };

  const isStartDate = (day: number) => {
    if (!checkIn) return false;
    const thisDate = new Date(year, month, day);
    return thisDate.toISOString().split("T")[0] === checkIn;
  };

  const isEndDate = (day: number) => {
    if (!checkOut) return false;
    const thisDate = new Date(year, month, day);
    return thisDate.toISOString().split("T")[0] === checkOut;
  };

  const isPastDate = (day: number) => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const thisDate = new Date(year, month, day);
    return thisDate < today;
  };

  const formatDateStr = (dateStr: string) => {
    if (!dateStr) return "Select Date";
    const parts = dateStr.split("-");
    return `${parts[2]}-${parts[1]}-${parts[0]}`; // DD-MM-YYYY
  };

  return (
    <div className="custom-picker-container" ref={dropdownRef}>
      <div className={`picker-trigger ${isOpen ? "focused" : ""} ${disabled ? "disabled" : ""}`} onClick={() => !disabled && setIsOpen(!isOpen)}>
        <div className="trigger-col">
          <span className="trigger-label">Check-in</span>
          <span className={`trigger-val ${checkIn ? "selected" : ""}`}>{formatDateStr(checkIn)}</span>
        </div>
        <div className="trigger-divider">→</div>
        <div className="trigger-col">
          <span className="trigger-label">Check-out</span>
          <span className={`trigger-val ${checkOut ? "selected" : ""}`}>{formatDateStr(checkOut)}</span>
        </div>
      </div>

      {isOpen && (
        <div className="calendar-dropdown">
          <div className="calendar-header">
            <button type="button" className="cal-nav-btn" onClick={handlePrevMonth}>&larr;</button>
            <span className="cal-month-title">{monthNames[month]} {year}</span>
            <button type="button" className="cal-nav-btn" onClick={handleNextMonth}>&rarr;</button>
          </div>

          <div className="calendar-weekdays">
            <span>Su</span><span>Mo</span><span>Tu</span><span>We</span><span>Th</span><span>Fr</span><span>Sa</span>
          </div>

          <div className="calendar-days">
            {emptyCells.map((_, i) => (
              <span key={`empty-${i}`} className="day-empty" />
            ))}
            {daysArray.map((day) => {
              const start = isStartDate(day);
              const end = isEndDate(day);
              const inRange = isDateInRange(day);
              const past = isPastDate(day);

              return (
                <button
                  key={day}
                  type="button"
                  disabled={past}
                  className={`day-btn ${start ? "start-date" : ""} ${end ? "end-date" : ""} ${inRange ? "in-range" : ""}`}
                  onClick={() => handleDayClick(day)}
                >
                  {day}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}

export default function BookingFormTester() {
  const defaultState: BookingPayload = {
    name: "",
    phone: "",
    email: "",
    checkIn: "",
    checkOut: "",
    roomType: "Deluxe Room",
    adults: 2,
    children: 0,
    childrenAges: [],
    specialRequest: "",
  };

  const [formData, setFormData] = useState<BookingPayload>(defaultState);
  const [errors, setErrors] = useState<ValidationErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [apiError, setApiError] = useState<string | null>(null);
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const handleChildrenChange = (newCount: number) => {
    setFormData((prev) => {
      const currentAges = [...prev.childrenAges];
      if (newCount > prev.children) {
        const added = Array(newCount - prev.children).fill(5);
        return {
          ...prev,
          children: newCount,
          childrenAges: [...currentAges, ...added],
        };
      } else if (newCount < prev.children) {
        return {
          ...prev,
          children: newCount,
          childrenAges: currentAges.slice(0, newCount),
        };
      }
      return prev;
    });
  };

  const handleChildAgeChange = (index: number, age: number) => {
    setFormData((prev) => {
      const updatedAges = [...prev.childrenAges];
      updatedAges[index] = age;
      return {
        ...prev,
        childrenAges: updatedAges,
      };
    });
  };

  const fillDemoData = () => {
    setFormData({
      name: "Ajay Kumar",
      phone: "9876543210",
      email: "ajay@gmail.com",
      checkIn: "2026-07-01",
      checkOut: "2026-07-03",
      roomType: "Deluxe Room",
      adults: 2,
      children: 2,
      childrenAges: [4, 8],
      specialRequest: "Need jungle facing room",
    });
    setErrors({});
    setSubmitSuccess(false);
    setApiError(null);
  };

  const resetForm = () => {
    setFormData(defaultState);
    setErrors({});
    setSubmitSuccess(false);
    setApiError(null);
  };

  const validateForm = (): boolean => {
    const tempErrors: ValidationErrors = {};
    let isValid = true;

    if (!formData.name.trim()) {
      tempErrors.name = "Full name is required.";
      isValid = false;
    }
    if (!formData.phone.trim()) {
      tempErrors.phone = "Mobile number is required.";
      isValid = false;
    } else if (!/^\d{10}$/.test(formData.phone.trim())) {
      tempErrors.phone = "Phone number must be exactly 10 digits.";
      isValid = false;
    }
    if (!formData.email.trim()) {
      tempErrors.email = "Email address is required.";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = "Please enter a valid email address.";
      isValid = false;
    }
    if (!formData.checkIn) {
      tempErrors.checkIn = "Check-in date is required.";
      isValid = false;
    }
    if (!formData.checkOut) {
      tempErrors.checkOut = "Check-out date is required.";
      isValid = false;
    }

    if (formData.checkIn && formData.checkOut) {
      const checkInDate = new Date(formData.checkIn);
      const checkOutDate = new Date(formData.checkOut);
      if (checkOutDate <= checkInDate) {
        tempErrors.checkOut = "Check-out date must be after Check-in date.";
        isValid = false;
      }
    }

    if (formData.children > 0) {
      const ageErrors = formData.childrenAges.map((age) => {
        if (isNaN(age) || age < 0 || age > 17) {
          return "Age must be between 0 and 17.";
        }
        return "";
      });

      if (ageErrors.some((err) => err !== "")) {
        tempErrors.childrenAges = ageErrors;
        isValid = false;
      }
    }

    setErrors(tempErrors);
    return isValid;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitSuccess(false);
    setApiError(null);

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    try {
      const response = await fetch("/api/booking", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok || !data.success) {
        throw new Error(data.error || "Failed to submit booking.");
      }

      setSubmitSuccess(true);
      setShowSuccessModal(true);
    } catch (err: any) {
      console.error("Submission failed:", err);
      setApiError(err.message || "Something went wrong during submission.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="tester-page">
      <style>{`
        .tester-page {
          min-height: 100vh;
          background-color: #090807;
          background-image: 
            radial-gradient(circle at 10% 20%, rgba(200, 174, 134, 0.04) 0%, transparent 40%),
            radial-gradient(circle at 90% 80%, rgba(168, 142, 104, 0.03) 0%, transparent 50%);
          color: #e8e6e3;
          font-family: var(--font-poppins), system-ui, -apple-system, sans-serif;
          padding: clamp(1.5rem, 5vw, 4rem) 1.5rem;
          box-sizing: border-box;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .header-section {
          text-align: center;
          margin-bottom: clamp(2rem, 6vw, 3.5rem);
          width: 100%;
          max-width: 1200px;
        }

        .header-section span {
          font-size: 0.75rem;
          letter-spacing: 0.3em;
          text-transform: uppercase;
          color: #c8ae86;
          display: block;
          margin-bottom: 0.5rem;
          font-weight: 500;
        }

        .header-section h1 {
          font-family: var(--font-playfair), serif;
          font-size: clamp(2rem, 4vw, 3rem);
          color: #ffffff;
          margin: 0 0 0.75rem 0;
          font-weight: 400;
          letter-spacing: -0.5px;
        }

        .header-section p {
          color: #a8a6a1;
          margin: 0;
          font-size: 0.95rem;
          font-weight: 300;
          max-width: 600px;
          margin-left: auto;
          margin-right: auto;
          line-height: 1.5;
        }

        .tester-container {
          display: grid;
          grid-template-columns: 1.25fr 0.75fr;
          gap: 2.5rem;
          width: 100%;
          max-width: 1200px;
          align-items: start;
        }

        .panel {
          background-color: #13110f;
          border: 1px solid #231f1a;
          border-radius: 12px;
          padding: 2.5rem 2rem;
          box-shadow: 0 16px 40px rgba(0, 0, 0, 0.6);
          position: relative;
          overflow: hidden;
        }

        .panel::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 3px;
          background: linear-gradient(to right, #c8ae86, #8e7550);
        }

        .panel-title {
          font-family: var(--font-playfair), serif;
          font-size: 1.5rem;
          color: #ffffff;
          margin-top: 0;
          margin-bottom: 2rem;
          font-weight: 400;
          letter-spacing: 0.5px;
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }

        .panel-title::after {
          content: "";
          flex-grow: 1;
          height: 1px;
          background: linear-gradient(to right, #2d2620, transparent);
        }

        .utilities {
          display: flex;
          gap: 0.85rem;
          margin-bottom: 2rem;
        }

        .btn-utility {
          background-color: transparent;
          border: 1px solid #3c342c;
          color: #c8ae86;
          padding: 0.55rem 1.15rem;
          border-radius: 6px;
          cursor: pointer;
          font-size: 0.82rem;
          font-weight: 500;
          transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
          letter-spacing: 0.05em;
        }

        .btn-utility:hover:not(:disabled) {
          border-color: #c8ae86;
          background-color: rgba(200, 174, 134, 0.05);
          color: #ffffff;
        }

        .btn-utility:disabled {
          opacity: 0.3;
          cursor: not-allowed;
        }

        .form-grid {
          display: flex;
          flex-direction: column;
          gap: 1.75rem;
        }

        .form-section-title {
          font-size: 0.72rem;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: #a88e68;
          font-weight: 600;
          margin: 0.5rem 0 0 0;
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .form-section-title::after {
          content: "";
          flex-grow: 1;
          height: 1px;
          background: #231f1a;
        }

        .form-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1.5rem;
        }

        .form-group {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .form-group label {
          font-size: 0.82rem;
          color: #c5c2bd;
          font-weight: 500;
          letter-spacing: 0.02em;
        }

        .form-control {
          background-color: #1a1714;
          border: 1px solid #2d2620;
          color: #ffffff;
          padding: 0.8rem 1rem;
          border-radius: 6px;
          font-size: 0.92rem;
          transition: all 0.3s ease;
          outline: none;
          box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.2);
          font-family: inherit;
        }

        .form-control:focus {
          border-color: #c8ae86;
          box-shadow: 0 0 0 3px rgba(200, 174, 134, 0.12), inset 0 2px 4px rgba(0, 0, 0, 0.2);
          background-color: #1f1b17;
        }

        .form-control:disabled {
          background-color: #13110f;
          color: #6e6b66;
          border-color: #1f1b17;
          cursor: not-allowed;
        }

        .error-message {
          color: #ff6b6b;
          font-size: 0.76rem;
          margin-top: 0.15rem;
          font-weight: 400;
        }

        /* Custom Date Range Picker Styles */
        .custom-picker-container {
          position: relative;
          width: 100%;
        }

        .picker-trigger {
          display: grid;
          grid-template-columns: 1fr auto 1fr;
          align-items: center;
          background-color: #1a1714;
          border: 1px solid #2d2620;
          border-radius: 6px;
          cursor: pointer;
          transition: all 0.3s ease;
          box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.2);
        }

        .picker-trigger.focused,
        .picker-trigger:hover:not(.disabled) {
          border-color: #c8ae86;
          box-shadow: 0 0 0 3px rgba(200, 174, 134, 0.12), inset 0 2px 4px rgba(0, 0, 0, 0.2);
        }

        .picker-trigger.disabled {
          background-color: #13110f;
          border-color: #1f1b17;
          cursor: not-allowed;
          opacity: 0.6;
        }

        .trigger-col {
          display: flex;
          flex-direction: column;
          padding: 0.8rem 1.25rem;
          gap: 0.25rem;
        }

        .trigger-label {
          font-size: 0.72rem;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          color: #a88e68;
          font-weight: 600;
        }

        .trigger-val {
          font-size: 0.92rem;
          color: #8d8a84;
          font-weight: 500;
        }

        .trigger-val.selected {
          color: #ffffff;
        }

        .trigger-divider {
          color: #c8ae86;
          font-size: 1.1rem;
          opacity: 0.75;
          user-select: none;
        }

        .calendar-dropdown {
          position: absolute;
          top: calc(100% + 8px);
          left: 0;
          z-index: 50;
          width: 320px;
          background-color: #13110f;
          border: 1px solid #2d2620;
          border-radius: 8px;
          padding: 1.25rem;
          box-shadow: 0 16px 40px rgba(0, 0, 0, 0.7);
          animation: fadeIn 0.2s ease;
        }

        .calendar-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 1.25rem;
        }

        .cal-month-title {
          font-size: 0.92rem;
          font-weight: 600;
          color: #ffffff;
          letter-spacing: 0.05em;
        }

        .cal-nav-btn {
          background: none;
          border: none;
          color: #c8ae86;
          cursor: pointer;
          font-size: 1.1rem;
          padding: 0.25rem 0.5rem;
          border-radius: 4px;
          transition: background-color 0.2s;
        }

        .cal-nav-btn:hover {
          background-color: rgba(200, 174, 134, 0.08);
        }

        .calendar-weekdays {
          display: grid;
          grid-template-columns: repeat(7, 1fr);
          text-align: center;
          margin-bottom: 0.65rem;
          font-size: 0.72rem;
          color: #a88e68;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .calendar-days {
          display: grid;
          grid-template-columns: repeat(7, 1fr);
          gap: 6px;
        }

        .day-empty {
          height: 34px;
        }

        .day-btn {
          height: 34px;
          background: transparent !important;
          border: none;
          color: #ffffff !important;
          font-size: 0.88rem;
          font-weight: 500;
          border-radius: 4px;
          cursor: pointer;
          transition: all 0.2s ease;
          display: flex;
          justify-content: center;
          align-items: center;
          outline: none;
        }

        .day-btn:hover:not(:disabled) {
          background-color: #c8ae86 !important;
          color: #090807 !important;
          font-weight: 600;
        }

        .day-btn:disabled {
          color: #4a443d !important;
          cursor: not-allowed;
          opacity: 0.35;
        }

        .day-btn.start-date,
        .day-btn.end-date {
          background-color: #c8ae86 !important;
          color: #090807 !important;
          font-weight: 600;
          border-radius: 4px;
        }

        .day-btn.in-range {
          background-color: rgba(200, 174, 134, 0.2) !important;
          color: #ffffff !important;
          border-radius: 0;
        }

        /* Guests Counter styles */
        .counter-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1.5rem;
          background-color: #1a1714;
          padding: 1.25rem;
          border-radius: 8px;
          border: 1px solid #2d2620;
        }

        .counter-container {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .counter-label {
          font-size: 0.88rem;
          color: #c5c2bd;
          font-weight: 500;
        }

        .counter-controls {
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        .counter-btn {
          width: 32px;
          height: 32px;
          border-radius: 50%;
          border: 1px solid #3c342c;
          background-color: transparent;
          color: #c8ae86;
          cursor: pointer;
          display: flex;
          justify-content: center;
          align-items: center;
          font-size: 1.1rem;
          font-weight: 300;
          transition: all 0.2s ease;
          outline: none;
        }

        .counter-btn:hover:not(:disabled) {
          border-color: #c8ae86;
          background-color: #c8ae86;
          color: #090807;
        }

        .counter-btn:disabled {
          opacity: 0.25;
          cursor: not-allowed;
        }

        .counter-value {
          font-size: 1.05rem;
          font-weight: 600;
          min-width: 24px;
          text-align: center;
          color: #ffffff;
        }

        /* Child Age Fields */
        .child-ages-container {
          background-color: #161412;
          border: 1px dashed #3c342c;
          border-radius: 8px;
          padding: 1.25rem;
          display: flex;
          flex-direction: column;
          gap: 1rem;
          animation: fadeIn 0.3s ease;
        }

        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-5px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .child-ages-title {
          font-size: 0.82rem;
          color: #c5c2bd;
          margin: 0;
          font-weight: 500;
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .child-ages-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(130px, 1fr));
          gap: 1rem;
        }

        /* Submit Button */
        .btn-submit {
          background: linear-gradient(135deg, #c8ae86 0%, #b89a6c 100%);
          color: #090807;
          border: none;
          padding: 1rem;
          border-radius: 6px;
          font-weight: 600;
          font-size: 0.95rem;
          cursor: pointer;
          transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
          width: 100%;
          margin-top: 1rem;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          box-shadow: 0 4px 12px rgba(200, 174, 134, 0.15);
          outline: none;
        }

        .btn-submit:hover:not(:disabled) {
          box-shadow: 0 6px 20px rgba(200, 174, 134, 0.3);
          filter: brightness(1.08);
          transform: translateY(-1px);
        }

        .btn-submit:active:not(:disabled) {
          transform: translateY(0);
        }

        .btn-submit:disabled {
          background: #231f1a;
          color: #55524d;
          box-shadow: none;
          cursor: not-allowed;
        }

        /* Status Messages */
        .success-box {
          background-color: rgba(27, 61, 43, 0.35);
          border: 1px solid #238c4f;
          color: #a3e2bb;
          padding: 1.15rem;
          border-radius: 6px;
          font-size: 0.88rem;
          margin-top: 1rem;
          text-align: left;
          line-height: 1.5;
          display: flex;
          flex-direction: column;
          gap: 0.25rem;
        }

        .success-box strong {
          color: #ffffff;
          font-size: 0.92rem;
        }

        .error-box {
          background-color: rgba(61, 27, 27, 0.35);
          border: 1px solid #8c2323;
          color: #e2a3a3;
          padding: 1.15rem;
          border-radius: 6px;
          font-size: 0.88rem;
          margin-top: 1rem;
          text-align: left;
          line-height: 1.5;
          display: flex;
          flex-direction: column;
          gap: 0.25rem;
        }

        .error-box strong {
          color: #ffffff;
          font-size: 0.92rem;
        }

        /* Custom Modal Alert Styles */
        .custom-modal-overlay {
          position: fixed;
          inset: 0;
          background-color: rgba(9, 8, 7, 0.85);
          backdrop-filter: blur(8px);
          z-index: 1000;
          display: flex;
          justify-content: center;
          align-items: center;
          animation: fadeIn 0.3s ease;
        }

        .custom-modal-card {
          background-color: #13110f;
          border: 1px solid #c8ae86;
          border-radius: 12px;
          padding: 2.5rem;
          max-width: 420px;
          width: 90%;
          text-align: center;
          box-shadow: 0 24px 48px rgba(0, 0, 0, 0.8), 0 0 20px rgba(200, 174, 134, 0.05);
          position: relative;
          overflow: hidden;
          animation: scaleUp 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
        }

        @keyframes scaleUp {
          from { transform: scale(0.9); opacity: 0; }
          to { transform: scale(1); opacity: 1; }
        }

        .modal-icon {
          width: 60px;
          height: 60px;
          background-color: rgba(200, 174, 134, 0.1);
          color: #c8ae86;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.8rem;
          font-weight: bold;
          margin: 0 auto 1.5rem auto;
          border: 1px solid rgba(200, 174, 134, 0.3);
        }

        .modal-title {
          font-family: var(--font-playfair), serif;
          font-size: 1.6rem;
          color: #ffffff;
          margin: 0 0 0.75rem 0;
          letter-spacing: 0.5px;
        }

        .modal-message {
          font-size: 0.92rem;
          color: #c5c2bd;
          line-height: 1.6;
          margin: 0 0 2rem 0;
        }

        .modal-close-btn {
          background: linear-gradient(135deg, #c8ae86 0%, #b89a6c 100%);
          color: #090807;
          border: none;
          padding: 0.8rem 2.5rem;
          border-radius: 6px;
          font-weight: 600;
          font-size: 0.9rem;
          cursor: pointer;
          transition: all 0.3s ease;
          letter-spacing: 0.08em;
          text-transform: uppercase;
        }

        .modal-close-btn:hover {
          filter: brightness(1.08);
          box-shadow: 0 4px 12px rgba(200, 174, 134, 0.2);
        }

        /* Premium JSON Viewer UI */
        .json-preview-container {
          background-color: #13110f;
          border: 1px solid #231f1a;
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 16px 40px rgba(0, 0, 0, 0.6);
          position: sticky;
          top: 3rem;
        }

        .mac-header {
          background-color: #1a1714;
          border-bottom: 1px solid #231f1a;
          padding: 0.85rem 1.25rem;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .mac-dots {
          display: flex;
          gap: 6px;
        }

        .mac-dot {
          width: 10px;
          height: 10px;
          border-radius: 50%;
        }

        .mac-dot.red { background-color: #ff5f56; }
        .mac-dot.yellow { background-color: #ffbd2e; }
        .mac-dot.green { background-color: #27c93f; }

        .mac-title {
          font-family: monospace;
          font-size: 0.78rem;
          color: #8d8a84;
          letter-spacing: 0.05em;
        }

        .json-preview {
          margin: 0;
          padding: 1.5rem 1.25rem;
          font-family: 'SFMono-Regular', Consolas, 'Liberation Mono', Menlo, monospace;
          font-size: 0.84rem;
          overflow-x: auto;
          color: #c8ae86;
          white-space: pre;
          background-color: #0d0c0a;
          line-height: 1.6;
        }

        /* Responsive Breakpoints */
        @media (max-width: 992px) {
          .tester-container {
            grid-template-columns: 1fr;
            gap: 2rem;
          }
          
          .json-preview-container {
            position: static;
          }
        }

        @media (max-width: 600px) {
          .tester-page {
            padding: 2rem 1rem;
          }

          .panel {
            padding: 1.75rem 1.25rem;
          }
          
          .form-row {
            grid-template-columns: 1fr;
            gap: 1.25rem;
          }

          .counter-row {
            grid-template-columns: 1fr;
            gap: 1.25rem;
          }
        }
      `}</style>

      <div className="header-section">
        <span>Resort Integration Hub</span>
        <h1>Booking Form Tester</h1>
        <p>A premium testing suite for previewing and validating client payload integration with the Telegram Bot API.</p>
      </div>

      <div className="tester-container">
        {/* Left Form Panel */}
        <div className="panel">
          <h2 className="panel-title">Reservation Form</h2>

          {/* Test Suite Controls */}
          <div className="utilities">
            <button
              type="button"
              onClick={fillDemoData}
              disabled={isSubmitting}
              className="btn-utility"
            >
              Fill Demo Data
            </button>
            <button
              type="button"
              onClick={resetForm}
              disabled={isSubmitting}
              className="btn-utility"
            >
              Reset Form
            </button>
          </div>

          <form onSubmit={handleSubmit} className="form-grid">
            
            <span className="form-section-title">Stay Configuration</span>

            {/* Custom Interactive Date Range Picker */}
            <div className="form-group">
              <label>Stay Dates</label>
              <CustomDateRangePicker
                checkIn={formData.checkIn}
                checkOut={formData.checkOut}
                onChange={(checkIn, checkOut) => setFormData({ ...formData, checkIn, checkOut })}
                disabled={isSubmitting}
              />
              {(errors.checkIn || errors.checkOut) && (
                <span className="error-message">
                  {errors.checkIn || errors.checkOut}
                </span>
              )}
            </div>

            {/* Room Type Selector */}
            <div className="form-group">
              <label htmlFor="roomType">Room Type</label>
              <select
                id="roomType"
                className="form-control"
                value={formData.roomType}
                onChange={(e) => setFormData({ ...formData, roomType: e.target.value })}
                disabled={isSubmitting}
              >
                <option value="Deluxe Room">Deluxe Room</option>
                <option value="Premium Room">Premium Room</option>
                <option value="Family Suite">Family Suite</option>
                <option value="Luxury Cottage">Luxury Cottage</option>
              </select>
            </div>

            {/* Guests Counter Row */}
            <div className="counter-row">
              <GuestCounter
                label="Adults"
                value={formData.adults}
                min={1}
                onChange={(val) => setFormData({ ...formData, adults: val })}
                disabled={isSubmitting}
              />
              <GuestCounter
                label="Children"
                value={formData.children}
                min={0}
                onChange={handleChildrenChange}
                disabled={isSubmitting}
              />
            </div>

            {/* Dynamic Child Age Fields */}
            {formData.children > 0 && (
              <div className="child-ages-container">
                <h3 className="child-ages-title">👶 Children Ages (0 to 17 years)</h3>
                <div className="child-ages-grid">
                  {formData.childrenAges.map((age, index) => (
                    <div className="form-group" key={index}>
                      <label htmlFor={`child-age-${index}`}>Child {index + 1} Age</label>
                      <input
                        type="number"
                        id={`child-age-${index}`}
                        className="form-control"
                        min="0"
                        max="17"
                        value={age}
                        onChange={(e) => handleChildAgeChange(index, parseInt(e.target.value) || 0)}
                        disabled={isSubmitting}
                      />
                      {errors.childrenAges?.[index] && (
                        <span className="error-message">{errors.childrenAges[index]}</span>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}

            <span className="form-section-title">Personal Information</span>

            {/* Personal Details Row */}
            <div className="form-group">
              <label htmlFor="name">Full Name</label>
              <input
                type="text"
                id="name"
                className="form-control"
                placeholder="e.g. Ajay Kumar"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                disabled={isSubmitting}
              />
              {errors.name && <span className="error-message">{errors.name}</span>}
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="phone">Mobile Number</label>
                <input
                  type="tel"
                  id="phone"
                  className="form-control"
                  placeholder="e.g. 9876543210"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  disabled={isSubmitting}
                />
                {errors.phone && <span className="error-message">{errors.phone}</span>}
              </div>

              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input
                  type="email"
                  id="email"
                  className="form-control"
                  placeholder="e.g. ajay@gmail.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  disabled={isSubmitting}
                />
                {errors.email && <span className="error-message">{errors.email}</span>}
              </div>
            </div>

            {/* Special Request */}
            <div className="form-group">
              <label htmlFor="specialRequest">Special Request (Optional)</label>
              <textarea
                id="specialRequest"
                className="form-control"
                rows={3}
                placeholder="Any special requests..."
                value={formData.specialRequest}
                onChange={(e) => setFormData({ ...formData, specialRequest: e.target.value })}
                disabled={isSubmitting}
              />
            </div>

            {/* Actions */}
            <button type="submit" disabled={isSubmitting} className="btn-submit">
              {isSubmitting ? "Sending to Telegram..." : "Submit Booking Inquiry"}
            </button>

            {submitSuccess && (
              <div className="success-box" style={{ textAlign: "center", padding: "1.5rem", display: "block" }}>
                <strong style={{ fontSize: "1.2rem", display: "block", marginBottom: "0.5rem", color: "#c8ae86" }}>✓ Thank You!</strong>
                <span style={{ fontSize: "0.9rem", opacity: 0.9, lineHeight: "1.6", color: "#ffffff", display: "block" }}>
                  Our reservation team will contact you shortly<br />
                  to confirm availability and payment details.
                </span>
              </div>
            )}

            {apiError && (
              <div className="error-box">
                <strong>✗ Dispatch Failed</strong>
                <span style={{ fontSize: "0.8rem", opacity: 0.9 }}>
                  {apiError}
                </span>
              </div>
            )}
          </form>
        </div>

        {/* Right JSON Preview Panel */}
        <div className="json-preview-container">
          <div className="mac-header">
            <div className="mac-dots">
              <div className="mac-dot red" />
              <div className="mac-dot yellow" />
              <div className="mac-dot green" />
            </div>
            <div className="mac-title">booking_payload.json</div>
          </div>
          <pre className="json-preview">
            {JSON.stringify(formData, null, 2)}
          </pre>
          <div
            style={{
              padding: "1.25rem",
              borderTop: "1px solid #231f1a",
              fontSize: "0.8rem",
              color: "#8d8a84",
              lineHeight: "1.5",
            }}
          >
            This schema demonstrates the live serialization state of the booking object sent to the
            server.
          </div>
        </div>
      </div>

      {showSuccessModal && (
        <div className="custom-modal-overlay">
          <div className="custom-modal-card">
            <div className="modal-icon">✓</div>
            <h3 className="modal-title">Thank You!</h3>
            <p className="modal-message">
              Our reservation team will contact you shortly<br />
              to confirm availability and payment details.
            </p>
            <button
              type="button"
              className="modal-close-btn"
              onClick={() => setShowSuccessModal(false)}
            >
              Okay
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
