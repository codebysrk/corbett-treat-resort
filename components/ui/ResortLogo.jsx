import Image from "next/image";
import "./ResortLogo.css";

const ResortLogo = () => {
  return (
    <>
      <div className="logo-container">
        <Image
          src="/resort-logo.svg"
          alt="Corbett Treat Resort"
          width={100}
          height={100}
          className="logo-image"
        />

        <span className="logo-title">
          CORBETT
        </span>

        <p className="logo-subtitle">
          TREAT RESORT
        </p>
      </div>
    </>
  );
};

export default ResortLogo;
