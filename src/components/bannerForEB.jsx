import "./bannerForEB.css";
import ContactForm from "./contactForm";

import {
  FaHome,
  FaBolt,
  FaSolarPanel,
  FaTools,
} from "react-icons/fa";

import heroBg from "../assets/electrical-brothers/bermix-studio.webp";

function BannerForEB() {
  return (
    <section
      className="hero-banner"
      style={{
        backgroundImage: `url(${heroBg})`,
      }}
    >
      <div className="hero-overlay"></div>

      <div className="container hero-inner">
        <div className="row align-items-center">

          {/* Left Services */}
          <div className="col-lg-3 col-md-12">
            <div className="service-box">

              <h3>
                Your Trusted
                <br />
                Electrical &
                <br />
                Solar Solutions
              </h3>

              <ul className="hero-services">
                <li>
                  <FaHome />
                  Residential Wiring
                </li>

                <li>
                  <FaBolt />
                  Electrical General
                </li>

                <li>
                  <FaBolt />
                  Smart Meter Installation
                </li>

                <li>
                  <FaSolarPanel />
                  Solar Solutions
                </li>

                <li>
                  <FaTools />
                  Emergency Callout
                </li>
              </ul>

            </div>
          </div>

          {/* Center Content */}
          <div className="col-lg-6 col-md-12">
            <div className="hero-content">

              <h1 className="hero-title">
                Reliable Electrical
                Services &
                Solar Solutions
              </h1>

              <p className="hero-subtitle">
                Prompt, Professional and Safe Electrical
                Support for Homes, Businesses and
                Industries. Available When You Need Us.
              </p>

              <div className="hero-buttons">

                <a
                  href="#services"
                  className="btn explore-btn"
                >
                  Explore Services
                </a>

                <a
                  href="#contact"
                  className="btn quote-btn"
                >
                  Request Free Quote
                </a>

              </div>

            </div>
          </div>

          {/* Right Form */}
          <div className="col-lg-3 col-md-12">
            <div className="hero-form-card">

              <h4>Quick Inquiry Form</h4>

              <ContactForm />

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default BannerForEB;