import ClientShell from "@/components/ClientShell";
import { 
  Hero, 
  AboutSection, 
  RoomsShowcase, 
  DiningSection, 
  Amenities,
  ActivitiesSection, 
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
        {/* <DiningSection /> */}
        <Amenities />
        {/* <ActivitiesSection /> */}
        <GallerySection />
        {/* <PlacesToVisit /> */}
      </main>

      <Footer />
    </>
  );
}
