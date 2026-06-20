import { 
  ClientShell,
  Hero, 
  AboutSection, 
  RoomsShowcase, 
  DiningSection, 
  Amenities,
  ActivitiesSection, 
  GallerySection, 
  PlacesToVisit,
  ContactSection,
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
        {/* <DiningSection /> */}
        <Amenities />
        <ActivitiesSection />
        <GallerySection />
        {/* <PlacesToVisit /> */}
        <ContactSection />
      </main>

      <Footer />
    </>
  );
}
