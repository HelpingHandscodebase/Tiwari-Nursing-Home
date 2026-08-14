import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/navBar";
import Footer from "./components/footer";
import ScrollToSection from "./components/ScrollToSection";
import StructuredData from "./components/StructuredData";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Analytics } from "@vercel/analytics/react"

const HOME = lazy(() => import("./components/home"));
const About = lazy(() => import("./components/about"));
const Patholab = lazy(() => import("./components/patholab"));

function App() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Analytics/>
      <NavBar />
      <ScrollToSection />
      <StructuredData />

      <div className="flex-grow-1">
        <Suspense fallback={<div className="text-center py-5"><div className="spinner-border text-primary" role="status"><span className="visually-hidden">Loading...</span></div></div>}>
          <Routes>
            <Route path="/" element={<HOME />} />
            <Route path="/doctor/:id" element={<About />} />
            <Route path="/patholab" element={<Patholab />} />
          </Routes>
        </Suspense>
      </div>

      <Footer />
      <ToastContainer position="top-right" autoClose={3000} />
    </div>
  );
}

export default App;