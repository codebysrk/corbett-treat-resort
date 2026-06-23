
import { ClientShell, Footer } from "@/components";
import dynamic from "next/dynamic";

const Hero = dynamic(() => import("@/components").then((mod) => mod.Hero));
const AboutSection = dynamic(() => import("@/components").then((mod) => mod.AboutSection));
const RoomsShowcase = dynamic(() => import("@/components").then((mod) => mod.RoomsShowcase));
const DiningSection = dynamic(() => import("@/components").then((mod) => mod.DiningSection));
const Amenities = dynamic(() => import("@/components").then((mod) => mod.Amenities));
const ActivitiesSection = dynamic(() => import("@/components").then((mod) => mod.ActivitiesSection));
const EventsSection = dynamic(() => import("@/components").then((mod) => mod.EventsSection));
const GallerySection = dynamic(() => import("@/components").then((mod) => mod.GallerySection));

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
