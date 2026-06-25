import { FacilitiesHero } from "@/components";
import FacilitiesClient from "./FacilitiesClient";
import "./facilities-page.css";

export const metadata = {
  title: "Resort Facilities & Amenities | Corbett Treat Resort",
  description:
    "Explore the top facilities at Corbett Treat Resort. Rooftop swimming pool, kids playground, BBQ and picnic areas, live music & cultural programs.",
  alternates: {
    canonical: "/facilities",
  },
};

export default function FacilitiesPage() {
  return (
    <>
      <main className="facilities-page-main">
        <FacilitiesHero />

        <FacilitiesClient />
      </main>

      </>
  );
}
