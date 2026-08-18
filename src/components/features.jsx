import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {
  FaUserShield,
  FaShieldAlt,
  FaBolt,
  FaHome,
  FaTools,
  FaLightbulb,
  FaPhoneAlt,
  FaRupeeSign,
} from "react-icons/fa";
// import "./features.css"

function Features() {
  const features = [
  {
    icon: <FaUserShield size={28} />,
    title: "Certified Electricians",
    desc: "Experienced professionals delivering safe and reliable electrical solutions.",
  },
  {
    icon: <FaShieldAlt size={28} />,
    title: "Safety First",
    desc: "Following strict safety standards in every installation and repair.",
  },
  {
    icon: <FaBolt size={28} />,
    title: "Fast Response",
    desc: "Quick inspections and timely completion of every project.",
  },
  {
    icon: <FaHome size={28} />,
    title: "Residential & Commercial",
    desc: "Complete electrical services for homes, offices, and businesses.",
  },
  {
    icon: <FaTools size={28} />,
    title: "Repair & Maintenance",
    desc: "Professional troubleshooting and preventive maintenance services.",
  },
  {
    icon: <FaLightbulb size={28} />,
    title: "Quality Products",
    desc: "Using genuine electrical components from trusted brands.",
  },
  {
    icon: <FaPhoneAlt size={28} />,
    title: "Customer Support",
    desc: "Friendly support to answer your questions and service requests.",
  },
  {
    icon: <FaRupeeSign size={28} />,
    title: "Affordable Pricing",
    desc: "Transparent quotations with competitive pricing and no hidden charges.",
  },
];

  return (
    <div style={{ backgroundColor: "#eef2f6", padding: "20px 0", paddingBottom: "20px", marginBottom: "0" }}>
      <Container className="pb-0 mb-0">
        <h1 className="text-center fw-bold my-2">Our Features</h1>
        <Row className="gx-4 gy-3 mb-0 mt-2">
          {features.map((item, index) => (
            <Col key={index} md={6} lg={3}>
              <div
                style={{
                  background: "#fff",
                  borderRadius: "10px",
                  padding: "18px",
                  display: "flex",
                  alignItems: "center",
                  gap: "15px",
                  boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
                  height: "100%",
                }}
              >
                {/* Icon Circle */}
                <div
                  style={{
                    backgroundColor: "#4c8fb5",
                    color: "#fff",
                    borderRadius: "50%",
                    width: "60px",
                    height: "60px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  {item.icon}
                </div>

                {/* Text */}
                <div>
                  <h5 className="fw-bold mb-1">{item.title}</h5>
                  <p className="mb-0 text-muted" style={{ fontSize: "14px" }}>
                    {item.desc}
                  </p>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}

export default Features;