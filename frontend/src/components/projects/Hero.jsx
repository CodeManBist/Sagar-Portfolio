import React from "react";

const Hero = () => {
  return (
    <section className="relative py-24 bg-[#0d0d0d] border-b border-white/10 overflow-hidden">

      {/* 🔥 Background gradient (NOT blob) */}
      <div className="absolute inset-0">
        <div className="absolute left-1/3 top-0 w-[600px] h-[400px] bg-purple-500/20 blur-[120px] opacity-30" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 md:px-10 lg:px-12">

        {/* 🔥 Grid layout for structure */}
        <div className="grid md:grid-cols-2 items-center">

          {/* LEFT CONTENT */}
          <div className="max-w-xl space-y-6">

            {/* Label */}
            <p className="text-purple-400 text-sm tracking-wide">
              Work
            </p>

            {/* Title */}
            <h1 className="text-4xl md:text-5xl font-semibold text-white leading-tight">
              Selected{" "}
              <span className="text-purple-400">Projects</span>
            </h1>

            {/* Description */}
            <p className="text-[#a1a1aa] text-base md:text-lg leading-relaxed">
              A curated collection of projects focused on solving real-world problems with scalable architecture and clean user experience.
            </p>

            {/* Divider */}
            <div className="w-12 h-[2px] bg-purple-500/50" />

          </div>

          {/* RIGHT SIDE (empty space for balance or future image) */}
          <div className="hidden md:block" />

        </div>

      </div>
    </section>
  );
};

export default Hero;