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

export const RESORT_ADDRESS =
  "Village Dhela, Jim Corbett National Park, Ramnagar, Uttarakhand 244715";

export const NAV_LINKS = [
  { num: "01", label: "Home", href: "/" },
  { num: "02", label: "About", href: "/about" },
  { num: "03", label: "Rooms", href: "/rooms" },
  { num: "04", label: "Dining", href: "/dining" },
  { num: "05", label: "Activities & Recreation", href: "/experience" },
    { num: "06", label: "Facilities", href: "/facilities" },
  { num: "07", label: "Events", href: "/events" },
  { num: "08", label: "Gallery", href: "/gallery" },
  { num: "09", label: "Contact", href: "/contact" },
];

export const AMENITIES = [
  {
    id: 1,
    title: "Rooftop Lounge Facilities",
    description:
      "Unwind by the rooftop pool with scenic views, cozy seating and the perfect ambience to relax and recharge.",
    image: "/assets/images/gallery/swimming-pool-sunset-view.jpeg",
    iconKey: "umbrella",
  },
  {
    id: 2,
    title: "Picnic Area With BBQ Facilities",
    description:
      "Spacious green lawns, perfect for family picnics and BBQ evenings surrounded by nature's beauty.",
    image: "/assets/images/gallery/garden-lawn-exterior-1.jpeg",
    iconKey: "fire",
  },
  {
    id: 3,
    title: "Children's Playground",
    description:
      "Safe and engaging play areas for kids to have fun, explore and create cherished memories.",
    image: "/assets/images/gallery/garden-kids-play-area.jpeg",
    iconKey: "child",
  },
  {
    id: 4,
    title: "Live Music Or Cultural Dance",
    description:
      "Enjoy soulful live music and cultural performances that add rhythm and charm to your evenings.",
    image: "/assets/images/gallery/cottage-exterior-dusk.jpeg",
    iconKey: "music",
  },
];

export const CONTACT_EMAIL = "corbetttreatresorts@gmail.com";

export const WHY_CHOOSE_US_STATS = [
  { label: "Guests Served", value: "5.0k+" },
  { label: "Team Members", value: "50+" },
  { label: "Rooms & Suites", value: "24+" },
  { label: "Customer Satisfaction", value: "99%" },
];

export const GALLERY_IMAGES = [
  {
    src: "/assets/images/gallery/swimming-pool-daytime-view.jpeg",
    alt: "Luxury Swimming Pool Daytime View",
    span: "tall",
  },
  {
    src: "/assets/images/gallery/cottage-exterior-dusk.jpeg",
    alt: "Resort Cottages at Dusk",
    span: "wide",
  },
  {
    src: "/assets/images/gallery/safari-gypsy-parked.jpeg",
    alt: "Jungle Safari Gypsy Parked",
    span: "normal",
  },
  {
    src: "/assets/images/gallery/bedroom-suite-2.jpeg",
    alt: "Premium Bedroom Suite Interior",
    span: "normal",
  },
  {
    src: "/assets/images/gallery/restaurant-interior-1.jpeg",
    alt: "Elegant Restaurant Dining",
    span: "wide",
  },
  {
    src: "/assets/images/gallery/resort-pathway-hedges.jpeg",
    alt: "Lush Green Resort Pathway",
    span: "normal",
  },
];

export const SOCIAL_LINKS = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/corbett_treat_resort/",
    platform: "instagram",
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/corbetttreatresort/",
    platform: "facebook",
  },
  // { label: "Twitter", href: "#", platform: "twitter" },
  {
    label: "Youtube",
    href: "https://www.youtube.com/@CorbettTreatResort",
    platform: "youtube",
  },
];

export const BRAND_DESCRIPTION =
  "Experience the untamed beauty of Jim Corbett National Park while enjoying unmatched luxury, warm hospitality, and unforgettable moments.";

