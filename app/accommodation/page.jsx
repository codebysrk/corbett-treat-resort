import ClientShell from "@/components/ClientShell";
import { AccommodationHero, RoomGrid, Footer } from "@/components";

export const metadata = {
  title: "Rooms & Suites | Corbett Treat Resort",
  description: "Explore our premium selection of Deluxe Rooms, Premium Rooms, and Family Rooms at Corbett Treat Resort.",
};

export default function AccommodationPage() {
  return (
    <>
      <ClientShell />

      <main className="accommodation-page-main" style={{ minHeight: "100vh" }}>
        <AccommodationHero />
        <RoomGrid />
      </main>

      <Footer />
    </>
  );
}
