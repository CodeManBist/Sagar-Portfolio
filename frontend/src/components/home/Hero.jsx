import React from "react";

const Hero = () => {
  return (
    <section className="py-24 bg-[#0d0d0d]">
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-12">

        <div className="max-w-3xl space-y-6">

          {/* Small intro */}
          <p className="text-purple-500 text-sm tracking-wide">
            Full Stack Developer
          </p>

          {/* Main heading */}
          <h1 className="text-4xl md:text-6xl font-semibold text-white leading-tight">
            Building clean & scalable
            <br />
            web applications.
          </h1>

          {/* Description */}
          <p className="text-[#a1a1aa] text-lg max-w-xl">
            I design and develop modern web applications using React, Node.js,
            and scalable backend systems — focused on performance, usability, and clean UI.
          </p>

          {/* Buttons */}
          <div className="flex items-center gap-4 pt-4">

            <button className="px-6 py-3 rounded-md bg-white text-black hover:bg-neutral-200 transition">
              View Work
            </button>

            <button className="px-6 py-3 rounded-md border border-white/10 text-white hover:bg-white/5 transition">
              Contact Me
            </button>

          </div>

        </div>

      </div>
    </section>
  );
};

export default Hero;