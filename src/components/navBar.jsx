import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useState, useEffect } from "react";
import { Dropdown } from "react-bootstrap";
import { FaPhoneAlt, FaWhatsapp } from "react-icons/fa";
import "./navBar.css";
// import logo from "../assets/llogoo.webp";
import logo from "../assets/electric_logo.png";
import { NavLink, useLocation } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

function NavBar() {
  const [expanded, setExpanded] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const location = useLocation();

  const phoneNumber1 = import.meta.env.VITE_PHONE_NUMBER;
  // const phoneNumber2 = import.meta.env.VITE_PHONE_NUMBER_2;

  // Close navbar after click
  const closeNavbar = () => setExpanded(false);

  useEffect(() => {
    if (location.pathname !== "/") return;

    // const handleScroll = () => {
    //   const sections = document.querySelectorAll(
    //     "#home, #about-us, #services, #gallery, #reviews, #contact",
    //   );

    //   let current = "home";

    //   sections.forEach((section) => {
    //     const rect = section.getBoundingClientRect();

    //     if (rect.top <= 120) {
    //       current = section.id;
    //     }
    //   });

    //   setActiveSection(current);
    // };

    const handleScroll = () => {
      const sections = document.querySelectorAll(
        "#home, #about-us, #services, #gallery, #reviews, #contact",
      );

      const scrollPosition = window.innerHeight + window.scrollY;

      const pageHeight = document.documentElement.scrollHeight;

      // User reached bottom of page
      if (scrollPosition >= pageHeight - 50) {
        setActiveSection("contact");
        return;
      }

      let current = "home";

      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();

        if (rect.top <= 120) {
          current = section.id;
        }
      });

      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [location.pathname]);

  return (
    <>
      <Navbar
        bg="light"
        expand="lg"
        expanded={expanded}
        sticky="top"
        className="py-2 shadow-sm"
      >
        <Container fluid className="px-3 px-lg-5">
          {/* Logo */}
          <Navbar.Brand as={HashLink} smooth to="/#home" onClick={closeNavbar}>
            <img src={logo} alt="Electrical Brothers" />
          </Navbar.Brand>

          {/* Toggle */}
          <Navbar.Toggle
            aria-controls="basic-navbar-nav"
            onClick={() => setExpanded(expanded ? false : true)}
          />

          <Navbar.Collapse id="basic-navbar-nav">
            {/* Links */}
            <Nav className="mx-auto nav-mobile">
              <Nav.Link
                as={HashLink}
                smooth
                to="/#home"
                className={
                  location.pathname === "/" && activeSection === "home"
                    ? "active"
                    : ""
                }
                onClick={closeNavbar}
              >
                Home
              </Nav.Link>

              <Nav.Link
                as={HashLink}
                smooth
                to="/#about-us"
                className={
                  location.pathname === "/" && activeSection === "about-us"
                    ? "active"
                    : ""
                }
                onClick={closeNavbar}
              >
                About Us
              </Nav.Link>

              <Nav.Link
                as={HashLink}
                smooth
                to="/#services"
                className={
                  location.pathname === "/" && activeSection === "services"
                    ? "active"
                    : ""
                }
                onClick={closeNavbar}
              >
                Services
              </Nav.Link>

              <Nav.Link
                as={HashLink}
                smooth
                to="/#gallery"
                className={
                  location.pathname === "/" && activeSection === "gallery"
                    ? "active"
                    : ""
                }
                onClick={closeNavbar}
              >
                Gallery
              </Nav.Link>

              <Nav.Link
                as={HashLink}
                smooth
                to="/#reviews"
                className={
                  location.pathname === "/" && activeSection === "reviews"
                    ? "active"
                    : ""
                }
                onClick={closeNavbar}
              >
                Reviews
              </Nav.Link>

              <Nav.Link
                as={HashLink}
                smooth
                to="/#contact"
                className={
                  location.pathname === "/" && activeSection === "contact"
                    ? "active"
                    : ""
                }
                onClick={closeNavbar}
              >
                Contact Us
              </Nav.Link>

              {/* <Nav.Link as={NavLink} to="/patholab" onClick={closeNavbar}>
                Pathology Lab
              </Nav.Link> */}

              <Nav.Link
                as={NavLink}
                to="/solar-eligibility"
                onClick={closeNavbar}
              >
                Solar Eligibility
              </Nav.Link>
            </Nav>

            {/* Right Side */}
            <div className="d-flex gap-2 nav-btn-group">
              {/* WhatsApp Button */}
              <a
                href={`https://wa.me/${phoneNumber1}`}
                target="_blank"
                rel="noopener noreferrer"
                className="whatsapp-icon"
                aria-label="WhatsApp"
              >
                <FaWhatsapp className="me-2" />
              </a>

              <Dropdown className="call-dropdown">
                <Dropdown.Toggle className="call-btn no-arrow">
                  <FaPhoneAlt className="me-2" />
                  Call Now
                </Dropdown.Toggle>

                <Dropdown.Menu align="end">
                  <Dropdown.Item href={`tel:${phoneNumber1}`}>
                    <FaPhoneAlt
                      style={{ color: "green", marginRight: "8px" }}
                    />
                    {phoneNumber1}
                  </Dropdown.Item>

                  {/* <Dropdown.Item href={`tel:${phoneNumber2}`}>
                    <FaPhoneAlt
                      style={{ color: "green", marginRight: "8px" }}
                    />
                    {phoneNumber2}
                  </Dropdown.Item> */}
                </Dropdown.Menu>
              </Dropdown>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar;
