import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useState } from "react";
import { Dropdown } from "react-bootstrap";
import { FaPhoneAlt } from "react-icons/fa";
import "./navBar.css";
import logo from "../assets/llogoo.webp";
import { Link, NavLink } from "react-router-dom";

function NavBar() {
  const [expanded, setExpanded] = useState(false);

  const phoneNumber1 = import.meta.env.VITE_PHONE_NUMBER;
  const phoneNumber2 = import.meta.env.VITE_PHONE_NUMBER_2;

  // Close navbar after click
  const closeNavbar = () => setExpanded(false);

  return (
    <>
      <Navbar
        bg="light"
        expand="lg"
        expanded={expanded}
        className="py-2 shadow-sm"
      >
        <Container fluid className="px-3 px-lg-5">
          {/* Logo */}
          <Navbar.Brand as={Link} to="/#home" onClick={closeNavbar}>
            <img src={logo} alt="Tiwari Nursing Home" />
          </Navbar.Brand>

          {/* Toggle */}
          <Navbar.Toggle
            aria-controls="basic-navbar-nav"
            onClick={() => setExpanded(expanded ? false : true)}
          />

          <Navbar.Collapse id="basic-navbar-nav">
            {/* Links */}
            <Nav className="mx-auto nav-mobile">
              <Nav.Link as={NavLink} to="/#home" onClick={closeNavbar}>
                Home
              </Nav.Link>

              <Nav.Link as={NavLink} to="/#meet-doctors" onClick={closeNavbar}>
                Meet Doctors
              </Nav.Link>

              <Nav.Link as={NavLink} to="/#services" onClick={closeNavbar}>
                Services
              </Nav.Link>

              <Nav.Link as={NavLink} to="/#gallery" onClick={closeNavbar}>
                Gallery
              </Nav.Link>

              <Nav.Link as={NavLink} to="/#reviews" onClick={closeNavbar}>
                Reviews
              </Nav.Link>

              <Nav.Link as={NavLink} to="/#contact" onClick={closeNavbar}>
                Contact
              </Nav.Link>

              <Nav.Link as={NavLink} to="/patholab" onClick={closeNavbar}>
                Pathology Lab
              </Nav.Link>
            </Nav>

            {/* Right Side */}
            <div className="d-flex gap-2 nav-btn-group">
              <Dropdown>
                <Dropdown.Toggle className="call-btn no-arrow">
                  <FaPhoneAlt className="me-2" />
                  Call Doctor
                </Dropdown.Toggle>

                <Dropdown.Menu align="end">
                  <Dropdown.Item href={`tel:${phoneNumber1}`}>
                    <FaPhoneAlt
                      style={{ color: "green", marginRight: "8px" }}
                    />
                    {phoneNumber1}
                  </Dropdown.Item>

                  <Dropdown.Item href={`tel:${phoneNumber2}`}>
                    <FaPhoneAlt
                      style={{ color: "green", marginRight: "8px" }}
                    />
                    {phoneNumber2}
                  </Dropdown.Item>
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
