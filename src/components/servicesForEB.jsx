import "./servicesForEB.css";
// import { Link } from "react-router-dom";
import {
  FaBolt,
  FaSolarPanel,
  FaHome,
  FaBuilding,
  FaTools,
  FaPlug,
} from "react-icons/fa";
import smartMeter from "../assets/electrical-brothers/smart_electric_meter.webp";

function ServicesForEB() {
  return (
    <section className="servicesEB-section">
      <div className="container">
        <div className="row g-0 servicesEB-wrapper">
          {/* Smart Meter */}
          <div className="col-lg-4">
            <div className="servicesEB-column">
              <h4 className="servicesEB-heading">1. SMART METER SERVICES</h4>

              <div className="servicesEB-flex">
                <div className="servicesEB-iconBox smart">
                  <img
                    src={smartMeter}
                    alt="Smart Electricity Meter"
                    className="servicesEB-meterImage"
                  />
                </div>

                <div>
                  <h5 className="servicesEB-subtitle">
                    Upgrade to Smart Technology
                  </h5>

                  <p className="servicesEB-text">
                    Monitor electricity usage, improve efficiency and enjoy
                    seamless smart meter services.
                  </p>

                  <a href="#services" className="servicesEB-btn">
                    Learn More
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Solar */}
          <div className="col-lg-4">
            <div className="servicesEB-column">
              <h4 className="servicesEB-heading">
                2. SOLAR POWER & PMBY YOJANA
              </h4>

              <div className="servicesEB-flex">
                <div className="servicesEB-iconBox solar">
                  <FaSolarPanel />
                </div>

                <div>
                  <h5 className="servicesEB-subtitle">
                    Go Solar with Government Subsidy
                  </h5>

                  <p className="servicesEB-text">
                    Solar panel installation under PM Surya Ghar Yojana and
                    subsidy schemes.
                  </p>

                  <a href="#solar" className="servicesEB-btn">
                    Check Eligibility
                  </a>
                  {/* <Link to="/solar-eligibility" className="servicesEB-btn">
                    Check Eligibility
                  </Link> */}
                </div>
              </div>
            </div>
          </div>

          {/* Key Services */}
          <div className="col-lg-4">
            <div className="servicesEB-column">
              <h4 className="servicesEB-heading">3. OUR KEY SERVICES</h4>

              <div className="servicesEB-grid">
                <div className="servicesEB-serviceBox">
                  <FaHome />
                  <span>Residential Wiring</span>
                  {/* <small>Learn More</small> */}
                </div>

                <div className="servicesEB-serviceBox">
                  <FaBuilding />
                  <span>Commercial Maintenance</span>
                  {/* <small>Learn More</small> */}
                </div>

                <div className="servicesEB-serviceBox">
                  <FaTools />
                  <span>Fault Repairs</span>
                  {/* <small>Learn More</small> */}
                </div>

                <div className="servicesEB-serviceBox">
                  <FaPlug />
                  <span>Appliance Installation</span>
                  {/* <small>Learn More</small> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ServicesForEB;
