import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
import "./contactForm.css";

function ContactForm({ onSuccess }) {
  const form = useRef();
  const [loading, setLoading] = useState(false);

  const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const CONTACT_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_CONTACT_TEMPLATE_ID;
  const AUTO_REPLY_TEMPLATE_ID = import.meta.env
    .VITE_EMAILJS_AUTO_REPLY_TEMPLATE_ID;
  const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

  const sendEmail = async (e) => {
    e.preventDefault();

    const mobile = form.current.user_phone.value;
    const email = form.current.user_email.value.trim();

    if (!/^[6-9]\d{9}$/.test(mobile)) {
      toast.error("Please enter a valid 10-digit mobile number.");
      return;
    }

    try {
      setLoading(true);

      // Email to you
      await emailjs.sendForm(
        SERVICE_ID,
        CONTACT_TEMPLATE_ID,
        form.current,
        PUBLIC_KEY,
      );

      // Auto-reply to customer
      if (email) {
        await emailjs.sendForm(
          SERVICE_ID,
          AUTO_REPLY_TEMPLATE_ID,
          form.current,
          PUBLIC_KEY,
        );
      }

      toast.success("Message sent successfully!");

      form.current.reset();

      // Close modal automatically
      if (onSuccess) {
        onSuccess();
      }
    } catch (error) {
      console.error(error);
      toast.error("Failed to send message.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div id="contact-form" className="p-2">
      <form ref={form} onSubmit={sendEmail}>
        <div className="mb-3">
          <input
            type="text"
            name="user_name"
            className="form-control"
            placeholder="Your Name"
            required
          />
        </div>

        <div className="mb-3">
          <input
            type="email"
            name="user_email"
            className="form-control"
            placeholder="Your Email"
          />
        </div>

        <div className="mb-3">
          <input
            type="tel"
            name="user_phone"
            className="form-control"
            placeholder="Mobile Number"
            maxLength="10"
            required
          />
        </div>

        <div className="mb-3">
          <textarea
            name="message"
            className="form-control"
            rows="3"
            placeholder="Tell us about your electrical requirement..."
            required
          />
        </div>

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
            "Send Message"
          )}
        </button>
      </form>
    </div>
  );
}

export default ContactForm;
