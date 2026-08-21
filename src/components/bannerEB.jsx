import "./bannerEB.css";
import {
  FaHome,
  FaBolt,
  FaTools,
  FaSolarPanel,
  FaExclamationTriangle,
} from "react-icons/fa";

import { FaPhoneAlt } from "react-icons/fa";
import heroBg from "../assets/electrical-brothers/bermix-studio.webp";

import emergencyImg from "../assets/electrical-brothers/clay.jpg";
import solarImg from "../assets/electrical-brothers/solar.jpg";

import wiring from "../assets/electrical-brothers/wiring.jpg";
import toolbox from "../assets/electrical-brothers/toolbox.jpg";
import smartMeter from "../assets/electrical-brothers/smart_electric_meter.webp";

function BannerEB() {
  return (
    <>
      {/* HERO SECTION */}
      <section
        className="eb-hero"
        style={{
          backgroundImage: `url(${heroBg})`,
        }}
      >
        <div className="eb-overlay"></div>

        <div className="container">
          <div className="eb-hero-grid">
            {/* CARD 1 */}
            <div className="eb-card">
              <h3>NO POWER?</h3>

              <img src={emergencyImg} alt="Emergency Service" />

              <a href="#contact" className="eb-btn">
                <FaPhoneAlt />
                CALL HELP NOW
              </a>
            </div>

            {/* CARD 2 */}
            <div className="eb-card">
              <h3>CHEAP ELECTRICITY?</h3>

              <img src={solarImg} alt="Solar Service" />

              <a href="#solar" className="eb-btn">
                GO SOLAR & SAVE
              </a>
            </div>

            <div className="eb-hero-content">
              <span className="eb-tag">Trusted Electrical Experts</span>

              <h1>
                Reliable Electrical &
                <br />
                Solar Solutions
              </h1>

              <p>
                Professional electrical services for homes, businesses, and
                industries. From emergency repairs and smart meter installation
                to complete solar solutions, we deliver safe, efficient, and
                affordable results.
              </p>

              <a href="#contact" className="eb-hero-btn">
                Get Free Quote
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section className="eb-services-section">
        <div className="container">
          <div className="eb-services-grid">
            <a href="#services" className="eb-service-card">
              <img src={wiring} alt="New Wiring" />
              <h4>NEW WIRING</h4>
            </a>

            <a href="#services" className="eb-service-card">
              <img src={smartMeter} alt="Smart Meter" />
              <h4>SMART METER</h4>
            </a>

            <a href="#services" className="eb-service-card">
              <img src={toolbox} alt="General Repair" />
              <h4>GENERAL REPAIR</h4>
            </a>

            <div className="eb-key-services">
              <div className="eb-key-top">
                <h4>OUR KEY SERVICES</h4>

                <div className="service-links">
                  <a href="#wiring">
                    <FaHome />
                    <span>Residential Wiring</span>
                  </a>

                  <a href="#meter">
                    <FaBolt />
                    <span>Smart Meter</span>
                  </a>

                  <a href="#repair">
                    <FaTools />
                    <span>Other Repairs</span>
                  </a>
                </div>
              </div>

              <div className="eb-key-bottom">
                <a href="#emergency">
                  <FaExclamationTriangle />
                  <span>Emergency</span>
                </a>

                <a href="#solar">
                  <FaSolarPanel />
                  <span>Go Solar</span>
                </a>

                <a href="#meter">
                  <FaBolt />
                  <span>Smart Meter</span>
                </a>

                <a href="#repair">
                  <FaTools />
                  <span>Repairs</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default BannerEB;
