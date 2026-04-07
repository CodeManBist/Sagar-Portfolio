import { Calendar, MessageCircle } from "lucide-react";

const ContactForm = () => {
  return (
    <div className="w-full">

      {/* FORM CARD */}
      <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition p-5 sm:p-6 md:p-8 w-full">

        <form className="space-y-5">

          {/* INPUTS */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            
            <input
              type="text"
              placeholder="Full Name"
              className="border border-[#E2E8F0] bg-[#F8FAFC] text-[#0F172A] placeholder:text-[#94A3B8]
              rounded-md px-4 py-2.5 text-sm 
              focus:border-[#4F46E5] focus:ring-2 focus:ring-[#4F46E5]/20
              hover:border-[#CBD5F5]
              outline-none transition-all duration-200"
            />

            <input
              type="email"
              placeholder="Email Address"
              className="border border-[#E2E8F0] bg-[#F8FAFC] text-[#0F172A] placeholder:text-[#94A3B8]
              rounded-md px-4 py-2.5 text-sm 
              focus:border-[#4F46E5] focus:ring-2 focus:ring-[#4F46E5]/20
              hover:border-[#CBD5F5]
              outline-none transition-all duration-200"
            />

          </div>

          {/* TEXTAREA */}
          <textarea
            rows="5"
            placeholder="Briefly describe your project..."
            className="w-full border border-[#E2E8F0] bg-[#F8FAFC] text-[#0F172A] placeholder:text-[#94A3B8]
            rounded-md px-4 py-2.5 text-sm 
            focus:border-[#4F46E5] focus:ring-2 focus:ring-[#4F46E5]/20
            hover:border-[#CBD5F5]
            outline-none transition-all duration-200"
          />

          {/* BUTTON */}
          <button
            className="w-full bg-gradient-to-r from-[#4F46E5] to-[#6366F1] text-white py-3 rounded-md text-sm font-medium 
            hover:shadow-lg hover:scale-[1.01] active:scale-[0.98] transition-all duration-200"
          >
            Send Message →
          </button>

        </form>

        {/* DIVIDER */}
        <div className="my-6 text-center text-xs text-[#94A3B8] tracking-wide">
          OR CONNECT VIA
        </div>

        {/* LINKS */}
        <div className="flex justify-center gap-6 text-sm">
          
          <a href="#" className="flex items-center gap-2 text-[#4F46E5] hover:underline">
            <Calendar size={16} /> Discovery Call
          </a>

          <a href="#" className="flex items-center gap-2 text-green-600 hover:underline">
            <MessageCircle size={16} /> WhatsApp
          </a>

        </div>

      </div>

      {/* ✅ BADGE RIGHT SIDE BELOW FORM */}
      <div className="flex justify-center items-center mt-4">
        <span className="text-xs bg-green-100 text-green-600 px-4 py-1.5 rounded-full flex items-center gap-2 shadow-sm">
          <span className="w-2 h-2 bg-green-500 rounded-full"></span>
          Available for new projects
        </span>
      </div>

    </div>
  );
};

export default ContactForm;