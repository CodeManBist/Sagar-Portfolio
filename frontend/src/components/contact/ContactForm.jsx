import { Calendar, MessageCircle } from "lucide-react";
import { useState } from "react";
import { DISCOVERY_CALL_URL } from "../../config/links";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState({ type: "idle", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((current) => ({
      ...current,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: "idle", message: "" });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || "Failed to send message");
      }

      setFormData({
        name: "",
        email: "",
        message: "",
      });
      setStatus({
        type: "success",
        message: result.message || "Thanks. I’ll get back to you soon.",
      });
    } catch (error) {
      setStatus({
        type: "error",
        message: error.message || "Something went wrong. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full">

      {/* FORM CARD */}
      <div className="surface-card w-full p-5 transition hover:shadow-lg sm:p-6 md:p-8">

        <form className="space-y-5" onSubmit={handleSubmit}>

          {/* INPUTS */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleChange}
              autoComplete="name"
              required
              className="input-field"
            />

            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              autoComplete="email"
              required
              className="input-field"
            />

          </div>

          {/* TEXTAREA */}
          <textarea
            rows="5"
            name="message"
            placeholder="Briefly describe your project..."
            value={formData.message}
            onChange={handleChange}
            required
            className="input-field"
          />

          {/* BUTTON */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="action-button w-full justify-center bg-linear-to-r from-indigo-600 to-indigo-500 text-white hover:shadow-lg disabled:cursor-not-allowed disabled:opacity-70"
          >
            {isSubmitting ? "Sending..." : "Send Message →"}
          </button>

          {status.type !== "idle" ? (
            <p
              className={`text-sm ${
                status.type === "success" ? "text-emerald-600" : "text-rose-600"
              }`}
            >
              {status.message}
            </p>
          ) : null}

        </form>

        {/* DIVIDER */}
        <div className="my-6 text-center text-xs tracking-[0.22em] text-slate-400">
          OR CONNECT VIA
        </div>

        {/* LINKS */}
        <div className="flex justify-center gap-6 text-sm">
          
          <a
            href={DISCOVERY_CALL_URL}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 text-indigo-600 hover:underline"
          >
            <Calendar size={16} /> Discovery Call
          </a>

          <a href="#" className="flex items-center gap-2 text-emerald-600 hover:underline">
            <MessageCircle size={16} /> WhatsApp
          </a>

        </div>

      </div>

      {/* ✅ BADGE RIGHT SIDE BELOW FORM */}
      <div className="flex justify-center items-center mt-4">
        <span className="flex items-center gap-2 rounded-full bg-emerald-50 px-4 py-1.5 text-xs text-emerald-600 shadow-sm">
          <span className="h-2 w-2 rounded-full bg-emerald-500"></span>
          Available for new projects
        </span>
      </div>

    </div>
  );
};

export default ContactForm;