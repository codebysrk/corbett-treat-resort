import { Cormorant_Garamond, Poppins, Playfair_Display } from "next/font/google";
import SmoothScroll from "@/components/shared/SmoothScroll/SmoothScroll";
import { ClientShell, Footer } from "@/components";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

export const metadata = {
  metadataBase: new URL("https://corbetttreatresort.com"),
  title: "Luxury Resort in Jim Corbett | Corbett Treat Resort",
  description:
    "Corbett Treat Resort is a luxury resort in Jim Corbett National Park. Perfect for destination weddings, events, jungle safaries and budget stay in Ramnagar.",
  alternates: {
    canonical: "./",
  },
  openGraph: {
    title: "Luxury Resort in Jim Corbett | Corbett Treat Resort",
    description:
      "Corbett Treat Resort is a luxury resort in Jim Corbett National Park. Perfect for destination weddings, events, jungle safaries and budget stay in Ramnagar.",
    url: "https://corbetttreatresort.com",
    siteName: "Corbett Treat Resort",
    images: [
      {
        url: "/assets/images/resort-logo.png",
        width: 800,
        height: 600,
        alt: "Corbett Treat Resort Logo",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Luxury Resort in Jim Corbett | Corbett Treat Resort",
    description:
      "Experience the ultimate luxury retreat at Corbett Treat Resort. Book your stay today!",
    images: ["/assets/images/resort-logo.png"],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${poppins.variable} ${playfair.variable}`}
      data-scroll-behavior="smooth"
    >
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Resort",
              "name": "Corbett Treat Resort",
              "image": "https://corbetttreatresort.com/assets/images/resort-logo.png",
              "@id": "https://corbetttreatresort.com/#resort",
              "url": "https://corbetttreatresort.com",
              "telephone": "+918057094258",
              "priceRange": "$$",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Village Dhela, Jim Corbett National Park, Ramnagar",
                "addressLocality": "Ramnagar",
                "addressRegion": "Uttarakhand",
                "postalCode": "244715",
                "addressCountry": "IN"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 29.4066404,
                "longitude": 79.0045796
              },
              "openingHoursSpecification": {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": [
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday",
                  "Saturday",
                  "Sunday"
                ],
                "opens": "00:00",
                "closes": "23:59"
              },
              "sameAs": [
                "https://www.facebook.com/corbetttreatresort/",
                "https://www.instagram.com/corbett_treat_resort/",
                "https://www.youtube.com/@CorbettTreatResort"
              ]
            })
          }}
        />
        <SmoothScroll>
          <ClientShell />
          {children}
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
