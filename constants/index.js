// =============================================================================
// CONSTANTS — Corbett Treat Resort
// Saari hardcoded values yahan centralize ki gayi hain.
// Naye numbers ya links yahan update karo, changes automatically poore app mein
// reflect ho jaayenge.
// =============================================================================

// --- Contact Information ---
export const CONTACT_PHONES = [
  { label: "+91 80570 94258", href: "tel:+918057094258" },
  { label: "+91 98189 22066", href: "tel:+919818922066" },
];

export const WHATSAPP = {
  number: "918057094258",
  presetMessage:
    "Hello Corbett Treat Resort, I would like to inquire about booking/reservations.",
};

export const BOOK_NOW_URL = `https://wa.me/${WHATSAPP.number}?text=${encodeURIComponent(WHATSAPP.presetMessage)}`;

// --- Address ---
export const RESORT_ADDRESS =
  "Village Dhela, Jim Corbett National Park, Ramnagar, Uttarakhand 244715";

// --- Navigation Links ---
export const NAV_LINKS = [
  { num: "01", label: "Home", href: "#home" },
  { num: "02", label: "About", href: "#about" },
  { num: "03", label: "Accommodation", href: "#accommodation" },
  { num: "04", label: "Dining", href: "#dining" },
  { num: "05", label: "Experience", href: "#experience" },
  { num: "06", label: "Wedding", href: "#wedding" },
  { num: "07", label: "Meeting & Event", href: "#meeting" },
  { num: "08", label: "Gallery", href: "#gallery" },
  { num: "09", label: "Blog", href: "#blog" },
  { num: "10", label: "Contact", href: "#contact" },
];

// --- Amenities Data (icon references as strings, resolved in component) ---
export const AMENITIES = [
  {
    id: 1,
    title: "Rooftop Lounge Facilities",
    description:
      "Unwind by the rooftop pool with scenic views, cozy seating and the perfect ambience to relax and recharge.",
    image: "/assets/images/swimming-pool-sunset-view.jpeg",
    iconKey: "umbrella",
  },
  {
    id: 2,
    title: "Picnic Area With BBQ Facilities",
    description:
      "Spacious green lawns, perfect for family picnics and BBQ evenings surrounded by nature's beauty.",
    image: "/assets/images/garden-lawn-exterior-1.jpeg",
    iconKey: "fire",
  },
  {
    id: 3,
    title: "Children's Playground",
    description:
      "Safe and engaging play areas for kids to have fun, explore and create cherished memories.",
    image: "/assets/images/garden-kids-play-area.jpeg",
    iconKey: "child",
  },
  {
    id: 4,
    title: "Live Music Or Cultural Dance",
    description:
      "Enjoy soulful live music and cultural performances that add rhythm and charm to your evenings.",
    image: "/assets/images/cottage-exterior-dusk.jpeg",
    iconKey: "music",
  },
];

// --- Email Address ---
export const CONTACT_EMAIL = "corbetttreatresorts@gmail.com";

// --- Stats Data (Why Choose Us) ---
export const WHY_CHOOSE_US_STATS = [
  { label: "Guests Served", value: "5.0k+" },
  { label: "Team Members", value: "50+" },
  { label: "Rooms & Suites", value: "24+" },
  { label: "Customer Satisfaction", value: "99%" },
];

// --- Gallery Images ---
export const GALLERY_IMAGES = [
  {
    src: "/assets/images/swimming-pool-daytime-view.jpeg",
    alt: "Luxury Swimming Pool Daytime View",
    span: "tall",
  },
  {
    src: "/assets/images/cottage-exterior-dusk.jpeg",
    alt: "Resort Cottages at Dusk",
    span: "wide",
  },
  {
    src: "/assets/images/safari-gypsy-parked.jpeg",
    alt: "Jungle Safari Gypsy Parked",
    span: "normal",
  },
  {
    src: "/assets/images/bedroom-suite-2.jpeg",
    alt: "Premium Bedroom Suite Interior",
    span: "normal",
  },
  {
    src: "/assets/images/restaurant-interior-1.jpeg",
    alt: "Elegant Restaurant Dining",
    span: "wide",
  },
  {
    src: "/assets/images/resort-pathway-hedges.jpeg",
    alt: "Lush Green Resort Pathway",
    span: "normal",
  },
];

// --- Social Links ---
export const SOCIAL_LINKS = [
  { label: "Instagram", href: "#", platform: "instagram" },
  { label: "Facebook", href: "#", platform: "facebook" },
  { label: "Twitter", href: "#", platform: "twitter" },
];

// --- Brand Info ---
export const BRAND_DESCRIPTION =
  "Experience the untamed beauty of Jim Corbett National Park while enjoying unmatched luxury, warm hospitality, and unforgettable moments.";
