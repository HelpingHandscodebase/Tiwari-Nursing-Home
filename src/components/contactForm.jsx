import { useRef, useState } from "react";
import { toast } from "react-toastify";
import "./contactForm.css";

const CONTACT_FORM_URL = import.meta.env.VITE_CONTACT_FORM;

function ContactForm({ onSuccess }) {
  const form = useRef();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const name = form.current.user_name.value.trim();
    const mobile = form.current.user_phone.value.trim();
    const email = form.current.user_email.value.trim();
    const address = form.current.user_address.value.trim();
    const purpose = form.current.purpose.value;
    const message = form.current.message.value.trim();

    if (name.length < 2) {
      toast.error("Please enter a valid name.");
      return;
    }

    if (!/^[6-9]\d{9}$/.test(mobile)) {
      toast.error("Please enter a valid 10-digit mobile number.");
      return;
    }

    if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      toast.error("Please enter a valid email address.");
      return;
    }

    if (address.length < 5) {
      toast.error("Please enter your address.");
      return;
    }

    if (!purpose) {
      toast.error("Please select a service.");
      return;
    }

    if (message.length < 10) {
      toast.error("Please provide more details.");
      return;
    }

    try {
      setLoading(true);

      // Google Form / EmailJS integration tomorrow

      // await new Promise((resolve) =>
      //   setTimeout(resolve, 1000)
      // );

      const formData = new FormData();

      formData.append("entry.340212456", name);
      formData.append("entry.1912365563", mobile);
      formData.append("entry.1079988259", email);
      formData.append("entry.84042076", address);
      formData.append("entry.913493555", purpose);
      formData.append("entry.1767068679", message);

      await fetch(
        CONTACT_FORM_URL,
        {
          method: "POST",
          mode: "no-cors",
          body: formData,
        },
      );

      toast.success("Enquiry submitted successfully!");

      form.current.reset();

      if (onSuccess) {
        onSuccess();
      }
    } catch (error) {
      toast.error("Failed to submit enquiry.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div id="contact-form" className="p-2">
      <form ref={form} onSubmit={handleSubmit}>
        <div className="row g-2">
          {/* Name */}
          <div className="col-md-6 mb-3">
            <input
              type="text"
              name="user_name"
              className="form-control"
              placeholder="Your Name"
              required
            />
          </div>

          {/* Phone */}
          <div className="col-md-6 mb-3">
            <input
              type="tel"
              name="user_phone"
              className="form-control"
              placeholder="Mobile Number"
              maxLength="10"
              required
            />
          </div>

          {/* Email */}
          <div className="col-md-6 mb-3">
            <input
              type="email"
              name="user_email"
              className="form-control"
              placeholder="Email Address"
            />
          </div>

          {/* Service Required */}
          <div className="col-md-6 mb-3">
            <select
              name="purpose"
              className="form-select"
              required
              defaultValue=""
            >
              <option value="" disabled>
                Select Service Required
              </option>
              <option value="New Wiring">New Wiring</option>
              <option value="Smart Meter Installation">
                Smart Meter Installation
              </option>
              <option value="General Repair">General Repair</option>
              <option value="Solar Installation">Solar Installation</option>
              <option value="Emergency Service">Emergency Service</option>
              <option value="Other">Other</option>
            </select>
          </div>

          {/* Address */}
          <div className="col-12 mb-3">
            <textarea
              name="user_address"
              className="form-control"
              rows="3"
              placeholder="Address"
              required
            />
          </div>

          {/* Message */}
          <div className="col-12 mb-3">
            <textarea
              name="message"
              className="form-control"
              rows="4"
              placeholder="Tell us about your requirement..."
              required
            />
          </div>

          {/* Submit */}
          <div className="col-12">
            <button
              type="submit"
              className="btn btn-primary w-100"
              disabled={loading}
            >
              {loading ? (
                <>
                  <span
                    className="spinner-border spinner-border-sm me-2"
                    role="status"
                    aria-hidden="true"
                  ></span>
                  Sending...
                </>
              ) : (
                "Submit Enquiry"
              )}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default ContactForm;
