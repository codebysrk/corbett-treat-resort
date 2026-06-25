import { RiMapPinLine, RiArrowRightUpLine } from "react-icons/ri";

interface SocialLink {
  platform: string;
  href: string;
  label: string;
}

interface ContactMapSocialProps {
  socialLinks: SocialLink[];
  socialIconMap: Record<string, any>;
}

export default function ContactMapSocial({
  socialLinks,
  socialIconMap,
}: ContactMapSocialProps) {
  return (
    <section className="cp-map-social-section">
      <div className="cp-map-social-inner">
        {/* Social CTA */}
        <div className="cp-social-panel">
          <span className="cp-social-eyebrow">Stay Connected</span>
          <h2 className="cp-social-heading">Follow Us on Social Media</h2>
          <p className="cp-social-desc">
            Stay updated with latest events, offers &amp; behind-the-scenes
            moments from Corbett Treat Resort.
          </p>

          <div className="cp-social-links">
            {socialLinks.map((link) => {
              const Icon = socialIconMap[link.platform];
              return (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cp-social-link-card"
                >
                  <div className="cp-social-link-icon">
                    {Icon && <Icon />}
                  </div>
                  <span className="cp-social-link-label">{link.label}</span>
                  <RiArrowRightUpLine className="cp-social-link-arrow" />
                </a>
              );
            })}
          </div>
        </div>

        {/* Google Map */}
        <div className="cp-map-panel">
          <div className="cp-map-frame">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3455.518883204992!2d79.03541817547167!3d29.356269975231735!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390a7b4588e3a241%3A0x6440b8a2113337ab!2sCorbett%20Treat%20Resort!5e0!3m2!1sen!2sin!4v1718600000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Corbett Treat Resort Location Map"
            />
          </div>
          {/* Location Chip */}
          <div className="cp-map-chip">
            <RiMapPinLine className="cp-map-chip-icon" />
            <div>
              <p className="cp-map-chip-title">Corbett Treat Resort</p>
              <p className="cp-map-chip-addr">
                Village Dhela, Jim Corbett National Park, Ramnagar,
                Uttarakhand 244715
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
