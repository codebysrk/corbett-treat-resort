"use client";


import { 
  ClientShell,
  Hero, 
  AboutSection, 
  RoomsShowcase,
  DiningSection, 
  Amenities,
  ActivitiesSection, 
  EventsSection,
  GallerySection, 
  PlacesToVisit,
  Footer 
} from "@/components";

export default function Home() {
  return (
    <>
      <ClientShell />

      <main>
        <Hero />
        <AboutSection />
        <RoomsShowcase />
        <DiningSection />
        <Amenities />
        <ActivitiesSection />
        <EventsSection />
        <GallerySection />
        {/* <PlacesToVisit /> */}
      </main>

      <Footer />
    </>
  );
}
