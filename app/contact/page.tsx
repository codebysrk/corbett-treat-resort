import { ContactHero, ContactInfoStrip, ContactMapSocial } from "@/components";
import {
  RiInstagramLine,
  RiFacebookCircleLine,
  RiYoutubeLine,
} from "react-icons/ri";
import { CONTACT_PHONES, RESORT_ADDRESS, CONTACT_EMAIL, SOCIAL_LINKS } from "@/constants";
import "./contact-page.css";

export const metadata = {
  title: "Contact Us | Corbett Treat Resort",
  description:
    "Get in touch with Corbett Treat Resort. Book your stay, inquire about destination weddings, corporate events, or forest safaris in Jim Corbett.",
  alternates: {
    canonical: "/contact",
  },
};

export default function ContactPage() {
  const socialIconMap: Record<string, any> = {
    instagram: RiInstagramLine,
    facebook: RiFacebookCircleLine,
    youtube: RiYoutubeLine,
  };

  return (
    <>
      <main className="cp-main">
        <ContactHero />
        <ContactInfoStrip
          resortAddress={RESORT_ADDRESS}
          contactPhones={CONTACT_PHONES}
          contactEmail={CONTACT_EMAIL}
        />
        <ContactMapSocial
          socialLinks={SOCIAL_LINKS}
          socialIconMap={socialIconMap}
        />
      </main>

      </>
  );
}
