import { useRef, useState } from "react";
import { toast } from "react-toastify";
import "./serviceForm.css";

const FORM_URL = import.meta.env.VITE_SERVICE_FORM;

function ServiceForm({ selectedService, onSuccess }) {
  const form = useRef();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const name = form.current.user_name.value.trim();
    const mobile = form.current.user_phone.value.trim();
    const address = form.current.user_address.value.trim();
    const requirement = form.current.requirement.value;

    if (name.length < 2) {
      toast.error("Please enter a valid name.");
      return;
    }

    if (!/^[6-9]\d{9}$/.test(mobile)) {
      toast.error("Please enter a valid 10-digit mobile number.");
      return;
    }

    if (address.length < 5) {
      toast.error("Please enter your address.");
      return;
    }

    if (!requirement) {
      toast.error("Please select a requirement.");
      return;
    }

    try {
      setLoading(true);

      const formData = new FormData();

      // Replace with your Google Form Entry IDs
      formData.append("entry.1336435231", name);
      formData.append("entry.1158563651", mobile);
      formData.append("entry.1531685680", requirement);
      formData.append("entry.1234878545", address);

      await fetch(FORM_URL, {
        method: "POST",
        mode: "no-cors",
        body: formData,
      });

      toast.success("Request submitted successfully!");
      form.current.reset();
      if (onSuccess) {
        onSuccess();
      }
    } catch (error) {
      toast.error("Failed to submit request.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div id="service-form">
      <form ref={form} onSubmit={handleSubmit}>
        <div className="row g-3">
          <div className="col-md-6">
            <input
              type="text"
              name="user_name"
              className="form-control"
              placeholder="Full Name"
              required
            />
          </div>

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

          <div className="col-12">
            <select
              name="requirement"
              className="form-select"
              defaultValue={selectedService || ""}
              required
            >
              <option value="" disabled>
                Select Requirement
              </option>

              <option value="New Meter Installation">
                New Meter Installation
              </option>

              <option value="General Repair">General Repair</option>
            </select>
          </div>

          <div className="col-12">
            <textarea
              name="user_address"
              className="form-control"
              rows="3"
              placeholder="Address"
              required
            />
          </div>

          <div className="col-12">
            <button
              type="submit"
              className="btn btn-primary w-100"
              disabled={loading}
            >
              {loading ? "Submitting..." : "Submit Request"}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default ServiceForm;
