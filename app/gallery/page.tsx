import { ClientShell, GalleryGrid, Footer, GalleryHero } from "@/components";
import "./gallery-page.css";

export const metadata = {
  title: "Photo Gallery | Corbett Treat Resort",
  description: "Browse beautiful photos of rooms, suites, swimming pool, dining and jungle safari at Corbett Treat Resort, Ramnagar.",
  alternates: {
    canonical: "/gallery",
  },
};

export default function GalleryPage() {
  return (
    <>
      <ClientShell />

      <main className="gallery-page-main">
        <GalleryHero />

        <section className="gallery-grid-section">
          <GalleryGrid />
        </section>
      </main>

      <Footer />
    </>
  );
}
