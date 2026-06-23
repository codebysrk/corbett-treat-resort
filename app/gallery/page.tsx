import { ClientShell, GalleryGrid, Footer } from "@/components";
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
        <section className="gallery-hero-header">
          <div className="gallery-hero-container">
            <span className="gallery-hero-subtitle">VISUAL JOURNEY</span>
            <h1 className="gallery-hero-title">Our Gallery</h1>
            <div className="gallery-hero-divider">
              <span className="divider-line"></span>
              <span className="divider-icon">✿</span>
              <span className="divider-line"></span>
            </div>
            <p className="gallery-hero-desc">
              Explore the captivating beauty of our resort, standard accommodations, wild safaris, and fine dining experiences in the heart of Corbett.
            </p>
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
