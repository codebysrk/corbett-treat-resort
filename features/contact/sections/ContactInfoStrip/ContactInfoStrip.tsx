import { RiMapPinLine, RiPhoneLine, RiMailLine, RiTimeLine } from "react-icons/ri";

interface PhoneLink {
  href: string;
  label: string;
}

interface ContactInfoStripProps {
  resortAddress: string;
  contactPhones: PhoneLink[];
  contactEmail: string;
}

export default function ContactInfoStrip({
  resortAddress,
  contactPhones,
  contactEmail,
}: ContactInfoStripProps) {
  return (
    <section className="cp-info-strip">
      <div className="cp-info-strip-inner">
        <div className="cp-info-card">
          <div className="cp-info-icon-wrap">
            <RiMapPinLine />
          </div>
          <div>
            <h3 className="cp-info-label">Our Location</h3>
            <p className="cp-info-value">{resortAddress}</p>
          </div>
        </div>

        <div className="cp-info-divider" />

        <div className="cp-info-card">
          <div className="cp-info-icon-wrap">
            <RiPhoneLine />
          </div>
          <div>
            <h3 className="cp-info-label">Call Us</h3>
            {contactPhones.map((p, i) => (
              <a key={i} href={p.href} className="cp-info-value cp-info-link">
                {p.label}
              </a>
            ))}
          </div>
        </div>

        <div className="cp-info-divider" />

        <div className="cp-info-card">
          <div className="cp-info-icon-wrap">
            <RiMailLine />
          </div>
          <div>
            <h3 className="cp-info-label">Email Us</h3>
            <a href={`mailto:${contactEmail}`} className="cp-info-value cp-info-link">
              {contactEmail}
            </a>
          </div>
        </div>

        <div className="cp-info-divider" />

        <div className="cp-info-card">
          <div className="cp-info-icon-wrap">
            <RiTimeLine />
          </div>
          <div>
            <h3 className="cp-info-label">Front Desk</h3>
            <p className="cp-info-value">24 / 7 Available</p>
          </div>
        </div>
      </div>
    </section>
  );
}