export const ALL_GALLERY_IMAGES = [
  {
    src: "/assets/images/gallery/swimming-pool-daytime-view.jpeg",
    alt: "Luxury Swimming Pool Daytime View",
    category: "pool",
  },
  {
    src: "/assets/images/gallery/swimming-pool-sunset-view.jpeg",
    alt: "Beautiful Sunset Pool View",
    category: "pool",
  },
  {
    src: "/assets/images/gallery/swimming-pool-side-view.jpeg",
    alt: "Relaxing Pool Side View",
    category: "pool",
  },
  {
    src: "/assets/images/gallery/swimming-pool-top-view.jpeg",
    alt: "Aerial Swimming Pool View",
    category: "pool",
  },
  {
    src: "/assets/images/gallery/swimming-pool-view-1.jpeg",
    alt: "Chrystalline Pool Water View",
    category: "pool",
  },
  {
    src: "/assets/images/gallery/swimming-pool-view-2.jpeg",
    alt: "Poolside Lounge Chairs",
    category: "pool",
  },
  {
    src: "/assets/images/gallery/bedroom-suite-1.jpeg",
    alt: "Cozy Bedroom Suite Layout",
    category: "rooms",
  },
  {
    src: "/assets/images/gallery/bedroom-suite-2.jpeg",
    alt: "Premium Suite King Bed",
    category: "rooms",
  },
  {
    src: "/assets/images/gallery/bedroom-suite-3.jpeg",
    alt: "Elegant Room Sitting Area",
    category: "rooms",
  },
  {
    src: "/assets/images/gallery/bedroom-suite-4.jpeg",
    alt: "Executive Suite Modern Decor",
    category: "rooms",
  },
  {
    src: "/assets/images/gallery/bathroom-interior.jpeg",
    alt: "Luxury Modern Bathroom Amenities",
    category: "rooms",
  },
  {
    src: "/assets/images/gallery/cottage-exterior-dusk.jpeg",
    alt: "Resort Cottages At Dusk",
    category: "resort",
  },
  {
    src: "/assets/images/gallery/cottage-exterior-1.jpeg",
    alt: "Cottage Front Porch & Garden",
    category: "resort",
  },
  {
    src: "/assets/images/gallery/cottage-exterior-2.jpeg",
    alt: "Cottage Garden View Walkway",
    category: "resort",
  },
  {
    src: "/assets/images/gallery/cottages-numbered-exterior.jpeg",
    alt: "Premium Family Cottages Outer Look",
    category: "resort",
  },
  {
    src: "/assets/images/gallery/duplex-villa-exterior.jpeg",
    alt: "Luxury Duplex Villa Exterior",
    category: "resort",
  },
  {
    src: "/assets/images/gallery/main-building-exterior.jpeg",
    alt: "Main Resort Reception Building",
    category: "resort",
  },
  {
    src: "/assets/images/gallery/yellow-building-exterior.jpeg",
    alt: "Scenic Resort Building View",
    category: "resort",
  },
  {
    src: "/assets/images/gallery/resort-service-building.jpeg",
    alt: "Resort Service Building Front",
    category: "resort",
  },
  {
    src: "/assets/images/gallery/garden-lawn-exterior-1.jpeg",
    alt: "Vast Green Garden Lawns",
    category: "nature",
  },
  {
    src: "/assets/images/gallery/garden-lawn-exterior-2.jpeg",
    alt: "Beautifully Landscaped Garden Paths",
    category: "nature",
  },
  {
    src: "/assets/images/gallery/garden-sitting-area-1.jpeg",
    alt: "Comfy Garden Seating Spot",
    category: "nature",
  },
  {
    src: "/assets/images/gallery/garden-kids-play-area.jpeg",
    alt: "Safe Kids Play & Activity Zone",
    category: "nature",
  },
  {
    src: "/assets/images/gallery/resort-pathway-hedges.jpeg",
    alt: "Picturesque Hedges Pathway",
    category: "nature",
  },
  {
    src: "/assets/images/gallery/pathway-to-reception.jpeg",
    alt: "Stone Walkway to Reception",
    category: "nature",
  },
  {
    src: "/assets/images/gallery/resort-flora-flowers.jpeg",
    alt: "Gorgeous In-house Garden Flowers",
    category: "nature",
  },
  {
    src: "/assets/images/gallery/mango-tree.jpeg",
    alt: "Majestic Mango Trees in Resort",
    category: "nature",
  },
  {
    src: "/assets/images/gallery/restaurant-interior-1.jpeg",
    alt: "Fine Dining Restaurant Hall",
    category: "dining",
  },
  {
    src: "/assets/images/gallery/restaurant-interior-2.jpeg",
    alt: "Restaurant Warm Lighting Ambience",
    category: "dining",
  },
  {
    src: "/assets/images/gallery/restaurant-dining-table.jpeg",
    alt: "Beautifully Set Dining Table",
    category: "dining",
  },
  {
    src: "/assets/images/gallery/safari-gypsy-parked.jpeg",
    alt: "Adventure Safari Gypsy Ready",
    category: "safari",
  },
  {
    src: "/assets/images/gallery/safari-gypsy-front.jpeg",
    alt: "Classic Safari Jeep Front Profile",
    category: "safari",
  },
  {
    src: "/assets/images/gallery/safari-gypsy-gate.jpeg",
    alt: "Safari Gypsy Entry Gate Point",
    category: "safari",
  },
  {
    src: "/assets/images/gallery/indoor-games-room.jpeg",
    alt: "Recreational Indoor Games Room",
    category: "nature",
  },
  {
    src: "/assets/images/gallery/sports-lawn-volleyball.jpeg",
    alt: "Spacious Outdoor Volleyball Court",
    category: "nature",
  },
  {
    src: "/assets/images/gallery/parking-area-1.jpeg",
    alt: "Spacious Parking Facilities 1",
    category: "resort",
  },
  {
    src: "/assets/images/gallery/parking-area-2.jpeg",
    alt: "Spacious Parking Facilities 2",
    category: "resort",
  },
];

export const UPGRADE_PACKAGES = [
  {
    id: "pack-safari",
    name: "Exclusive 4x4 Private Jeep Safari Booking",

    description:
      "Upgrade to a completely private open-top 4x4 Gypsy with a senior certified naturalist guide, custom-tailored timings, and permit fees pre-cleared for prime Corbett zones.",
    iconName: "Compass",
    type: "per-stay",
  },
  {
    id: "pack-bonfire",
    name: "Private Orchard Candlelight & Bonfire Dinner",

    description:
      "A beautifully isolated table setup inside our mango orchards under fairy lights. Generates romantic ambiance with a personal chef, custom acoustic music, and a warm private bonfire.",
    iconName: "Sparkles",
    type: "per-stay",
  },
  {
    id: "pack-naturalist",
    name: "Personal Naturalist Escort (8 Hours)",

    description:
      "Have a veteran wildlife guide at your disposal for dedicated tracking, mountain bird-potting walks, village exploration history, and private evening wildlife slides/briefings.",
    iconName: "User",
    type: "per-day",
  },
  {
    id: "pack-spa",
    name: "Unlimited Ayurvedic Forest Massage package",
    description:
      "Indulge in absolute wellness with daily 90-minute couples or solo Ayurvedic full-body therapies with choice wild-botanical oils. Includes Private steam bath rituals.",
    iconName: "Gem",
    type: "per-day",
  },
];
