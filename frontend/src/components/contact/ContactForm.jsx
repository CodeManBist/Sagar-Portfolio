import { Calendar, MessageCircle } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { DISCOVERY_CALL_URL, WHATSAPP_URL, buildWhatsAppLeadUrl } from "../../config/links";

const TURNSTILE_SITE_KEY = import.meta.env.VITE_TURNSTILE_SITE_KEY;
const HAS_VALID_TURNSTILE_SITE_KEY =
  Boolean(TURNSTILE_SITE_KEY) && !String(TURNSTILE_SITE_KEY).includes("your_turnstile_site_key");

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState({ type: "idle", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [captchaToken, setCaptchaToken] = useState("");
  const lastForwardRef = useRef({ signature: "", timestamp: 0 });
  const submitLockRef = useRef(false);
  const turnstileContainerRef = useRef(null);
  const widgetIdRef = useRef(null);

  useEffect(() => {
    if (!HAS_VALID_TURNSTILE_SITE_KEY || !turnstileContainerRef.current) {
      return;
    }

    const renderTurnstile = () => {
      if (!window.turnstile || widgetIdRef.current !== null) {
        return;
      }

      widgetIdRef.current = window.turnstile.render(turnstileContainerRef.current, {
        sitekey: TURNSTILE_SITE_KEY,
        callback: (token) => setCaptchaToken(token),
        "expired-callback": () => setCaptchaToken(""),
        "error-callback": () => setCaptchaToken(""),
      });
    };

    renderTurnstile();
    const intervalId = window.setInterval(renderTurnstile, 500);

    return () => {
      window.clearInterval(intervalId);
      if (window.turnstile && widgetIdRef.current !== null) {
        window.turnstile.remove(widgetIdRef.current);
      }
      widgetIdRef.current = null;
    };
  }, []);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((current) => ({
      ...current,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (isSubmitting || submitLockRef.current) {
      return;
    }

    submitLockRef.current = true;
    setIsSubmitting(true);
    setStatus({ type: "idle", message: "" });
    const payload = {
      name: formData.name.trim(),
      email: formData.email.trim(),
      message: formData.message.trim(),
      captchaToken,
    };

    if (!HAS_VALID_TURNSTILE_SITE_KEY) {
      setStatus({
        type: "error",
        message: "Captcha verification is unavailable right now. Please try again later.",
      });
      setIsSubmitting(false);
      submitLockRef.current = false;
      return;
    }

    if (!captchaToken) {
      setStatus({
        type: "error",
        message: "Please complete the captcha before sending your message.",
      });
      setIsSubmitting(false);
      submitLockRef.current = false;
      return;
    }

    try {
      const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/api/contact`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || "Failed to send message");
      }

      if (result.duplicate) {
        setStatus({
          type: "success",
          message: "Duplicate submission ignored. WhatsApp was not opened again.",
        });
        return;
      }

      setFormData({
        name: "",
        email: "",
        message: "",
      });
      setCaptchaToken("");
      if (window.turnstile && widgetIdRef.current !== null) {
        window.turnstile.reset(widgetIdRef.current);
      }
      setStatus({
        type: "success",
        message: result.message || "Thanks. I’ll get back to you soon.",
      });

      const signature = JSON.stringify(payload);
      const now = Date.now();
      const isDuplicateForward =
        lastForwardRef.current.signature === signature && now - lastForwardRef.current.timestamp < 10000;

      if (!isDuplicateForward) {
        lastForwardRef.current = { signature, timestamp: now };
        const whatsappForwardUrl = buildWhatsAppLeadUrl(payload);
        const popup = window.open(whatsappForwardUrl, "_blank", "noopener,noreferrer");

        if (!popup) {
          setStatus({
            type: "success",
            message:
              "Thanks. Message received. WhatsApp could not open in a new tab (popup blocked). Please use the WhatsApp link below.",
          });
        }
      }
    } catch (error) {
      setStatus({
        type: "error",
        message: error.message || "Something went wrong. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
      submitLockRef.current = false;
    }
  };

  return (
    <div className="mx-auto w-full max-w-md">

      {/* FORM CARD */}
      <div className="surface-card w-full overflow-hidden transition hover:shadow-lg">
        <div className="border-b border-slate-200 bg-linear-to-r from-slate-50 to-white px-4 py-3">
          <p className="text-[10px] font-semibold tracking-[0.28em] text-indigo-600">CONTACT</p>
          <h3 className="mt-1 text-base font-bold tracking-tight text-slate-900 sm:text-lg">
            Let’s talk about your next project
          </h3>
        </div>

        <form className="space-y-3 px-4 py-4" onSubmit={handleSubmit} aria-live="polite">

          {/* INPUTS */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
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

          <div className="mx-auto w-full rounded-lg border border-slate-200 bg-slate-50 px-2 py-2 shadow-sm">
            <div className="flex min-h-12 items-center justify-center rounded-md border border-dashed border-slate-300 bg-white px-1 py-1">
              <div ref={turnstileContainerRef} className="origin-center scale-[0.8] sm:scale-90"></div>
            </div>

            {!HAS_VALID_TURNSTILE_SITE_KEY ? (
              <p className="mt-1 text-[10px] text-rose-600">Captcha key missing.</p>
            ) : null}
          </div>

          {/* BUTTON */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="action-button w-full justify-center bg-linear-to-r from-indigo-600 to-indigo-500 text-white shadow-md shadow-indigo-600/20 hover:shadow-lg disabled:cursor-not-allowed disabled:opacity-70"
          >
            {isSubmitting ? "Sending..." : "Send Message →"}
          </button>

          {status.type !== "idle" ? (
            <p
              className={`text-sm font-medium ${
                status.type === "success"
                  ? "rounded-lg border border-emerald-200 bg-emerald-50 px-3 py-2 text-emerald-700"
                  : "rounded-lg border border-rose-200 bg-rose-50 px-3 py-2 text-rose-700"
              }`}
            >
              {status.message}
            </p>
          ) : null}

          <div className="pt-1">
            <div className="mb-3 flex items-center gap-2">
              <div className="h-px flex-1 bg-slate-200"></div>
              <span className="text-[10px] font-semibold tracking-[0.22em] text-slate-400">
                OR CONNECT VIA
              </span>
              <div className="h-px flex-1 bg-slate-200"></div>
            </div>

            {/* LINKS */}
            <div className="grid gap-2 sm:grid-cols-2">
              <a
                href={DISCOVERY_CALL_URL}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center gap-2 rounded-lg border border-indigo-200 bg-indigo-50 px-3 py-2 text-sm font-medium text-indigo-700 transition hover:bg-indigo-100"
              >
                <Calendar size={16} /> Discovery Call
              </a>

              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center gap-2 rounded-lg border border-emerald-200 bg-emerald-50 px-3 py-2 text-sm font-medium text-emerald-700 transition hover:bg-emerald-100"
              >
                <MessageCircle size={16} /> WhatsApp
              </a>
            </div>
          </div>

        </form>

      </div>

      {/* ✅ BADGE RIGHT SIDE BELOW FORM */}
      <div className="mt-4 flex items-center justify-center">
        <span className="flex items-center gap-2 rounded-full bg-emerald-50 px-4 py-1.5 text-xs text-emerald-600 shadow-sm">
          <span className="h-2 w-2 rounded-full bg-emerald-500"></span>
          Available for new projects
        </span>
      </div>

    </div>
  );
};

export default ContactForm;