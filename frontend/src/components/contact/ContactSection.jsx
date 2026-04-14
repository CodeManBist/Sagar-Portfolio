import React from "react";

const ContactSection = () => {
  return (
    <section className="py-20 md:py-24 bg-[#0d0d0d]">
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-12">

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-start">

          {/* 🔥 LEFT SIDE */}
          <div className="space-y-8">

            <div className="space-y-4">
              <h2 className="text-2xl md:text-3xl font-semibold text-white">
                Let’s discuss your project
              </h2>

              <p className="text-[#a1a1aa] leading-relaxed max-w-md">
                Whether you have a detailed plan or just an idea, I can help you turn it into a scalable and high-quality product.
              </p>
            </div>

            {/* Info */}
            <div className="space-y-6 text-sm">

              <div>
                <p className="text-white text-sm mb-1">Email</p>
                <p className="text-[#a1a1aa]">sagar@email.com</p>
              </div>

              <div>
                <p className="text-white text-sm mb-1">Location</p>
                <p className="text-[#a1a1aa]">India</p>
              </div>

              <div>
                <p className="text-white text-sm mb-1">Availability</p>
                <p className="text-[#a1a1aa]">Open for freelance</p>
              </div>

            </div>

          </div>

          {/* 🔥 RIGHT SIDE (CARD FORM) */}
          <div className="relative">

            {/* Card */}
            <form className="space-y-5 p-6 sm:p-8 rounded-2xl border border-white/10 bg-white/[0.02]">

              {/* Name */}
              <div className="space-y-1">
                <label className="text-xs text-[#71717a]">Your Name</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 rounded-md bg-white/5 border border-white/10 text-white 
                  outline-none transition 
                  focus:border-purple-400 focus:ring-1 focus:ring-purple-400"
                />
              </div>

              {/* Email */}
              <div className="space-y-1">
                <label className="text-xs text-[#71717a]">Your Email</label>
                <input
                  type="email"
                  className="w-full px-4 py-3 rounded-md bg-white/5 border border-white/10 text-white 
                  outline-none transition 
                  focus:border-purple-400 focus:ring-1 focus:ring-purple-400"
                />
              </div>

              {/* Message */}
              <div className="space-y-1">
                <label className="text-xs text-[#71717a]">Message</label>
                <textarea
                  rows="5"
                  className="w-full px-4 py-3 rounded-md bg-white/5 border border-white/10 text-white 
                  outline-none transition 
                  focus:border-purple-400 focus:ring-1 focus:ring-purple-400"
                />
              </div>

              {/* Button */}
              <button
                type="submit"
                className="w-full mt-2 px-6 py-3 rounded-md bg-white text-black 
                transition-all duration-200 
                hover:bg-neutral-200 hover:-translate-y-1 
                hover:shadow-[0_0_20px_rgba(255,255,255,0.15)]"
              >
                Send Message
              </button>

            </form>

          </div>

        </div>

      </div>
    </section>
  );
};

export default ContactSection;