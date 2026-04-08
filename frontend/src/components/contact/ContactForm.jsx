import { Calendar, MessageCircle } from "lucide-react";

const ContactForm = () => {
  return (
    <div className="w-full">

      {/* FORM CARD */}
      <div className="surface-card w-full p-5 transition hover:shadow-lg sm:p-6 md:p-8">

        <form className="space-y-5">

          {/* INPUTS */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            
            <input
              type="text"
              placeholder="Full Name"
              className="input-field"
            />

            <input
              type="email"
              placeholder="Email Address"
              className="input-field"
            />

          </div>

          {/* TEXTAREA */}
          <textarea
            rows="5"
            placeholder="Briefly describe your project..."
            className="input-field"
          />

          {/* BUTTON */}
          <button
            className="action-button w-full justify-center bg-gradient-to-r from-indigo-600 to-indigo-500 text-white hover:shadow-lg"
          >
            Send Message →
          </button>

        </form>

        {/* DIVIDER */}
        <div className="my-6 text-center text-xs tracking-[0.22em] text-slate-400">
          OR CONNECT VIA
        </div>

        {/* LINKS */}
        <div className="flex justify-center gap-6 text-sm">
          
          <a href="#" className="flex items-center gap-2 text-indigo-600 hover:underline">
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