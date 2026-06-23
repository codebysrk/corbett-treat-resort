
import { ClientShell, Footer } from "@/components";
import dynamic from "next/dynamic";

const Hero = dynamic(() => import("@/features/home/sections/Hero"));
const AboutSection = dynamic(() => import("@/features/home/sections/AboutSection"));
const RoomsShowcase = dynamic(() => import("@/features/home/sections/RoomsShowcase"));
const DiningSection = dynamic(() => import("@/features/home/sections/DiningSection"));
const Amenities = dynamic(() => import("@/features/home/sections/Amenities"));
const ActivitiesSection = dynamic(() => import("@/features/home/sections/ActivitiesSection"));
const EventsSection = dynamic(() => import("@/features/home/sections/EventsSection"));
const GallerySection = dynamic(() => import("@/features/home/sections/GallerySection"));

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
