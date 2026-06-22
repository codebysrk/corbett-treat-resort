"use client";

import React from "react";
import Image from "next/image";
import { Button } from "@/components";
import "./ActivitiesSection.css";

export default function ActivitiesSection() {
  return (
    <section className="act-section" id="experience">
      <div className="act-container">
        <div className="act-split-layout">
          {/* Left Column: Image */}
          <div className="act-image-pane">
            <Image
              src="/assets/images/activity/playing-kids.jpg"
              alt="Kids playing in resort garden playground"
              width={650}
              height={450}
              className="act-main-image"
              style={{ objectFit: "cover", width: "100%", height: "100%", borderRadius: "8px" }}
            />
          </div>

          {/* Right Column: Info & Summary */}
          <div className="act-info-pane">
            <span className="act-eyebrow">Activities &amp; Recreation</span>
            <h2 className="act-heading">
              Adventures <em>&amp;</em> Recreation
            </h2>
            <p className="act-body">
              Enjoy exciting activities for all ages, including Swimming Pool, Volleyball, Cricket, Badminton, Table Tennis, Kids&apos; Slides, Jungle Safari, and Wildlife Photography—perfect for fun, adventure, and relaxation during your stay.
            </p>
            
            <div className="act-action-btn">
              <Button
                href="/experience"
                variant="primary"
                size="large"
              >
                Explore All Activities
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
