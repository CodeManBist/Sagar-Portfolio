import React from "react";

const CTA = () => {
  return (
    <section className="py-20 md:py-24 bg-[#0d0d0d] border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-12">

        {/* 🔥 Split Layout */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">

          {/* LEFT CONTENT */}
          <div className="max-w-xl space-y-3">

            <p className="text-purple-400 text-sm tracking-wide">
              Let’s Work Together
            </p>

            <h2 className="text-2xl md:text-3xl font-semibold text-white">
              Need a developer for your next project?
            </h2>

            <p className="text-[#a1a1aa] text-sm md:text-base">
              I’m available for freelance work and collaborations. Let’s discuss your requirements and build something impactful.
            </p>

          </div>

          {/* RIGHT ACTION */}
          <div className="flex flex-col sm:flex-row gap-3">

            <button className="w-full sm:w-auto px-6 py-3 rounded-md bg-white text-black 
            transition-all duration-200 
            hover:bg-neutral-200 hover:-translate-y-1 
            hover:shadow-[0_0_20px_rgba(255,255,255,0.15)]">
              Contact Me
            </button>

            <button className="w-full sm:w-auto px-6 py-3 rounded-md border border-white/10 text-white 
            transition-all duration-200 
            hover:bg-white/5 hover:-translate-y-1">
              View Work
            </button>

          </div>

        </div>

      </div>
    </section>
  );
};

export default CTA;