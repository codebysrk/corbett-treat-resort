import { DiningHero, DiningContent } from "@/components";
import "./dining-page.css";

export const metadata = {
  title: "Dining | Corbett Treat Resort",
  description:
    "Savor fine Kumaoni & Global flavors at the In-House Restaurant of Corbett Treat Resort. Traditional pahadi delicacies, live tandoor and scenic views.",
  alternates: {
    canonical: "/dining",
  },
};

export default function DiningPage() {
  const whatsappUrl = `https://wa.me/918057094258?text=${encodeURIComponent("Hello Corbett Treat Resort, I would like to inquire about booking/reservations for the In-House Restaurant.")}`;

  return (
    <>
      <main className="dining-page-main">
        <DiningHero />
        <DiningContent whatsappUrl={whatsappUrl} />
      </main>

      </>
  );
}
