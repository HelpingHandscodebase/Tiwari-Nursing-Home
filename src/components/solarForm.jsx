import { useRef, useState } from "react";
import { toast } from "react-toastify";
import "./solarForm.css";

const SOLAR_FORM_URL = import.meta.env.VITE_SOLAR_FORM;

function SolarForm({ onSuccess }) {
  const form = useRef();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const name = form.current.user_name.value.trim();
    const mobile = form.current.user_phone.value.trim();
    const email = form.current.user_email.value.trim();
    const monthlyBill = form.current.monthly_bill.value.trim();

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

    if (!monthlyBill || Number(monthlyBill) <= 0) {
      toast.error("Please enter a valid monthly electricity bill.");
      return;
    }

    try {
      setLoading(true);

      // Google Form integration will be added later

      // await new Promise((resolve) =>
      //   setTimeout(resolve, 1000)
      // );

      const formData = new FormData();

      formData.append("entry.309597755", form.current.user_name.value);

      formData.append("entry.1977698151", form.current.user_phone.value);

      formData.append("entry.1048824276", form.current.user_email.value);

      formData.append("entry.527172131", form.current.property_type.value);

      formData.append("entry.2023124407", form.current.monthly_bill.value);

      formData.append("entry.950109535", form.current.solar_capacity.value);

      formData.append("entry.732117588", form.current.system_type.value);

      formData.append("entry.344067029", form.current.user_address.value);

      formData.append("entry.1156005092", form.current.solar_requirement.value);

      await fetch(
        SOLAR_FORM_URL,
        {
          method: "POST",
          mode: "no-cors",
          body: formData,
        },
      );

      toast.success("Solar enquiry submitted successfully!");

      form.current.reset();

      if (onSuccess) {
        onSuccess();
      }
    } catch (error) {
      console.error(error);
      toast.error("Failed to submit enquiry.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div id="solar-form" className="p-2">
      <form ref={form} onSubmit={handleSubmit}>
        <div className="row g-3">
          {/* Name */}
          <div className="col-md-6">
            <input
              type="text"
              name="user_name"
              className="form-control"
              placeholder="Your Name"
              required
            />
          </div>

          {/* Mobile */}
          <div className="col-md-6">
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
          <div className="col-md-6">
            <input
              type="email"
              name="user_email"
              className="form-control"
              placeholder="Email Address"
            />
          </div>

          {/* Property Type */}
          <div className="col-md-6">
            <select
              name="property_type"
              className="form-select"
              defaultValue=""
              required
            >
              <option value="" disabled>
                Select Property Type
              </option>
              <option value="House">House</option>
              <option value="Shop">Shop</option>
              <option value="Office">Office</option>
              <option value="Commercial Building">Commercial Building</option>
              <option value="Factory / Industrial">Factory / Industrial</option>
              <option value="Other">Other</option>
            </select>
          </div>

          {/* Monthly Electricity Bill */}
          <div className="col-md-6">
            <input
              type="number"
              name="monthly_bill"
              className="form-control"
              placeholder="Monthly Electricity Bill (₹)"
              min="1"
              required
            />
          </div>

          {/* Solar Capacity */}
          <div className="col-md-6">
            <input
              type="number"
              name="solar_capacity"
              className="form-control"
              placeholder="Required Solar Capacity (kW)"
              step="0.1"
              min="0"
              required
            />
          </div>

          {/* System Type */}
          <div className="col-12">
            <select
              name="system_type"
              className="form-select"
              defaultValue=""
              required
            >
              <option value="" disabled>
                Select System Type
              </option>
              <option value="On Grid">On Grid</option>
              <option value="Off Grid">Off Grid</option>
              <option value="Hybrid (Battery + Grid)">Hybrid (Battery + Grid)</option>
              <option value="Not Sure">Not Sure</option>
            </select>
          </div>

          {/* Address */}
          <div className="col-12">
            <textarea
              name="user_address"
              className="form-control"
              rows="3"
              placeholder="Address"
              required
            />
          </div>

          {/* Additional Requirement */}
          <div className="col-12">
            <textarea
              name="solar_requirement"
              className="form-control"
              rows="4"
              placeholder="Tell us about your solar requirement..."
            />
          </div>

          {/* Submit Button */}
          <div className="col-12">
            <button
              type="submit"
              className="btn btn-primary w-100 fw-semibold"
              disabled={loading}
            >
              {loading ? (
                <>
                  <span
                    className="spinner-border spinner-border-sm me-2"
                    role="status"
                    aria-hidden="true"
                  ></span>
                  Submitting...
                </>
              ) : (
                "Submit Solar Enquiry"
              )}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default SolarForm;
