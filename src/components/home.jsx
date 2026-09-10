import Banner from "./bannerEB";
// import ServicesForEB from "./servicesForEB";
import Features from "./features";
import AboutEB from "./AboutEB";
import Gallery from "./gallery";
import Services from "./services";
import Testimonials from "./testimonials";
import ContactList from "./contactList";
// import Doctors from "./doctors";
import SEO from "./SEO";
import Modal from "react-bootstrap/Modal";
import ContactForm from "./contactForm";
import { useEffect, useState } from "react";

const Home = () => {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      const formOpened = sessionStorage.getItem("formOpened");

      if (!formOpened) {
        setShowPopup(true);
      }
    }, 30000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      <SEO
        // title="Orthopedic & Trauma Center Bilaspur"
        title="Electrical Brothers - Electrical Services in Bilaspur"
        description="Electrical Brothers - Electrical Services in Bilaspur. Expert electrical installation, maintenance, and repair services."
        ogUrl="https://electric-website-pink.vercel.app/"
        canonical="https://electric-website-pink.vercel.app/"
      />
      <div id="home">
        <Banner />
      </div>
      <div id="servicesForEB">{/* <ServicesForEB /> */}</div>
      <div id="features" className="mt-4">
        <Features />
      </div>
      <div id="about-us">
        <h1 className="text-center fw-bold mt-3">About Us</h1>
        <AboutEB />
      </div>
      <div id="services">
        <Services />
      </div>
      <div id="gallery">
        <Gallery />
      </div>
      <div id="reviews">
        <Testimonials />
      </div>
      <div id="contact">
        <ContactList />
      </div>
      <Modal
        show={showPopup}
        onHide={() => setShowPopup(false)}
        centered
        size="md"
      >
        <Modal.Header closeButton>
          <Modal.Title>Get Your Free Quote</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <ContactForm onSuccess={() => setShowPopup(false)} />
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default Home;
