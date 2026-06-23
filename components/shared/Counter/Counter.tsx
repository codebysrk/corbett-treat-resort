"use client";

import { useEffect, useRef, useState } from "react";

export default function Counter({ value }) {
  const elementRef = useRef(null);
  const getInitialValue = () => {
    const match = value.match(/([\d.]+)(.*)/);
    if (!match) return value;
    const suffix = match[2] || "";
    return "0" + suffix;
  };

  const [displayValue, setDisplayValue] = useState(getInitialValue);

  useEffect(() => {
    const match = value.match(/([\d.]+)(.*)/);
    if (!match) {
      return;
    }

    const targetVal = parseFloat(match[1]);
    const suffix = match[2] || "";
    const hasDecimal = match[1].includes(".");
    const decimals = hasDecimal ? match[1].split(".")[1].length : 0;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            let startTimestamp = null;
            const duration = 1800; // 1.8 seconds count up duration

            const step = (timestamp) => {
              if (!startTimestamp) startTimestamp = timestamp;
              const elapsed = timestamp - startTimestamp;
              const progress = Math.min(elapsed / duration, 1);
              
              // Cubic ease-out formula
              const easeProgress = 1 - Math.pow(1 - progress, 3);
              const currentVal = easeProgress * targetVal;
              
              setDisplayValue(currentVal.toFixed(decimals) + suffix);

              if (progress < 1) {
                window.requestAnimationFrame(step);
              }
            };

            window.requestAnimationFrame(step);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [value]);

  return <span ref={elementRef}>{displayValue}</span>;
}
