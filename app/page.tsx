
import { ClientShell, Footer } from "@/components";
import Hero from "@/features/home/sections/Hero";
import AboutSection from "@/features/home/sections/AboutSection";
import RoomsShowcase from "@/features/home/sections/RoomsShowcase";
import DiningSection from "@/features/home/sections/DiningSection";
import Amenities from "@/features/home/sections/Amenities";
import ActivitiesSection from "@/features/home/sections/ActivitiesSection";
import EventsSection from "@/features/home/sections/EventsSection";
import GallerySection from "@/features/home/sections/GallerySection";

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
