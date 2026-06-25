"use client";

import { Button } from "@/components";
import { 
  RiCompass3Line, 
  RiFireLine, 
  RiMapPinLine, 
  RiRestaurantLine, 
  RiPlantLine, 
  RiEmotionHappyLine, 
  RiWifiLine, 
  RiDropLine, 
  RiCarLine, 
  RiHeartLine, 
  RiSendPlane2Line, 
  RiDiceLine 
} from "react-icons/ri";
import { FaBinoculars, FaSwimmingPool } from "react-icons/fa";

const ICON_MAP: Record<string, React.ReactNode> = {
  safari: <FaBinoculars />,
  pool: <FaSwimmingPool />,
  bonfire: <RiFireLine />,
  village: <RiMapPinLine />,
  trekking: <RiCompass3Line />,
  dining: <RiRestaurantLine />,
  garden: <RiPlantLine />,
  play: <RiEmotionHappyLine />,
  wifi: <RiWifiLine />,
  hotwater: <RiDropLine />,
  parking: <RiCarLine />,
  pet: <RiHeartLine />,
  taxi: <RiSendPlane2Line />,
  games: <RiDiceLine />,
};

const FACILITIES = [
  {
    id: 1,
    title: "Jungle Safari",
    tag: "WILDERNESS",
    description: "Personalized open-jeep reserve tracking with certified naturalists.",
    iconKey: "safari",
  },
  {
    id: 2,
    title: "Swimming Pool",
    tag: "RELAX",
    description: "Crystalline turquoise pool with comfortable bespoke sun loungers.",
    iconKey: "pool",
  },
  {
    id: 3,
    title: "Bonfire Nights",
    tag: "ACOUSTIC",
    description: "Evening acoustic musical gatherings under starry jungle skies.",
    iconKey: "bonfire",
  },
  {
    id: 4,
    title: "Village Excursions",
    tag: "CULTURAL",
    description: "Immersive Kumaoni cultural walks led by community elders.",
    iconKey: "village",
  },
  {
    id: 5,
    title: "Trekking",
    tag: "ADVENTURE",
    description: "Thrilling nature walks through guided Himalayan foothill trails.",
    iconKey: "trekking",
  },
  {
    id: 6,
    title: "In-House Dining",
    tag: "BESPOKE",
    description: "Aromatic multi-cuisine masterworks and authentic local flavors.",
    iconKey: "dining",
  },
  {
    id: 7,
    title: "Children's Play Area",
    tag: "FAMILY",
    description: "Safe, scenic outdoor recreation playground for boutique guests.",
    iconKey: "play",
  },
  {
    id: 8,
    title: "Free WiFi",
    tag: "CONNECTED",
    description: "High-capacity remote-ready satellite internet connectivity.",
    iconKey: "wifi",
  },
  {
    id: 9,
    title: "Hot Water",
    tag: "",
    description: "Seamless 24/7 solar-heated thermal showers.",
    iconKey: "hotwater",
  },
  {
    id: 10,
    title: "Parking",
    tag: "",
    description: "Spacious, secure resort gated parking under round-the-clock patrol.",
    iconKey: "parking",
  },
  {
    id: 11,
    title: "Pet Friendly",
    tag: "",
    description: "Warm hospitality welcoming your beloved four-legged companions.",
    iconKey: "pet",
  },
  {
    id: 12,
    title: "Taxi Assistance",
    tag: "",
    description: "Seamless luxury shuttle bookings and local railway transit.",
    iconKey: "taxi",
  },
  {
    id: 13,
    title: "Indoor Games",
    tag: "",
    description: "Leisure lounge featuring billiards, carrom, board chess, and table tennis.",
    iconKey: "games",
  },
];

export default function FacilitiesClient() {
  const whatsappUrl = `https://wa.me/918057094258?text=${encodeURIComponent("Hello Corbett Treat Resort, I would like to inquire about booking a stay and using your resort facilities.")}`;

  return (
    <div>
      <section className="facilities-list-section">
        <div className="facilities-grid">
          {FACILITIES.map((fac) => (
            <div 
              className="facility-card" 
              key={fac.id}
            >
              <div className="facility-icon-container">
                <span className="facility-icon">
                  {ICON_MAP[fac.iconKey]}
                </span>
              </div>
              <div className="facility-card-body">
                <div className="facility-card-header">
                  <h3 className="facility-card-title">{fac.title}</h3>
                  {fac.tag && (
                    <span className="facility-card-tag">{fac.tag}</span>
                  )}
                </div>
                <p className="facility-card-desc">{fac.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="inquire-btn-container" style={{ textAlign: "center", marginTop: "4rem" }}>
          <Button
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            variant="primary"
            size="large"
          >
            Inquire For Booking
          </Button>
        </div>
      </section>
    </div>
  );
}
