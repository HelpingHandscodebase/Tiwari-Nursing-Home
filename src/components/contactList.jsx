import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import { useState } from "react";
import ContactForm from "./contactForm";

function ContactList() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div
      className="contact-card"
      style={{
        backgroundColor: "#eef2f6",
        padding: "20px 0",
        paddingBottom: "45px",
        marginBottom: "0",
      }}
    >
      <Container className="pb-0 mb-0">
        {/* Heading */}
        <h2 className="text-center fw-bold mb-4">Contact Us</h2>

        <Row className="g-4 justify-content-center">
          {/* Address Card */}
          <Col md={6}>
            {/* <div
              style={{
                background:
                  "linear-gradient(to bottom, #ECF2FE 0%, #FFFFFF 40%, #FFFFFF 60%, #ECF2FE 100%)",
                padding: "20px",
                borderRadius: "10px",
                boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
                height: "100%",
                marginBottom: "0",
              }}
            > */}
            <div
              style={{
                background: "#fff",
                padding: "20px",
                borderRadius: "10px",
                boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
                height: "100%",
                marginBottom: "0",
              }}
            >
              <p className="mb-1">
                <strong>Address:</strong>
              </p>
              <p className="mb-0" style={{ fontSize: "14px" }}>
                ELECTRICAL BROTHERS GROUP, NEAR PATWARI, PRASHIKSRAN KENDRA,
                SURYA CHOWK LINGIYADIH, BILASPUR 495006, CHHATTISGARH.
              </p>
            </div>
          </Col>

          {/* Mobile Number Card */}
          <Col md={6}>
            {/* <div
              style={{
                background:
                  "linear-gradient(to bottom, #ECF2FE 0%, #FFFFFF 40%, #FFFFFF 60%, #ECF2FE 100%)",
                padding: "20px",
                borderRadius: "10px",
                boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
                height: "100%",
                marginBottom: "0",
              }}
            > */}
            <div
              style={{
                background: "#fff",
                padding: "20px",
                borderRadius: "10px",
                boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
                height: "100%",
                marginBottom: "0",
              }}
            >
              {/* <p className="mb-1">
                <strong>Mobile Number:</strong>
              </p>
              <p className="text-muted mb-0" style={{ fontSize: "14px" }}>
                8959164260 <br />
                sandeepvastrakar14@gmail.com
              </p> */}
              <p className="mb-2 d-flex align-items-center">
                <FaPhoneAlt className="me-2 text-primary" />
                <a
                  href="tel:8959164260"
                  className="text-decoration-none text-dark"
                >
                  8959164260
                </a>
              </p>

              <p className="mb-2 d-flex align-items-center">
                <FaEnvelope className="me-2 text-primary" />
                <a
                  href="mailto:electricalbrothersgroup@gmail.com"
                  className="text-decoration-none text-dark"
                >
                  electricalbrothersgroup@gmail.com
                </a>
              </p>

              {/* <p className="mb-0 d-flex align-items-center">
                <FaWhatsapp className="me-2 text-success" />
                <a
                  href="https://wa.me/918959164260"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-decoration-none text-dark"
                >
                  8959164260
                </a>
              </p> */}
              <p className="mb-0">
                <Button variant="primary" onClick={handleShow}>
                  Book Service
                </Button>
              </p>
            </div>
          </Col>
        </Row>
      </Container>

      <Modal show={show} onHide={handleClose} centered size="md">
        <Modal.Header closeButton>
          <Modal.Title>Book Your Service</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <ContactForm onSuccess={handleClose} />
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default ContactList;
