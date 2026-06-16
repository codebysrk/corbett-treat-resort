import ClientShell from "@/components/ClientShell";
import { GalleryGrid, Footer } from "@/components";
import "./gallery-page.css";

export const metadata = {
  title: "Photo Gallery | Corbett Treat Resort",
  description: "Browse beautiful photos of rooms, suites, swimming pool, dining and jungle safari at Corbett Treat Resort, Ramnagar.",
};

export default function GalleryPage() {
  return (
    <>
      <ClientShell />

      <main className="gallery-page-main">
        <section className="gallery-hero-header">
          <div className="gallery-hero-container">
            <h1 className="gallery-hero-title">Gallery</h1>
          </div>
        </section>

        <section className="gallery-grid-section">
          <GalleryGrid />
        </section>
      </main>

      <Footer />
    </>
  );
}
